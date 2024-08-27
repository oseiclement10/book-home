import { auth, googleAuth } from "@/config/firebase";
import { protectedRoutes, publicRoutes } from "@/routes/routes";
import { notification } from "antd";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import bgImg from "@/assets/images/bedroom.jpg";
import googleImg from "@/assets/images/google.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);

  const loginWithPassword = async () => {
    setSaving(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
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
  const loginWithGoogle = async () => {
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
    loginWithPassword();
  };

  return (
    <section className="relative py-10 bg-gray-900 min-h-dvh sm:py-16 lg:py-24">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={bgImg} alt="" />
      </div>
      <div className="absolute inset-0 bg-gray-900/20"></div>

      <div className="relative max-w-lg px-6 mx-auto sm:px-4 sm:py-2 ">
        <div className="overflow-hidden bg-white shadow-md rounded-2xl">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
              <p className="mt-2 text-base text-gray-600">
                Don&apos;t have one?{" "}
                <NavLink
                  to={publicRoutes.signUp.path}
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Create a free account
                </NavLink>
              </p>
            </div>

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
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      name="email"
                      id="email"
                      required
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
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

                    {/* <a
                      href="#"
                      title=""
                      className="text-sm font-medium transition-all duration-200 text-rose-500 hover:text-rose-600 focus:text-rose-600 hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a> */}
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`inline-flex items-center ${
                      saving
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer "
                    } justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700`}
                  >
                    {saving ? "Please wait ... " : "Login"}
                  </button>
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    className={`relative ${
                      saving
                        ? "cursor-not-allowed opacity-70"
                        : "cursor-pointer"
                    } items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none`}
                    inline-flex
                    onClick={() => loginWithGoogle()}
                  >
                    <div className="absolute inset-y-0 left-0 p-4">
                      <img src={googleImg} className="object-contain w-7 h-7" />
                    </div>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
