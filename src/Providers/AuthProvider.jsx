/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  console.log("The auth state user is :-", user);

  //Create User
  const createUser = async (name, email, password) => {
    setLoader(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //only proceed if user account creation successfully
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      //only proceed if user UpdateProfile is successfully
      await sendEmailVerification(userCredential.user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  //login
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logout = () => {
    return signOut(auth);
  };

  //login with google
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false);

        //For jwt token
        const userInfo = {
          email: currentUser.email,
        };
        const uri = "http://localhost:3000/jwt";
        const respone = await fetch(uri, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });

        const data = await respone.json();
        console.log("token is :-", data);
        //storing the token in localstorage
        localStorage.setItem("car-access-token", data.token);
      } else {
        setUser(null);
        setLoader(false);
        localStorage.removeItem("car-access-token");
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loader,
    setLoader,
    createUser,
    login,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
