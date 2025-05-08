import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../store/Context/Context";
import { toast } from "react-toastify";

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Blog", path: "/blogs" },
];

const Navbar = () => {
  const { user,logout } = useContext(AuthContext);

  const navLinks = navbarItems.map((item) => (
    <li key={item.name} className="hover:bg-gray-200">
      <NavLink
        to={item.path}
        className="px-4 py-2 text-gray-700 hover:text-gray-900"
      >
        {item.name}
      </NavLink>
    </li>
  ));
const handleLogout = () => {
    logout().then(() => {
      toast.success("Logout Successfully");
    }).catch((error) => {
      toast.error(error.message);
    })
}

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Firebase Auth System</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          {!user && (
            <>
              <Link to="/login" className="btn btn-primary">
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/SingUp" className="btn btn-primary">
                <button className="btn btn-primary">SingUp</button>
              </Link>
            </>
          )}
          {
            user && (
                <>
                <img onClick={handleLogout} className="h-10 w-10 cursor-pointer rounded-full" src={user?.photoURL} alt={user?.displayName} />
                </>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
