import identity from "../../assets/identity.webp";
import endtoend from "../../assets/endtoend.jpg";
import secure from "../../assets/securedocument.webp";
import privateconsult from "../../assets/privateconsulation.avif";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { FaUserShield } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
const privacyItems = [
  {
    title: "Identity Protection",
    icon: <FaUserShield />,
    image: identity,
  },
  {
    title: "Secure Documents",
    icon: <IoMdDocument />,
    image: secure,
  },
  {
    title: "Private Consultation",
    icon: <MdOutlinePrivacyTip />,
    image: privateconsult,
  },
  {
    title: "End-to-End Security",
    icon: <MdOutlineSecurity />,
    image: endtoend,
  },
];
const PrivacyPromise = () => {
  return (
    <section className="bg-gradient-to-br from-white via-[#FAF9F6] to-[#F3F4F6] py-10">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">

        <h2 className="text-4xl font-bold text-center">
          Your Privacy Comes First
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">

          {privacyItems.map((item) => (
            <div
              key={item.title}
              className="
        relative
        overflow-hidden
        rounded-3xl
        h-[320px]
        group
        shadow-xl
      "
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/60 to-transparent transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                <div className="text-5xl text-white mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-200 mt-3">
                  Your information remains protected and confidential.
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  )
}
export default PrivacyPromise