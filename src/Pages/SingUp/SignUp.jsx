import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/Images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, setLoader, loader } = useContext(AuthContext);
  const navigate = useNavigate();

  //validateName
  const validateName = (name) => {
    const namePattern = /^[a-zA-Z\s-]+$/;

    if (!name.match(namePattern)) {
      toast.error(
        "Invalid Name. Only letters, spaces, and hyphens are allowed."
      );
      return false;
    }
    return true;
  };

  //validateEmail
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
      toast.error("Invalid email address.");
      return false;
    }

    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!password.match(passwordPattern)) {
      toast.error(
        "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one digit."
      );
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  //hanlde Signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    // const user = { name, email, password, confirmPassword };
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confrimPassword.value;
    //validation Processs
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password, confirmPassword);

    if (isNameValid && isEmailValid && isPasswordValid) {
      try {
        const currentUser = await createUser(name, email, password);
        Swal.fire({
          title: "Success!",
          text: "User Created Successfully.Check your email for varification",
          icon: "success",
          confirmButtonText: "Log In",
        }).then((result) => {
          if (result.isConfirmed) {
            from.reset();
            navigate(`/login`);
          }
        });
      } catch (error) {
        Swal.fire({
          title: "Oops...!",
          text: `${
            error.message === "Firebase: Error (auth/email-already-in-use)."
              ? "Email Already In Use"
              : error.message
          }`,
          icon: "error",
          footer: "Please Enter Another Account to Singup",
        });
      }
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row space-x-10">
          <div className="w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
            <h1 className="text-4xl text-center font-bold">SignUp!</h1>
            <div className="card-body">
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confrimPassword"
                    placeholder="Confrim Password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className=" btn text-white bg-[#FF3811] hover:bg-green-500"
                  >
                    Sign UP
                  </button>
                </div>
              </form>
              <p className="text-center text-sm font-semibold my-2">
                Already Have a Account{" "}
                <Link
                  to="/login"
                  className="text-[#FF3811] font-semibold underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
