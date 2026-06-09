import { useParams } from "react-router-dom";
import serviceData from "../../data/serviceData";

const ServiceDetails = () => {
  const { serviceName } = useParams();

  const service = serviceData[serviceName];

  if (!service) {
    return (
      <div className="py-20 text-center">
        Service Not Found
      </div>
    );
  }

  return (
    <section className="bg-[#FAF9F6] min-h-screen">

      {/* Hero */}
      <div className="bg-[#111827] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-white">
            {service.title}
          </h1>

          <p className="text-gray-300 mt-4 max-w-3xl">
            {service.description}
          </p>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl p-10 shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            What We Help With
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {service.benefits.map((item, index) => (
              <div
                key={index}
                className="bg-[#FAF9F6] rounded-xl p-4"
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceDetails;