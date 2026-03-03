import React, { useEffect, useMemo, useState } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link, useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import SafeImage from "../components/UI/SafeImage";
import { useCart } from "../context/CartContext";

const CarDetails = () => {
  const { slug } = useParams();
  const { addItem } = useCart();

  const decodedSlug = (() => {
    try {
      return decodeURIComponent(slug || "");
    } catch {
      return slug || "";
    }
  })();

  const singleCarItem = carData.find((item) => item.carName === decodedSlug);

  const [justAdded, setJustAdded] = useState(false);

  const onAddToCart = () => {
    if (!singleCarItem) return;
    addItem(singleCarItem, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 900);
  };

  const availableColors = useMemo(() => {
    const colors = singleCarItem?.colors;
    return Array.isArray(colors) ? colors : [];
  }, [singleCarItem]);

  const [selectedColor, setSelectedColor] = useState(availableColors[0] || "");

  const imageFilter = useMemo(() => {
    const c = (selectedColor || "").toLowerCase();
    if (!c) return "";

    if (c.includes("black")) return "grayscale(1) brightness(0.75)";
    if (c.includes("white")) return "brightness(1.1) contrast(1.05)";
    if (c.includes("silver") || c.includes("grey") || c.includes("gray")) return "grayscale(0.35) brightness(1.05)";
    if (c.includes("red")) return "hue-rotate(-35deg) saturate(1.35)";
    if (c.includes("blue")) return "hue-rotate(190deg) saturate(1.25)";
    if (c.includes("green")) return "hue-rotate(95deg) saturate(1.25)";
    if (c.includes("gold") || c.includes("yellow")) return "hue-rotate(25deg) saturate(1.35)";

    return "";
  }, [selectedColor]);

  useEffect(() => {
    setSelectedColor(availableColors[0] || "");
  }, [availableColors]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  if (!singleCarItem) {
    return (
      <Helmet title="Car Not Found">
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="section__title">Car not found</h2>
                <p className="section__description">
                  The car you are looking for is not available. Please go back to the Cars page and choose another listing.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  }

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <SafeImage
                src={singleCarItem.imgUrl}
                alt={singleCarItem.carName}
                className="w-100"
                style={{ filter: imageFilter, transition: "filter 180ms ease" }}
              />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price}.00
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#c9a227" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                {availableColors.length > 0 && (
                  <div className="mt-4">
                    <h6 className="mb-2">Preferred Color</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {availableColors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          className={
                            selectedColor === c
                              ? "btn btn-sm"
                              : "btn btn-sm"
                          }
                          style={
                            selectedColor === c
                              ? { background: "#0b6b2f", color: "#fff" }
                              : { background: "#fff", color: "#0b6b2f", border: "1px solid #7c8a972f" }
                          }
                          onClick={() => setSelectedColor(c)}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                    <p className="section__description mt-2">
                      Selected: <strong>{selectedColor || "Any"}</strong>
                    </p>
                  </div>
                )}

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#c9a227" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#c9a227" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#c9a227" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#c9a227" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#c9a227" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#c9a227" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>

                <div className="car-details__cta mt-4">
                  <button
                    className={
                      justAdded
                        ? "btn cart__add-btn cart__add-btn--added"
                        : "btn cart__add-btn"
                    }
                    type="button"
                    onClick={onAddToCart}
                  >
                    <i className="ri-shopping-cart-2-line"></i>
                    {justAdded ? "Added" : "Add to Cart"}
                  </button>
                  <Link className="btn cart__view-btn" to="/cart">
                    <i className="ri-eye-line"></i>
                    View Cart
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5" id="sales-enquiry">
                <h5 className="mb-4 fw-bold ">Sales Enquiry</h5>
                <BookingForm
                  defaultBrand={singleCarItem.brand}
                  defaultModel={singleCarItem.model}
                  availableColors={availableColors}
                  defaultColor={selectedColor}
                />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">How to Proceed</h5>
                <PaymentMethod
                  onSendEnquiry={() => {
                    const el = document.getElementById("sales-enquiry");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
