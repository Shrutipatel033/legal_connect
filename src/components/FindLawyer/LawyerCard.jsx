import { Link, useNavigate } from "react-router-dom";

const LawyerCard = ({ lawyer }) => {
  const navigate = useNavigate();

  const isAnonymous =
    localStorage.getItem("anonymousMode") === "true";

  return (
    <div className="bg-white rounded-[30px] p-6 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">

        {/* Left Section */}
        <div className="flex gap-5 flex-1">

          {/* Lawyer Image */}
          <div className="shrink-0">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#C9A227]/20"
            />
          </div>

          {/* Lawyer Details */}
          <div className="flex-1">

            <div className="flex items-center gap-2 flex-wrap">

              <h3 className="text-2xl font-bold text-[#111827]">
                {lawyer.name}
              </h3>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                ✓ Verified
              </span>

              <span className="bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-xs font-semibold">
                ⭐ {lawyer.rating}
              </span>

            </div>

            <p className="text-[#C9A227] font-semibold mt-2">
              {lawyer.specialization}
            </p>

            {/* Information Chips */}
            <div className="flex flex-wrap gap-3 mt-4">

              <span className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm">
                🎓 {lawyer.experience} Years Experience
              </span>

              <span className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm">
                📍 {lawyer.city}
              </span>

              <span className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm">
                🏛 {lawyer.court}
              </span>

            </div>

            {/* Status */}
            <div className="flex flex-wrap gap-3 mt-4">

              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-medium">
                ⏱ Response Time: {lawyer.responseTime}
              </span>

              <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-medium">
                ● {lawyer.availability}
              </span>

            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end justify-between min-w-[170px]">

          {/* Fee */}
          <div className="text-right">

            <p className="text-sm text-gray-500">
              Consultation Fee
            </p>

            <h3 className="text-3xl font-bold text-[#C9A227]">
              ₹{lawyer.fee}
            </h3>

            <p className="text-xs text-gray-500">
              Starting Fee
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6 w-full">

            <Link
              to={`/lawyer/${lawyer.id}`}
              className="text-center py-3 rounded-xl border border-[#111827] text-[#111827] font-semibold hover:bg-[#111827] hover:text-white transition-all duration-300"
            >
              View Profile
            </Link>

            {isAnonymous ? (
              <button
                onClick={() => {
                  localStorage.setItem(
                    "selectedLawyer",
                    JSON.stringify(lawyer)
                  );

                  navigate("/anonymous-request-success");
                }}
                className="w-full py-3 rounded-xl bg-[#C9A227] text-white font-semibold hover:bg-[#b88f1f] transition-all duration-300"
              >
                Anonymous Request
              </button>
            ) : (
              <Link
                to={`/book-consultation/${lawyer.id}`}
                className="text-center py-3 rounded-xl bg-[#111827] text-white font-semibold hover:bg-black transition-all duration-300"
              >
                Book Consultation
              </Link>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default LawyerCard;