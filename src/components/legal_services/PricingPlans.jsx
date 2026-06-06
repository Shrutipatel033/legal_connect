import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    description: "Perfect for initial legal consultation.",
    features: [
      "30 Min Consultation",
      "Case Evaluation",
      "Legal Guidance",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "₹2499",
    description: "Most popular package for legal assistance.",
    features: [
      "1 Hour Consultation",
      "Document Review",
      "Priority Support",
      "Lawyer Matching",
      "Video Consultation",
    ],
    featured: true,
  },
  {
    name: "Full Case Support",
    price: "Custom",
    description: "Complete legal representation and support.",
    features: [
      "Dedicated Lawyer",
      "Case Management",
      "Court Assistance",
      "Documentation",
      "24/7 Support",
    ],
    featured: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-10 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">


          <h2 className="text-2xl md:text-2xl font-bold text-[var(--primary)] mt-2">
            Choose The Right Plan
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Transparent pricing with professional legal support
            tailored to your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2
              
              ${plan.featured
                  ? "bg-[var(--primary)] text-white shadow-2xl scale-105"
                  : "bg-white shadow-lg hover:shadow-2xl"
                }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute top-5 right-5 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[var(--accent)]/10 rounded-full"></div>

              <div className="relative z-10">

                <h3 className="text-xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-6">
                  <span className="text-2xl font-bold">
                    {plan.price}
                  </span>
                </div>

                <p
                  className={`mt-4 ${plan.featured
                    ? "text-gray-300"
                    : "text-gray-600"
                    }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">

                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-[var(--accent)]" />

                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}

                </ul>

                {/* Button */}
                <button
                  className={`w-full mt-10 py-3 rounded-xl font-semibold transition

                  ${plan.featured
                      ? "bg-[var(--accent)] text-white hover:opacity-90"
                      : "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                    }`}
                >
                  Get Started
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PricingPlans;