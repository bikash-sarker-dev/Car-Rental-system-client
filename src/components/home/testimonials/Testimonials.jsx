import React from "react";
import "swiper/css";
import "swiper/css/pagination";
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
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
