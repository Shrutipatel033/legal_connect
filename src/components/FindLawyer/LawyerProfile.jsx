import { useParams } from "react-router-dom";
import lawyers from "../../data/lawyerData";
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

      <div className="bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="bg-white rounded-[32px] p-8 shadow-xl">

            <div className="flex flex-col lg:flex-row items-center gap-8">

              <img
                src={lawyer.image}
                alt={lawyer.name}
                className="w-40 h-40 rounded-3xl object-cover border-4 border-[#C9A227]"
              />

              <div className="flex-1">

                <div className="flex items-center gap-3 flex-wrap">

                  <h1 className="text-4xl font-bold text-[#111827]">
                    {lawyer.name}
                  </h1>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                    ✓ Verified Lawyer
                  </span>

                </div>

                <p className="text-[#C9A227] text-xl font-semibold mt-2">
                  {lawyer.specialization}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                  <div className="bg-[#FAF9F6] p-4 rounded-2xl text-center">
                    <h3 className="font-bold text-xl">
                      ⭐ {lawyer.rating}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Rating
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] p-4 rounded-2xl text-center">
                    <h3 className="font-bold text-xl">
                      {lawyer.experience}+
                    </h3>
                    <p className="text-sm text-gray-500">
                      Years Exp.
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] p-4 rounded-2xl text-center">
                    <h3 className="font-bold text-xl">
                      {lawyer.city}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Location
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] p-4 rounded-2xl text-center">
                    <h3 className="font-bold text-xl">
                      {lawyer.responseTime}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Response
                    </p>
                  </div>

                </div>

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

            <div className="bg-white rounded-[30px] p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-5">
                About Lawyer
              </h2>

              <p className="text-gray-600 leading-8">
                Experienced legal professional specializing in
                {lawyer.specialization}. Providing expert legal
                consultation, dispute resolution, court representation,
                legal documentation and client advisory services.
              </p>

            </div>
            <div className="bg-white rounded-[30px] p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-5">
                Practice Areas
              </h2>

              <div className="flex flex-wrap gap-3">

                {[
                  lawyer.specialization,
                  "Legal Consultation",
                  "Court Representation",
                  "Legal Notice",
                  "Documentation",
                  "Case Analysis",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#C9A227]/10 text-[#111827] px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
            {/* Reviews */}
            <div className="bg-white rounded-3xl p-8 shadow">

              <h2 className="text-2xl font-bold mb-5">
                Reviews
              </h2>

              <div className="bg-[#FAF9F6] rounded-2xl p-5">
                <div className="flex justify-between">

                  <h4 className="font-bold">
                    Rahul Verma
                  </h4>

                  <span className="text-[#C9A227]">
                    ★★★★★
                  </span>

                </div>

                <p className="text-gray-600 mt-3">
                  Excellent lawyer and very professional.
                </p>
              </div>
            </div>

          </div>

          {/* Right */}
          <div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Consultation Details
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="text-gray-500">
                    Consultation Fee
                  </p>

                  <h3 className="text-4xl font-bold text-[#111827]">
                    ₹{lawyer.fee}
                  </h3>
                </div>

                <div className="border-t pt-5">
                  <p className="text-gray-500">
                    Court
                  </p>

                  <h3 className="font-semibold">
                    {lawyer.court}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Languages
                  </p>

                  <h3 className="font-semibold">
                    {lawyer.language.join(", ")}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Availability
                  </p>

                  <h3 className="text-green-600 font-semibold">
                    ● {lawyer.availability}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-500">
                    Response Time
                  </p>

                  <h3 className="font-semibold">
                    {lawyer.responseTime}
                  </h3>
                </div>

                <button className="w-full bg-[#111827] text-white py-4 rounded-2xl font-semibold hover:bg-black transition">
                  Book Consultation
                </button>

                <button className="w-full border border-[#111827] py-4 rounded-2xl font-semibold hover:bg-[#111827] hover:text-white transition">
                  Chat With Lawyer
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