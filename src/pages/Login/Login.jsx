import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";

import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProviders";
const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegistrationForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //sign in user
    loginUser(email, password)
      .then((result) => {
        toast.success("Successfully Login");
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid email or password");
      });
  };

  //Google Sign in handle
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-base-200 z-0">
      <Toaster></Toaster>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col py-8 items-center lg:flex-row gap-5">
          <div className="hidden md:block">
            <img src="https://i.ibb.co/JKxpfSK/12953573-Data-security-05-removebg-preview.png" alt="" />
          </div>
          <div className="w-11/12 md:10/12 lg:w-4/12 shadow-xl  shadow-violet-400 text-[#2d373c] bg-base-100 rounded-lg mx-auto">
            <div className="text-center mb-3 mt-3">
              <h1 className="text-xl md:text-4xl lg:px-5 font-bold pt-10 text-[#2d373c]">Login to your account</h1>
              <div className="mt-2 font-medium text-lg">
                Dont have an account?
                <Link to="/register" className="text-[#FF6A25] link link-hover ml-2">
                  Please Register
                </Link>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistrationForm}>
                <div className="form-control">
                  {/* <label className="label">
                    <span className="label-text">Email</span>
                  </label> */}
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
                    required
                  />
                </div>

                <div className="form-control mb-4">
                  {/* <label className="label">
                    <span className="label-text">Password</span>
                  </label> */}
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="px-4 py-3 w-full rounded-lg shadow-inner shadow-violet-300 outline-none border-none bg-transparent mb-4"
                      required
                    />
                  </div>
                </div>

                <p>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="ml-3">
                    Accept our term and condition
                  </label>
                </p>
                <div className="form-control mt-6 p-0">
                  <button
                    className="btn text-xl text-white font-medium normal-case bg-[#FF6A25] shadow-md shadow-violet-100 hover:border-[#2d373c] hover:bg-white hover:text-[#2d373c] hover:shadow-md hover:shadow-[#2d373c]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>

              <hr className="my-5 bg-[#2d373c]" />
              <div>
                <div className="flex items-center px-4 py-3 w-full rounded-lg justify-center text-lg gap-2 border border-[#FF6A25] shadow-md hover:shadow-md hover:shadow-[#FF6A25]">
                  <div className="">
                    <FcGoogle></FcGoogle>
                  </div>

                  <button onClick={handleGoogleLogin} className="text-[#706F6F] font-medium">
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
