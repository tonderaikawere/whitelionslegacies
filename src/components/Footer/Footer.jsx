import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/how-it-works",
    display: "How It Works",
  },

  {
    path: "/buying-selling",
    display: "Buying & Selling",
  },

  {
    path: "/privacy",
    display: "Privacy Policy",
  },

  {
    path: "/terms",
    display: "Terms & Conditions",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img className="footer__logo-img" src="/logo.jpg" alt="White Lions Legacies" />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              White Lions Legacies is a car sales and import company based in
              Gweru CBD, Zimbabwe. We source quality vehicles from the UK and
              South Africa, and we also help you order your preferred model with
              the color and specifications you want.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Gweru CBD, Zimbabwe</p>
              <p className="office__info">
                Phone: <a href="tel:+263782528050">+263 78 252 8050</a> /{" "}
                <a href="tel:+263716264988">+263 71 626 4988</a>
              </p>

              <p className="office__info">
                Email: <a href="mailto:contact@whitelionslegacies.com">contact@whitelionslegacies.com</a>
              </p>

              <p className="office__info">Mon - Sat: 8am - 5pm</p>
              <p className="office__info">Sun: 10am - 2pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">
                Subscribe by emailing <a href="mailto:contact@kawerifytech.com">contact@kawerifytech.com</a>
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <a
                  href="mailto:contact@kawerifytech.com?subject=Newsletter%20Subscription"
                  aria-label="Subscribe"
                >
                  <span>
                    <i className="ri-send-plane-line"></i>
                  </span>
                </a>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by
                <a href="https://kawerifytech.com" target="_blank" rel="noreferrer">Kawerify Tech</a>. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
