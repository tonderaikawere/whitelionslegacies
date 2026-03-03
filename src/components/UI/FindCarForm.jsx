import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";

const FindCarForm = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const make = form.elements.namedItem("make")?.value || "";
    const model = form.elements.namedItem("model")?.value || "";
    const budget = form.elements.namedItem("budget")?.value || "";
    const color = form.elements.namedItem("color")?.value || "";
    const source = form.elements.namedItem("source")?.value || "";

    const q = [make, model, budget && `budget:${budget}`, color && `color:${color}`, source && `type:${source}`]
      .filter(Boolean)
      .join(" ")
      .trim();

    navigate(q ? `/cars?search=${encodeURIComponent(q)}` : "/cars");
  };

  return (
    <Form className="form" onSubmit={onSubmit}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input name="make" type="text" placeholder="Make / Brand" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input name="model" type="text" placeholder="Model" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input name="budget" type="text" placeholder="Budget (optional)" />
        </FormGroup>

        <FormGroup className="form__group">
          <input name="color" className="journey__time" type="text" placeholder="Preferred Color" />
        </FormGroup>
        <FormGroup className="select__group">
          <select name="source">
            <option value="stock">Available Stock</option>
            <option value="uk">Import From UK</option>
            <option value="za">Import From South Africa</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit">Search</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
