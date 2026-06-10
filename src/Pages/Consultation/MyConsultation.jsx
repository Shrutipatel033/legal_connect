import { useEffect, useState } from "react";

const MyConsultations = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("consultations")) || [];

    setConsultations(data);
  }, []);

  return (
    <section className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          My Consultations
        </h1>

        {consultations.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-semibold">
              No Consultations Found
            </h2>

            <p className="text-gray-500 mt-2">
              Book a consultation to see it here.
            </p>
          </div>
        ) : (
          consultations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-lg mb-5"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h2 className="text-2xl font-semibold">
                    {item.lawyer}
                  </h2>

                  <p className="text-[#C9A227]">
                    {item.specialization}
                  </p>

                  <p className="mt-3">
                    Client: {item.name}
                  </p>

                  <p>
                    Email: {item.email}
                  </p>

                  <p>
                    Date: {item.date}
                  </p>

                  <p>
                    Time: {item.time}
                  </p>

                  <p>
                    Fee: ₹{item.fee}
                  </p>

                  <p className="mt-2 text-gray-600">
                    Issue: {item.issue}
                  </p>
                </div>

                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700">
                  {item.status}
                </span>

              </div>
            </div>
          ))
        )}

      </div>
    </section>
  );
};

export default MyConsultations;