import React from "react";
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
      className="py-32 bg-no-repeat bg-cover bg-blend-overlay my-32"
    >
      <div className="container">
        <SectionHeadTitle title="Testimonials" color={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <CardTestimonials />
          <CardTestimonials />
          <CardTestimonials />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
