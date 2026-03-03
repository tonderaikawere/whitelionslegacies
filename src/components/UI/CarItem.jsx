import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import SafeImage from "./SafeImage";
import { useCart } from "../../context/CartContext";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;
  const carSlug = encodeURIComponent(carName);
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const onAddToCart = () => {
    addItem(props.item, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <SafeImage src={imgUrl} alt={carName} className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="sale__price text-center mt-">
            ${price}.00 <span>Starting from</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <div className="car__item-actions d-flex">
            <button
              type="button"
              className={
                justAdded
                  ? "w-50 car__item-btn car__btn-add car__btn-add--added"
                  : "w-50 car__item-btn car__btn-add"
              }
              onClick={onAddToCart}
            >
              {justAdded ? "Added" : "Add to Cart"}
            </button>

            <button className=" w-50 car__item-btn car__btn-details" type="button">
              <Link to={`/cars/${carSlug}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
