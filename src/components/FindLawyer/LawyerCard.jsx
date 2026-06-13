import { Link, useNavigate } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { HiOutlineLocationMarker, HiOutlineAcademicCap, HiOutlineLibrary, HiOutlineTranslate, HiOutlineClock, HiOutlineCalendar } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const LawyerCard = ({ lawyer }) => {
  const navigate = useNavigate();
  const isAnonymous = localStorage.getItem("anonymousMode") === "true";

  return (
    <div className="group bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-[#C9A227]/30 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
      {/* Premium subtle gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
        <div className="flex flex-col sm:flex-row gap-6 flex-1 w-full">
          <div className="shrink-0 relative self-start mx-auto sm:mx-0">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border border-gray-200 shadow-sm group-hover:border-[#C9A227]/50 transition-colors duration-300"
            />

          </div>

          {/* Lawyer Details */}
          <div className="flex-1 text-center sm:text-left">

            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] group-hover:text-[#C9A227] transition-colors duration-300">
                {lawyer.name}
              </h3>

              <span className="flex items-center gap-1 bg-[#C9A227]/10 text-[#C9A227] px-2.5 py-1 rounded-lg text-sm font-bold">
                <MdStar className="w-4 h-4" /> {lawyer.rating}
              </span>
            </div>

            <p className="text-gray-500 font-medium mt-1 text-sm sm:text-base">
              {lawyer.specialization}
            </p>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">

              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm">
                <HiOutlineAcademicCap className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">{lawyer.experience} Years Exp.</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm">
                <HiOutlineLocationMarker className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">{lawyer.city}</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm">
                <HiOutlineLibrary className="w-5 h-5 text-[#C9A227]" />
                <span className="font-medium">{lawyer.court}</span>
              </div>

              {lawyer.language && (
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm">
                  <HiOutlineTranslate className="w-5 h-5 text-[#C9A227]" />
                  <span className="font-medium">{lawyer.language.join(", ")}</span>
                </div>
              )}

            </div>

            {/* Status Tags */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5">
              <span className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">
                <HiOutlineClock className="w-4 h-4" />
                Replies in {lawyer.responseTime}
              </span>

              <span className="flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-semibold">
                <HiOutlineCalendar className="w-4 h-4" />
                {lawyer.availability}
              </span>
            </div>

          </div>

        </div>

        {/* Right Section / CTA */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-end lg:items-end justify-between w-full lg:w-[220px] shrink-0 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8 mt-4 lg:mt-0 gap-4 lg:gap-0">

          {/* Fee */}
          <div className="text-center sm:text-right w-full sm:w-auto">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
              Consultation Fee
            </p>
            <div className="flex items-baseline justify-center sm:justify-end gap-1">
              <span className="text-xl font-bold text-gray-400">₹</span>
              <h3 className="text-4xl font-extrabold text-[#111827]">
                {lawyer.fee}
              </h3>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Per Session
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full mt-6">
            {isAnonymous ? (
              <button
                onClick={() => {
                  localStorage.setItem("selectedLawyer", JSON.stringify(lawyer));
                  navigate("/anonymous-request-success");
                }}
                className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center gap-2"
              >
                Request Anonymously
              </button>
            ) : (
              <Link
                to={`/book-consultation/${lawyer.id}`}
                className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-[#C9A227] hover:text-white transition-all duration-300 shadow-md hover:shadow-[#C9A227]/30 flex justify-center items-center gap-2 text-center"
              >
                Book Consultation
              </Link>
            )}

            <Link
              to={`/lawyer/${lawyer.id}`}
              className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex justify-center items-center gap-2 text-center"
            >
              View Profile <FiArrowRight />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default LawyerCard;