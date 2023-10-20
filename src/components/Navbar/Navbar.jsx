import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import HeadRoom from "react-headroom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  // const email = user.email;
  const link = (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-7 font-medium font-barlow">
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF6A25] shadow-md  py-2 rounded-md px-2" : "")}
          >
            HOME
          </NavLink>
        </div>
        {user ? (
          <div>
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF6A25] shadow-md  py-2 rounded-md px-2" : "")}
            >
              Add Product
            </NavLink>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <div>
            <NavLink
              to={`/carts`}
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF6A25] shadow-md  py-2 rounded-md px-2" : "")}
            >
              My Cart
            </NavLink>
          </div>
        ) : (
          ""
        )}

        {/* <div>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-violet-600 border border-violet-600 px-2" : "")}
          >
            REGISTER
          </NavLink>
        </div> */}
      </div>
    </>
  );

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        console.log("successful logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <HeadRoom>
      <div className=" bg-white drop-shadow-md  py-3">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="w-52 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                {link}
              </ul>
            </div>

            <a className="flex items-center gap-4">
              <span>
                <img className="md:w-14 md:h-8" src="https://i.ibb.co/nmn3Hy1/logo.png" alt="" />
              </span>
              <div className="text-xl md:text-3xl font-bold ">
                <span className="text-[#FF6A25] font-extrabold">Auto</span>
                <span className="">WheelsToday</span>
              </div>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="text-xl font-semibold mb-0">{user?.displayName}</a>
                  </li>
                  <li>
                    <a className="text-gray-700 mt-0">{user?.email}</a>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <button onClick={handleSignOut} className="text-[#FF6A25] text-lg font-medium">
                        Logout
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            <div>
              {user ? (
                ""
              ) : (
                <button className="btn bg-[#FF6A25] normal-case text-white px-7 text-base py-3">
                  <Link to={"/login"}>Login</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeadRoom>
  );
};

export default Navbar;
