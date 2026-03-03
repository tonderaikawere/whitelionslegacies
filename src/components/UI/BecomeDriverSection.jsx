import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import SafeImage from "./SafeImage";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <SafeImage src={driverImg} alt="Become a Driver" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Need a Car Imported or a Custom Order?
            </h2>

            <button className="btn become__driver-btn mt-4">
              Request Consultation
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
