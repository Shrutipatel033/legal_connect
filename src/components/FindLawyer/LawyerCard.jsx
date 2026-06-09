import { Link } from "react-router-dom";

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-5">

        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="w-24 h-24 rounded-full object-cover"
        />

        <div>

          <h3 className="text-2xl font-bold">
            {lawyer.name}
          </h3>

          <p className="text-[#C9A227] font-semibold">
            {lawyer.specialization}
          </p>

          <p>⭐ {lawyer.rating}</p>

          <p>{lawyer.experience} Years Experience</p>

          <p>📍 {lawyer.city}</p>

          <p>🏛 {lawyer.court}</p>

          <p>₹ {lawyer.fee}</p>
          <p className="text-sm text-gray-500">
            Response Time: {lawyer.responseTime}
          </p>

          <p className="text-sm text-green-600 font-medium">
            {lawyer.availability}
          </p>

          <p className="text-green-600">
            ✓ Verified Lawyer
          </p>

        </div>

      </div>

      <div className="flex flex-wrap gap-4 mt-6">

        <Link
          to={`/lawyer/${lawyer.id}`}
          className="bg-[#111827] text-white px-5 py-3 rounded-xl"
        >
          View Profile
        </Link>

        <button className="bg-[#C9A227] px-5 py-3 rounded-xl font-semibold">
          Book Consultation
        </button>

      </div>

    </div>
  );
};

export default LawyerCard;