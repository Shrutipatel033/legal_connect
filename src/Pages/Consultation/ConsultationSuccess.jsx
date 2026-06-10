import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const ConsultationSuccess = () => {
  return (
    <section className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">

        <FaCheckCircle
          className="mx-auto text-green-500 mb-6"
          size={80}
        />

        <h1 className="text-4xl font-bold text-[#111827]">
          Consultation Booked Successfully
        </h1>

        <p className="text-gray-500 mt-4">
          Your consultation request has been submitted.
          Our lawyer will review your request shortly.
        </p>

        <div className="bg-[#FAF9F6] rounded-2xl p-6 mt-8 text-left">

          <h3 className="font-bold text-xl mb-4">
            Consultation Details
          </h3>

          <p>
            <strong>Lawyer:</strong> Rahul Sharma
          </p>

          <p>
            <strong>Specialization:</strong> Family Law
          </p>

          <p>
            <strong>Date:</strong> 20 June 2026
          </p>

          <p>
            <strong>Time:</strong> 10:00 AM
          </p>

          <p>
            <strong>Status:</strong>
            <span className="text-yellow-600 font-semibold ml-2">
              Pending Approval
            </span>
          </p>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/my-consultations"
            className="flex-1 bg-[#111827] text-white py-3 rounded-xl text-center"
          >
            My Consultations
          </Link>

          <Link
            to="/lawyers"
            className="flex-1 bg-[#C9A227] text-white py-3 rounded-xl text-center"
          >
            Find More Lawyers
          </Link>

        </div>

      </div>

    </section>
  );
};

export default ConsultationSuccess;