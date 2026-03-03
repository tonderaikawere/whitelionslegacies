import React from "react";
import { Container, Row, Col } from "reactstrap";

import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../styles/about-section.css";
import SafeImage from "./SafeImage";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Trusted Car Sales & Imports</h2>
              <p className="section__description">
                White Lions Legacies is a car sales and import company based in
                Gweru CBD, Zimbabwe. We import quality vehicles from the UK and
                South Africa and help you find a car that fits your budget,
                lifestyle, and needs.
              </p>

              <div className="about__feature-grid mt-4">
                <div className="about__feature">
                  <div className="about__feature-icon">
                    <i className="ri-car-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Stock & Sourcing</h6>
                    <p className="section__description mb-0">
                      Buy from available stock or order an import.
                    </p>
                  </div>
                </div>

                <div className="about__feature">
                  <div className="about__feature-icon">
                    <i className="ri-palette-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Custom Preferences</h6>
                    <p className="section__description mb-0">
                      Choose preferred color and key specifications.
                    </p>
                  </div>
                </div>

                <div className="about__feature">
                  <div className="about__feature-icon">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Transparent Process</h6>
                    <p className="section__description mb-0">
                      Clear updates from enquiry to delivery.
                    </p>
                  </div>
                </div>

                <div className="about__feature">
                  <div className="about__feature-icon">
                    <i className="ri-customer-service-2-line"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Friendly Support</h6>
                    <p className="section__description mb-0">
                      Call or email and we’ll guide you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about__cta mt-4">
                <div className="about__cta-item">
                  <i className="ri-phone-line"></i>
                  <span className="section__description mb-0">+263 78 252 8050</span>
                </div>
                <div className="about__cta-item">
                  <i className="ri-mail-line"></i>
                  <span className="section__description mb-0">contact@whitelionslegacies.com</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <SafeImage src={aboutImg} alt="About" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
