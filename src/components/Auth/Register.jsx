
import { useState } from "react";
import registerImage from "../../assets/register.avif";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
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
    <section className="bg-[#FAF9F6] py-8 px-6">
      <div className="w-full max-w-4xl mx-auto">
        < div className="bg-white rounded-[30px] overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 min-h-[400px]">
            {/* LEFT SIDE FORM */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="mb-2">
                <h1 className="text-3xl font-bold text-[#111827]"> Create Account </h1>
                <p className="text-gray-500 mt-2"> Join LegalConnect and connect with trusted legal professionals. </p> </div>
              <form className="space-y-4">
                <div className="grid md:grid-cols-1 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2"> Username </label>
                    <input type="text" placeholder="Enter username" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none" />
                  </div>
                  <div> <label className="block text-sm font-medium mb-2"> Email Address </label> <input type="email" placeholder="Enter email" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none" />
                  </div> </div> {/* Role */}
                <div> <label className="block text-sm font-medium mb-2"> Role </label>
                  <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none">
                    <option>Select Role</option>
                    <option>Admin</option> <option>Lawyer</option> <option>Client</option> </select> </div>
                <div className="grid md:grid-cols-1 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2"> Password </label> <input type="password" placeholder="Enter password" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none" /> </div>
                  <div> <label className="block text-sm font-medium mb-2"> Confirm Password </label>
                    <input type="password" placeholder="Confirm password" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#C9A227] outline-none" /> </div> </div>
                <button type="submit" className="w-full h-12 rounded-xl bg-[#C9A227] text-white font-semibold hover:bg-[#b59123]" > Create Account </button> </form>
              <p className="text-center text-gray-500 mt-6"> Already have an account?
                <span
                  onClick={() => navigate("/login")}

                  className="text-[#C9A227] ml-1 cursor-pointer"> Login </span>
              </p>
            </div> {/* RIGHT SIDE IMAGE */}
            <div className="relative hidden lg:block">
              <img src={registerImage} alt="LegalConnect" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#111827]/60 flex items-center justify-center">
                <div className="text-center px-10">
                  <h2 className="text-5xl font-bold text-white"> Welcome To </h2> <h3 className="text-5xl font-bold text-[#C9A227] mt-2"> LegalConnect </h3>
                  <p className="text-gray-200 mt-6 text-lg"> Connect with verified lawyers, manage consultations and resolve legal matters with confidence. </p>
                </div> </div> </div> </div> </div> </div> </section >
  );
};

export default Register;
