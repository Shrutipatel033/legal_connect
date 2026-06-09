import { useParams } from "react-router-dom";
import lawyers from "../FindLawyer/lawyerData";

const LawyerProfilePage = () => {
  const { id } = useParams();
  const lawyer = lawyers.find(
    (item) => item.id === Number(id)
  );

  if (!lawyer) {
    return (
      <div className="text-center py-20">
        Lawyer Not Found
      </div>
    );
  }

  return (
    <section className="bg-[#FAF9F6] min-h-screen">

      {/* Banner */}
      <div className="bg-[#111827] py-16">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row gap-8 items-center">

            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-40 h-40 rounded-full border-4 border-[#C9A227]"
            />

            <div>

              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {lawyer.name}
              </h1>

              <p className="text-[#C9A227] text-xl mt-2">
                {lawyer.specialization}
              </p>

              <div className="flex flex-wrap gap-6 mt-4 text-white">

                <span>⭐ {lawyer.rating}</span>

                <span>
                  {lawyer.experience} Years Experience
                </span>

                <span>✓ Verified Lawyer</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}
          <div className="lg:col-span-2 space-y-8">

            {/* About */}
            <div className="bg-white rounded-3xl p-8 shadow">

              <h2 className="text-2xl font-bold mb-4">
                About Lawyer
              </h2>

              <p className="text-gray-600 leading-8">
                Experienced legal professional specializing in
                {lawyer.specialization}. Providing expert legal
                consultation and representation.
              </p>

            </div>

            {/* Practice Areas */}
            <div className="bg-white rounded-3xl p-8 shadow">

              <h2 className="text-2xl font-bold mb-5">
                Practice Areas
              </h2>

              <div className="flex flex-wrap gap-3">

                <span className="bg-[#C9A227]/10 px-4 py-2 rounded-full">
                  {lawyer.specialization}
                </span>

                <span className="bg-[#C9A227]/10 px-4 py-2 rounded-full">
                  Legal Consultation
                </span>

                <span className="bg-[#C9A227]/10 px-4 py-2 rounded-full">
                  Court Representation
                </span>

              </div>

            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl p-8 shadow">

              <h2 className="text-2xl font-bold mb-5">
                Reviews
              </h2>

              <div className="space-y-5">

                <div className="border-b pb-4">
                  <h4 className="font-bold">
                    Rahul Verma
                  </h4>

                  <p className="text-[#C9A227]">
                    ★★★★★
                  </p>

                  <p className="text-gray-600 mt-2">
                    Excellent lawyer and very professional.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">
                    Priya Sharma
                  </h4>

                  <p className="text-[#C9A227]">
                    ★★★★★
                  </p>

                  <p className="text-gray-600 mt-2">
                    Helped me solve my legal issue quickly.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="bg-white rounded-3xl p-8 shadow sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Consultation Details
              </h2>

              <div className="space-y-5">

                <div>
                  <p className="text-gray-500">
                    Consultation Fee
                  </p>

                  <h3 className="font-bold text-xl">
                    ₹{lawyer.fee}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Court
                  </p>

                  <h3 className="font-bold">
                    {lawyer.court}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Languages
                  </p>

                  <h3 className="font-bold">
                    {lawyer.language.join(", ")}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Availability
                  </p>

                  <h3 className="font-bold text-green-600">
                    {lawyer.availability}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Response Time
                  </p>

                  <h3 className="font-bold">
                    {lawyer.responseTime}
                  </h3>
                </div>

                <button className="w-full bg-[#111827] text-white py-4 rounded-xl font-semibold">
                  Book Consultation
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LawyerProfilePage;