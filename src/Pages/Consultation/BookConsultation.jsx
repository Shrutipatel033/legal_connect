import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lawyers from "../../components/FindLawyer/lawyerData";
const BookConsultation = () => {
  const navigate = useNavigate();
  const { lawyerId } = useParams();
  const lawyer = lawyers.find(
    (item) => item.id === Number(lawyerId)
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
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
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      issue: formData.issue,
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
    <section className="py-16 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-6">
          Book Consultation
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            {lawyer?.name}
          </h2>

          <p className="text-[#C9A227]">
            {lawyer?.specialization}
          </p>

          <p className="mt-2">
            Fee: ₹{lawyer?.fee}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <select
            name="time"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          >
            <option value="">Select Time Slot</option>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>02:00 PM</option>
            <option>04:00 PM</option>
          </select>

          <textarea
            rows="4"
            name="issue"
            placeholder="Describe your legal issue"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#111827] text-white py-4 rounded-xl"
          >
            Confirm Consultation
          </button>

        </form>

      </div>
    </section>
  );
};

export default BookConsultation;