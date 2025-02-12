import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeadTitle from "../../headers/sectionHead/SectionHeadTitle";
import CardTestimonials from "./CardTestimonials";

const feedbackData = [
  {
    customerName: "John Doe",
    profession: "Software Engineer",
    rating: 5,
    feedback:
      "Excellent service! Clean car, smooth booking, and hassle-free experience. Highly recommended for stress-free rentals!",
    date: "2025-02-12",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    customerName: "Emma Smith",
    profession: "Marketing Manager",
    rating: 4,
    feedback:
      "Great experience! Helpful staff, but pickup was slightly delayed. Car condition was good and comfortable.",
    date: "2025-02-10",
    location: "New York, NY",
    image:
      "https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5894.jpg?semt=ais_hybrid",
  },
  {
    customerName: "Liam Johnson",
    profession: "Freelance Photographer",
    rating: 3,
    feedback:
      "Decent service. Car had minor scratches, but overall, the rental process was simple and efficient.",
    date: "2025-02-08",
    location: "Chicago, IL",
    image:
      "https://imgcdn.stablediffusionweb.com/2024/11/9/9dc81b3b-00ab-41a6-8ad6-ae062d465e2e.jpg",
  },
  {
    customerName: "Sophia Williams",
    profession: "Doctor",
    rating: 5,
    feedback:
      "Fantastic experience! Fuel-efficient car, smooth rental process, and friendly staff. Definitely using this service again.",
    date: "2025-02-07",
    location: "Miami, FL",
    image:
      "https://cdn1.vectorstock.com/i/1000x1000/61/50/avatar-business-man-graphic-vector-9646150.jpg",
  },
  {
    customerName: "Michael Brown",
    profession: "Entrepreneur",
    rating: 2,
    feedback:
      "Not satisfied. Car had issues, and support response was slow. Needs improvement for better customer experience.",
    date: "2025-02-05",
    location: "San Francisco, CA",
    image:
      "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-professional-male-avatar-in-suit-png-image_14855076.png",
  },
];

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
          {feedbackData.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <CardTestimonials review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
