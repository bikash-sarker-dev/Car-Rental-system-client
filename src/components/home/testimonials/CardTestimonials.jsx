import React from "react";

const CardTestimonials = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card card-compact bg-base-100 rounded-none p-4  shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">Super Convenient</h2>
        <p>
          The booking system on this site is top-notch. Everything is laid out
          clearly, and there are multiple payment options, which makes things
          super convenient.
        </p>
        <div className="flex gap-5 items-center justify-between">
          <div className="flex items-center gap-4 mt-4">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-16 rounded-full  ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Aten john</h3>
              <p>jakatar</p>
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
