import googleImg from "@/assets/images/google.png";
import { publicRoutes } from "@/routes/routes";
import { NavLink, useNavigate } from "react-router-dom";
import signUpImg from "@/assets/images/resort.jpg";
import { auth, googleAuth } from "@/config/firebase";
import { useState } from "react";
import { AxiosError } from "axios";
import { notification } from "antd";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { protectedRoutes } from "@/routes/routes";

const SignUp = () => {
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const createAccountUsingEmailandPassword = async () => {
    setSaving(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      navigate(protectedRoutes.dashboard.path);
    } catch (err) {
      const error = err as AxiosError;
      notification.error({
        message: error.message.replace("Firebase: Error", ""),
      });
    } finally {
      setSaving(false);
    }
  };
  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
      navigate(protectedRoutes.dashboard.path);
    } catch (err) {
      const error = err as AxiosError;
      notification.error({
        message: error.message.replace("Firebase: Error", ""),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAccountUsingEmailandPassword();
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <div className="flex items-center mb-2">
              <span className="flex items-center justify-center w-6 h-6 px-2 text-sm text-white bg-black rounded-sm">
                BH
              </span>
              <span className="ml-1">Book Home</span>{" "}
            </div>

            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign Up to Book With Us
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account ?
              <NavLink
                to={publicRoutes.login.path}
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Login
              </NavLink>
            </p>

            <form
              action=""
              onSubmit={handleSubmit}
              method="POST"
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      required
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    disabled={saving}
                    type="submit"
                    className={`inline-flex items-center ${
                      saving
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer"
                    } justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700`}
                  >
                    {saving ? "Please wait..." : "Sign up"}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className={`relative inline-flex  items-center justify-center ${
                  saving ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                } w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none`}
                onClick={() => signUpWithGoogle()}
                disabled={saving}
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <img src={googleImg} alt="" className="w-7 h-7" />
                </div>
                {/* {saving? "Please wait ... ": "Continue with Google"} */}
                Continue With google
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <img className="w-full mx-auto" src={signUpImg} alt="" />

            <div className="w-full max-w-md mx-auto mt-4 xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-black">
                Choose Your Own Experience
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>

              <div className="flex items-center justify-center mt-10 space-x-3">
                <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
