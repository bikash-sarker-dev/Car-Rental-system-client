import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeadTitle from "../../headers/sectionHead/SectionHeadTitle";
import CardTestimonials from "./CardTestimonials";

const Testimonials = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
      className="py-32 bg-no-repeat bg-cover bg-blend-overlay my-32 testimonials"
    >
      <div className="container">
        <SectionHeadTitle title="Testimonials" color={true} />

        <Swiper
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
          <SwiperSlide>
            <CardTestimonials />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
