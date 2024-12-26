import React from "react";

const PageHead = ({ title }) => {
  return (
    <div
      style={{
        background: `url(https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-bottom py-32 bg-blend-overlay text-center "
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-5xl font-bold text-clip text-car-white"
      >
        {title}
      </h2>
    </div>
  );
};

export default PageHead;
