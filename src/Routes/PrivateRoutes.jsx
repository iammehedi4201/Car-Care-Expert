import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  console.log("Location  status :", location );

  if (loader) {
    return (
      <div className="w-full flex justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;

//<Navigate to='/login' replace></Navigate>
//>Here's an example scenario where using replace could be beneficial: Suppose you have a login page. After a user successfully logs in, you may want to navigate them to a dashboard or home page. In this case, you can use replace to ensure that the login page is not accessible via the back button, improving the user experience.
