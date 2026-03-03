import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import avatarImg from "../../assets/all-images/drive.jpg";
import SafeImage from "./SafeImage";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="sliders">
      <div className="testimonial py-4 px-3 ">
        <p className="section__description">
          The team was helpful from the first call to delivery. They explained
          the options clearly and helped me choose a car that fits my budget.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <SafeImage src={avatarImg} alt="Client" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tendai Moyo</h6>
            <p className="section__description">Car Buyer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I requested a specific model and color and they kept me updated during
          the sourcing process. The car arrived exactly as requested.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <SafeImage src={avatarImg} alt="Client" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rudo Ndlovu</h6>
            <p className="section__description">Import Order</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Professional service and honest communication. I would recommend White
          Lions Legacies to anyone looking to buy or import a vehicle.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <SafeImage src={avatarImg} alt="Client" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tapiwa Chirwa</h6>
            <p className="section__description">Car Buyer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Their guidance made the process easy. They answered my questions and
          helped me understand the steps from enquiry to delivery.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <SafeImage src={avatarImg} alt="Client" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Farai Dube</h6>
            <p className="section__description">Consultation</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
