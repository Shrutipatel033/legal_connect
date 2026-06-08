
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl ">

        <div className="bg-white rounded-[30px] shadow-xl p-8">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#111827]">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join LegalConnect today
            </p>
          </div>

          <form className="space-y-5">

            {/* Username + Email */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none"
                />
              </div>

            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Role
              </label>

              <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none">
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="lawyer">Lawyer</option>
                <option value="client">Client</option>
              </select>
            </div>

            {/* Password + Confirm Password */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none"
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#C9A227] text-white font-semibold hover:bg-[#b59123] transition-all"
            >
              Create Account
            </button>

          </form>


          <p className="text-center text-gray-500 mt-6">
            Already have an account?
            <span className="text-[#C9A227] cursor-pointer ml-1">
              Login
            </span>
          </p>

        </div>

      </div>
    </section>
  );
};

export default Register;
