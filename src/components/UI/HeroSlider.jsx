import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">UK & South Africa Imports</h4>
            <h1 className="text-light mb-4">Buy Your Next Car With Confidence</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">View Cars</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Cars For Every Budget</h4>
            <h1 className="text-light mb-4">We Stock Sedans, SUVs, Hatchbacks & More</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Browse Stock</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">Custom Orders Available</h4>
            <h1 className="text-light mb-4">Choose Your Preferred Color & Specifications</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/contact">Request a Quote</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
