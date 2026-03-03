import React, { useMemo, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Gweru");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [notes, setNotes] = useState("");

  const cartLines = useMemo(() => {
    return (items || []).map((p) => {
      const qty = Number(p.quantity) || 1;
      const price = Number(p.price) || 0;
      return `${qty} x ${p.carName || "Car"} - $${price} each`;
    });
  }, [items]);

  const onSubmit = (e) => {
    e.preventDefault();

    const subject = `Car Purchase Checkout - ${fullName || "Customer"}`;
    const body = [
      "Buyer Details",
      `Full Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `National ID / Passport: ${nationalId}`,
      `Address: ${address}`,
      `City: ${city}`,
      `Payment Method: ${paymentMethod}`,
      "",
      "Cart",
      ...cartLines,
      "",
      `Total Items: ${totalItems}`,
      `Estimated Total: $${Number(totalPrice || 0).toFixed(2)}`,
      "",
      notes,
    ].join("\n");

    window.location.href = `mailto:contact@whitelionslegacies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    clearCart();
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h4 className="mb-3">Your Details</h4>

              {items.length === 0 ? (
                <p className="section__description">
                  Your cart is empty. Please add cars to cart first.
                </p>
              ) : (
                <>
                  <p className="section__description">
                    You have <strong>{totalItems}</strong> item(s) in your cart.
                    Estimated total: <strong>${Number(totalPrice || 0).toFixed(2)}</strong>
                  </p>

                  <Form onSubmit={onSubmit}>
                    <FormGroup className="mb-3">
                      <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required />
                    </FormGroup>

                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" />
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup className="mb-3">
                      <Input value={nationalId} onChange={(e) => setNationalId(e.target.value)} placeholder="National ID / Passport" required />
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
                    </FormGroup>

                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Input type="select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="cash">Cash</option>
                            <option value="bank_transfer">Bank Transfer</option>
                            <option value="installments">Installments (Discuss)</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup className="mb-3">
                      <Input type="textarea" value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} placeholder="Extra details (trade-in, preferred viewing time, delivery, etc.)" />
                    </FormGroup>

                    <div className="d-flex gap-2">
                      <Button className="btn" type="submit">
                        Place Order
                      </Button>
                    </div>
                  </Form>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
