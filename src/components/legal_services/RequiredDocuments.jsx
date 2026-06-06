import {
  FaIdCard,
  FaCreditCard,
  FaMapMarkerAlt,
  FaFileAlt,
  FaFolderOpen,
  FaGavel,
} from "react-icons/fa";

const docs = [
  {
    title: "Aadhaar Card",
    description: "Government issued identity proof.",
    icon: <FaIdCard />,
  },
  {
    title: "PAN Card",
    description: "Required for verification and taxation.",
    icon: <FaCreditCard />,
  },
  {
    title: "Address Proof",
    description: "Utility bill, passport, or voter ID.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Case Documents",
    description: "Relevant documents related to your case.",
    icon: <FaFileAlt />,
  },
  {
    title: "Supporting Evidence",
    description: "Photos, records, agreements, or proofs.",
    icon: <FaFolderOpen />,
  },
  {
    title: "Court Notices",
    description: "Any notices or legal communications.",
    icon: <FaGavel />,
  },
];

const RequiredDocuments = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">


          <h2 className="text-4xl md:text-2xl font-bold text-[var(--primary)] mt-3">
            Required Documents
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Keep the following documents ready to ensure a smooth
            and hassle-free legal consultation process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {docs.map((doc, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-[var(--background)] rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent)]/10 rounded-full"></div>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[var(--accent)]"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] text-2xl mb-6">
                  {doc.icon}
                </div>

                <h3 className="text-xl font-bold text-[var(--primary)]">
                  {doc.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {doc.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[var(--accent)] font-semibold">
                  <span>Required</span>
                  <span>✓</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RequiredDocuments;