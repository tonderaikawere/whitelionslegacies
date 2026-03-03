import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Login = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="5" md="7" sm="10">
              <Form>
                <FormGroup className="mb-3">
                  <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Input type="password" placeholder="Password" />
                </FormGroup>
                <Button className="btn w-100" type="button">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
