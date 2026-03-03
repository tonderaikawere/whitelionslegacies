import React, { useEffect, useMemo, useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = ({
  defaultBrand = "",
  defaultModel = "",
  availableColors = [],
  defaultColor = "",
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [make, setMake] = useState(defaultBrand || "");
  const [model, setModel] = useState(defaultModel || "");
  const [source, setSource] = useState("stock");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");

  const colorOptions = useMemo(() => {
    const colors = Array.isArray(availableColors) ? availableColors : [];
    const normalized = colors
      .map((c) => `${c}`.trim())
      .filter(Boolean);
    return normalized;
  }, [availableColors]);

  const [preferredColor, setPreferredColor] = useState(defaultColor || "any");

  useEffect(() => {
    setPreferredColor(defaultColor || "any");
  }, [defaultColor]);

  useEffect(() => {
    setMake(defaultBrand || "");
  }, [defaultBrand]);

  useEffect(() => {
    setModel(defaultModel || "");
  }, [defaultModel]);

  const submitHandler = (event) => {
    event.preventDefault();

    const subject = `Sales enquiry - ${make || defaultBrand || "Car"} ${model || defaultModel || ""}`.trim();
    const body = [
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      `Car Make/Brand: ${make}`,
      `Model: ${model}`,
      `Source: ${source}`,
      `Preferred Color: ${preferredColor}`,
      `Preferred Contact Date: ${preferredDate}`,
      `Preferred Contact Time: ${preferredTime}`,
      "",
      notes,
    ].join("\n");

    window.location.href = `mailto:contact@whitelionslegacies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="Car Make / Brand (e.g., Toyota)"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="Model (e.g., Hilux, Aqua, Fit)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="stock">From Available Stock</option>
          <option value="import">Import From UK</option>
          <option value="import">Import From South Africa</option>
          <option value="custom">Custom Order (color & specs)</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          className={
            preferredColor && preferredColor !== "any"
              ? "preferred-color-select is-selected"
              : "preferred-color-select"
          }
          value={preferredColor}
          onChange={(e) => setPreferredColor(e.target.value)}
        >
          <option value="any">Preferred Color (Any)</option>
          {colorOptions.length > 0
            ? colorOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))
            : [
                "White",
                "Black",
                "Silver",
                "Blue",
                "Red",
                "Grey",
                "Green",
                "Gold",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} type="date" placeholder="Preferred Contact Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Preferred Contact Time"
          className="time__picker"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Tell us what you’re looking for (year range, budget, transmission, fuel type, mileage, etc.)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </FormGroup>

      <div className="mt-4">
        <button className="btn" type="submit">
          Send Enquiry
        </button>
      </div>
    </Form>
  );
};

export default BookingForm;
