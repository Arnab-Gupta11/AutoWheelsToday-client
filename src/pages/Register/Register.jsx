import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleRegistrationForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("image");
    const password = form.get("password");
    console.log(name, email, image, password);
    // reset message
    setError("");

    //password validation
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/.test(password)) {
      setError("Password must contain at least 6 characters, at least 1 capital letter, and at least 1 special character.");
      return;
    }

    //Register user
    registerUser(email, password)
      .then((result) => {
        toast.success("Account created successfully");
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("propfile updated");
          })
          .catch((error) => {
            console.log(error);
          });
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
              <h1 className="text-5xl font-bold pt-10 text-[#415454]">Register now!</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegistrationForm}>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="image url"
                    name="image"
                    className="px-4 py-3 rounded-lg shadow-inner shadow-violet-300 outline-none border-none mb-4"
                  />
                </div>
                <div className="form-control mb-4">
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
                    className="btn text-xl text-white font-medium normal-case bg-[#FF6A25] shadow-md shadow-violet-100 hover:border-[#FF6A25] hover:bg-white hover:text-[#FF6A25] hover:shadow-md hover:shadow-[#FF6A25]"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
              <p className="text-red-600 font-medium my-3">{error}</p>

              <label className="label text-neutral font-medium">
                Already have an account?
                <Link to="/login" className="link link-hover text-[#FF6A25]">
                  Please Login
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
