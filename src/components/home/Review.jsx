import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Rahul Verma",
    location: "Lucknow, UP",
    review:
      "Found the perfect lawyer within minutes. The process was smooth, secure and completely hassle-free.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    review:
      "Excellent legal guidance for my property dispute. Highly professional and transparent service.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Amit Singh",
    location: "Mumbai",
    review:
      "The lawyer matching system helped me find the right expert quickly. Great experience overall.",
    image: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Sneha Gupta",
    location: "Bangalore",
    review:
      "Professional lawyers and quick response. Highly recommended for legal consultation.",
    image: "https://i.pravatar.cc/150?img=25",
  },
];

const Review = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#FAF9F6] to-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">
            What Clients Say
          </h2>

          <p className="text-gray-500 max-w-lg mx-auto mt-4">
            Thousands of clients trust us to connect them with experienced
            legal professionals.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-16  pt-4 pb-20"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
relative
bg-white
rounded-[30px]
p-8
shadow-lg
border
border-gray-100
hover:shadow-2xl
transition-all
duration-500
overflow-hidden
h-[300px]
flex
flex-col
"

              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#C9A227]"></div>

                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#C9A227]/30 text-5xl" />

                {/* Stars */}
                <div className="text-[#C9A227] text-xl mt-4">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="text-gray-600 mt-6 leading-8">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-[#111827]">
                      {item.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Trust Banner */}
        <div className="mt-16 bg-[#111827] rounded-3xl p-6 md:p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold">
            Trusted By 50,000+ Clients Across India
          </h3>

          <p className="text-gray-300 mt-3">
            Verified lawyers, secure consultations and transparent legal
            support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;