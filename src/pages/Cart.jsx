import React from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SafeImage from "../components/UI/SafeImage";

const Cart = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, setQuantity, removeItem, clearCart } = useCart();

  return (
    <Helmet title="Cart">
      <CommonSection title="Cart" />
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                <h4 className="mb-0">Your Cart</h4>
                <div className="d-flex gap-2">
                  <Button className="btn" type="button" onClick={() => navigate("/cars")}
                  >
                    Add More Cars
                  </Button>
                  <Button className="btn" type="button" onClick={clearCart} disabled={items.length === 0}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>

              {items.length === 0 ? (
                <>
                  <p className="section__description">
                    Your cart is currently empty. Add cars you like and proceed to checkout.
                  </p>
                  <Button className="btn" tag={Link} to="/cars">
                    Browse Cars
                  </Button>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <p className="section__description mb-1">
                      Items: <strong>{totalItems}</strong>
                    </p>
                    <p className="section__description mb-0">
                      Estimated total: <strong>${Number(totalPrice || 0).toFixed(2)}</strong>
                    </p>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    {items.map((p) => (
                      <div key={p.id} className="p-3" style={{ border: "1px solid #7c8a972f", borderRadius: 12 }}>
                        <Row className="align-items-center">
                          <Col md="2" sm="4" xs="4" className="mb-2 mb-md-0">
                            <SafeImage src={p.imgUrl} alt={p.carName} className="w-100" style={{ height: 70, objectFit: "cover", borderRadius: 10 }} />
                          </Col>
                          <Col md="4" sm="8" xs="8">
                            <div style={{ fontWeight: 800 }}>{p.carName}</div>
                            <div className="section__description">${Number(p.price || 0).toFixed(2)} each</div>
                          </Col>
                          <Col md="3" sm="6" xs="6" className="mt-2 mt-md-0">
                            <Input
                              type="number"
                              min={1}
                              value={p.quantity}
                              onChange={(e) => setQuantity(p.id, e.target.value)}
                            />
                          </Col>
                          <Col md="3" sm="6" xs="6" className="mt-2 mt-md-0 text-end">
                            <Button className="btn" type="button" onClick={() => removeItem(p.id)}>
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 d-flex justify-content-end">
                    <Button className="btn" type="button" onClick={() => navigate("/checkout")}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
