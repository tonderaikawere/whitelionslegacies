import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const subject = `Website enquiry - ${name || "Visitor"}`;
    const body = [
      `Name: ${name || ""}`,
      `Email: ${email || ""}`,
      "",
      message || "",
    ].join("\n");

    window.location.href = `mailto:contact@whitelionslegacies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={onSubmit}>
                <FormGroup className="contact__form">
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Gweru CBD, Zimbabwe
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">
                    <a href="tel:+263782528050">+263 78 252 8050</a> /{" "}
                    <a href="tel:+263716264988">+263 71 626 4988</a>
                  </p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    <a href="mailto:contact@whitelionslegacies.com">contact@whitelionslegacies.com</a>
                  </p>
                </div>

                <div className=" d-flex align-items-center gap-2 mt-2">
                  <h6 className="mb-0 fs-6">Office Hours:</h6>
                  <p className="section__description mb-0">
                    Mon - Sat 8am - 5pm, Sun 10am - 2pm
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
