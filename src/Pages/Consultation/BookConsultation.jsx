import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lawyers from "../../data/lawyerData";
import {
  FaUserTie,
  FaBriefcase,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

const BookConsultation = () => {
  const navigate = useNavigate();
  const { lawyerId } = useParams();

  const lawyer = lawyers.find(
    (item) => item.id === Number(lawyerId)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    mode: "",
    issue: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const consultation = {
      id: Date.now(),
      lawyer: lawyer.name,
      specialization: lawyer.specialization,
      fee: lawyer.fee,
      ...formData,
      status: "Pending Approval",
    };

    const existing =
      JSON.parse(localStorage.getItem("consultations")) || [];

    existing.push(consultation);

    localStorage.setItem(
      "consultations",
      JSON.stringify(existing)
    );

    navigate("/my-consultations");
  };

  return (
    <section className="min-h-screen bg-[#F8F7F3] py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-6">

          <span className="px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-semibold">
            Legal Consultation
          </span>

          <h1 className="text-3xl lg:text-4xl font-bold text-[#111827] mt-4">
            Book Your Consultation
          </h1>

          <p className="text-gray-500 mt-2">
            Connect with verified legal experts and get professional guidance.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Lawyer Card */}
          <div className="lg:col-span-1">

            <div className="bg-[#111827] text-white rounded-[32px] p-8 sticky top-24">

              <div className="text-center">

                <img
                  src={lawyer?.image}
                  alt={lawyer?.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#C9A227] mx-auto"
                />

                <h2 className="text-2xl font-bold mt-5">
                  {lawyer?.name}
                </h2>

                <p className="text-[#C9A227] mt-2">
                  {lawyer?.specialization}
                </p>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-[#C9A227]" />
                  <span>10+ Years Experience</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaStar className="text-[#C9A227]" />
                  <span>4.9 Rating</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[#C9A227]" />
                  <span>Available Mon - Sat</span>
                </div>

                <div className="pt-5 border-t border-white/10">

                  <h3 className="text-lg font-semibold">
                    Consultation Fee
                  </h3>

                  <p className="text-3xl font-bold text-[#C9A227] mt-2">
                    ₹{lawyer?.fee}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-[32px] shadow-xl p-8 lg:p-10">

              <h2 className="text-3xl font-bold text-[#111827] mb-8">
                Consultation Details
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block mb-2 font-medium">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                      required
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>

                  <label className="block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                    required
                  />

                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label className="block mb-2 font-medium">
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                      required
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium">
                      Preferred Time
                    </label>

                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                      required
                    >
                      <option value="">
                        Select Time
                      </option>

                      <option>
                        10:00 AM
                      </option>

                      <option>
                        12:00 PM
                      </option>

                      <option>
                        02:00 PM
                      </option>

                      <option>
                        04:00 PM
                      </option>

                    </select>

                  </div>

                </div>

                {/* Consultation Mode */}
                <div>

                  <label className="block mb-2 font-medium">
                    Consultation Mode
                  </label>

                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                    required
                  >
                    <option value="">
                      Select Mode
                    </option>

                    <option>
                      Online Consultation
                    </option>

                    <option>
                      Office Visit
                    </option>

                    <option>
                      Phone Consultation
                    </option>

                  </select>

                </div>

                {/* Issue */}
                <div>

                  <label className="block mb-2 font-medium">
                    Describe Your Legal Issue
                  </label>

                  <textarea
                    rows="6"
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    placeholder="Explain your issue in detail..."
                    className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-[#C9A227]"
                    required
                  />

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-[#C9A227]
                    text-white
                    font-semibold
                    text-lg
                    hover:bg-[#b8941e]
                    transition
                  "
                >
                  Confirm Consultation
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookConsultation;