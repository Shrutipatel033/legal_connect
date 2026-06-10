import { useEffect } from "react";
import { Link } from "react-router-dom";

const AnonymousRequestSuccess = () => {
  const lawyer = JSON.parse(
    localStorage.getItem("selectedLawyer")
  );

  useEffect(() => {
    localStorage.removeItem("anonymousMode");
  }, []);

  return (
    <section className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-2xl w-full text-center">

        <h1 className="text-4xl font-bold text-green-600">
          Anonymous Request Sent
        </h1>

        <p className="mt-4 text-gray-600">
          Your request has been sent successfully.
        </p>

        <div className="mt-6 bg-gray-50 rounded-2xl p-5">

          <h2 className="text-2xl font-bold">
            {lawyer?.name}
          </h2>

          <p>{lawyer?.specialization}</p>

          <p className="mt-2">
            Status: Pending Lawyer Response
          </p>

        </div>

        <Link
          to="/lawyers"
          className="inline-block mt-6 bg-[#111827] text-white px-6 py-3 rounded-xl"
        >
          Back To Lawyers
        </Link>

      </div>

    </section>
  );
};

export default AnonymousRequestSuccess;