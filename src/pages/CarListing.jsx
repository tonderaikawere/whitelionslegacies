import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { useLocation } from "react-router-dom";

const CarListing = () => {
  const location = useLocation();
  const [sortOrder, setSortOrder] = useState("");

  const searchQuery = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return (params.get("search") || "").trim();
  }, [location.search]);

  const filteredCars = useMemo(() => {
    const base = (() => {
      if (!searchQuery) return carData;
      const q = searchQuery.toLowerCase();
      return carData.filter((c) =>
        [c.carName, c.brand, c.model, c.description].some((v) =>
          String(v || "")
            .toLowerCase()
            .includes(q)
        )
      );
    })();

    const next = [...base];
    if (sortOrder === "low") {
      next.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    }
    if (sortOrder === "high") {
      next.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    }

    return next;
  }, [searchQuery, sortOrder]);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {filteredCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
