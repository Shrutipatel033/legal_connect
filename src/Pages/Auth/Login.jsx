
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/register.avif";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Login Here
    // navigate("/dashboard");
  };

  return (
    <section className="bg-[#FAF9F6] py-12 px-6 min-h-screen flex items-center">

      <div className="w-full max-w-5xl mx-auto">

        <div className="bg-white rounded-[30px] overflow-hidden shadow-xl">

          <div className="grid lg:grid-cols-2 min-h-[450px]">

            {/* Left Side */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">

              <div className="mb-6">

                <h1 className="text-4xl font-bold text-[#111827]">
                  Welcome Back
                </h1>

                <p className="text-gray-500 mt-2">
                  Login to access your LegalConnect account.
                </p>

              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <span className="text-sm text-[#C9A227] cursor-pointer hover:underline">
                    Forgot Password?
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-[#C9A227] text-white font-semibold hover:bg-[#b59123] transition-all"
                >
                  Login
                </button>

              </form>

              <p className="text-center text-gray-500 mt-6">
                Don't have an account?
                <span
                  onClick={() => navigate("/register")}
                  className="text-[#C9A227] ml-1 cursor-pointer"
                >
                  Register
                </span>
              </p>

            </div>

            {/* Right Side Image */}
            <div className="relative hidden lg:block">

              <img
                src={loginImage}
                alt="LegalConnect"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#111827]/60 flex items-center justify-center">

                <div className="text-center px-10">

                  <h2 className="text-4xl font-bold text-white">
                    LegalConnect
                  </h2>

                  <p className="text-gray-200 mt-4 text-lg">
                    Secure access to legal consultations,
                    case management, and professional legal support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Login;

