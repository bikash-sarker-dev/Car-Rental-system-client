import React from "react";

const CardTestimonials = ({ review }) => {
  const { customerName, image, profession, feedback, date } = review || {};
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card card-compact bg-car-secondary rounded-sm text-car-text p-4 min-h-[280px] shadow-xl"
    >
      <div className="card-body">
        <h2 style={{ color: "#130d00" }} className="card-title ">
          Date: {date}
        </h2>
        <p>{feedback}</p>
        <div className="flex gap-5 items-center justify-between">
          <div className="flex items-center gap-4 mt-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-16 rounded-full  ring-offset-2">
                <img src={image} alt="image is not a support" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">{customerName}</h3>
              <p>{profession}</p>
            </div>
          </div>
          <div className="rating rating-sm mr-5 mt-5">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
