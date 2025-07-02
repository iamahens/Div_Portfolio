import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css"; // this contains custom styles

const testimonials = [
  { id: 1, image: "/image1.jpg", alt: "Client testimonial 1" },
  { id: 2, image: "/image2.jpg", alt: "Client testimonial 2" },
  { id: 3, image: "/image3.jpg", alt: "Client testimonial 3" },
  { id: 4, image: "/image4.jpg", alt: "Client testimonial 4" },
  { id: 5, image: "/image5.jpg", alt: "Client testimonial 5" },
  { id: 6, image: "/image6.jpg", alt: "Client testimonial 6" },
  { id: 7, image: "/image7.jpg", alt: "Client testimonial 7" },
  { id: 8, image: "/image8.jpg", alt: "Client testimonial 8" },
  { id: 9, image: "/image9.jpeg", alt: "Client testimonial 9" },
  { id: 10, image: "/image10.jpeg", alt: "Client testimonial 10" },
];

const Testimonial = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl h-[420px]">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full shadow-lg text-white hover:scale-110 transition">
            ◀
          </div>
        </div>
        <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-gradient-to-l from-purple-600 to-pink-500 p-3 rounded-full shadow-lg text-white hover:scale-110 transition">
            ▶
          </div>
        </div>
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center mt-6"></div>
    </div>
  );
};

export default Testimonial;
