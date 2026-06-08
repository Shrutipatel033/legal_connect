import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  const contacts = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      value: "+91 98765 43210",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      value: "support@legalconnect.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Address",
      value: "Lucknow, Uttar Pradesh",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Mon - Sat | 9AM - 7PM",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF9F6]">

      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-lg text-center hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] text-2xl">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;