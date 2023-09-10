import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  //navItem generate
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      {user?.email ? (
        <li>
          <Link to="/cart">My Bookings</Link>
        </li>
      ) : (
        " "
      )}
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 w-32">
            <li>
              <Link>WheelPro</Link>
            </li>
            <li>
              <Link>QuickFix</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contract</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 border-2 border-green-400 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl pl-0 sm:pl-4 w-20 sm:w-28 sm:h-20">
            <img className="sm:w-full" src={logo} alt="" />
          </Link>
        </div>
        {/* This is for  large version  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="btn-group flex max-[460px]:flex-col ">
              <Link className="btn  btn-success">{user?.displayName}</Link>
              <button
                onClick={async () => {
                  try {
                    await logout();  
                    toast.success("Logout Successfuly");
                  } catch (error) {
                    console.log(error);
                  }
                }}
                className="btn text-white btn-error  max-[460px]:mt-2"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline btn-warning">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
