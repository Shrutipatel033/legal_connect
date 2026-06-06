import {
  FaBalanceScale,
  FaHome,
  FaBriefcase,
  FaUserShield,
  FaLaptopCode,
  FaFileContract,
} from "react-icons/fa";

const services = [
  {
    title: "Family Law",
    icon: <FaBalanceScale />,
  },
  {
    title: "Criminal Law",
    icon: <FaUserShield />,
  },
  {
    title: "Property Law",
    icon: <FaHome />,
  },
  {
    title: "Corporate Law",
    icon: <FaBriefcase />,
  },
  {
    title: "Cyber Crime",
    icon: <FaLaptopCode />,
  },
  {
    title: "Documentation",
    icon: <FaFileContract />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1400px] mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Legal Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {services.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >

              <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                Expert legal assistance and consultation
                for your case.
              </p>

              <button className="mt-5 text-[var(--accent)] font-semibold">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;