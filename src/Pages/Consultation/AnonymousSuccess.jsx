import { Link } from "react-router-dom";

const AnonymousSuccess = () => {
  return (
    <section className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6">

      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-2xl w-full text-center">

        <h1 className="text-4xl font-bold text-green-600">
          Request Submitted
        </h1>

        <p className="mt-4 text-gray-600">
          Your anonymous consultation request has been submitted successfully.
        </p>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">
            Request ID
          </h2>

          <p className="text-3xl font-bold text-[#C9A227] mt-2">
            ANON-4532
          </p>
        </div>

        <Link
          to="/lawyers"
          className="inline-block mt-8 bg-[#111827] text-white px-8 py-3 rounded-xl"
        >
          View Lawyers
        </Link>

      </div>

    </section>
  );
};

export default AnonymousSuccess;