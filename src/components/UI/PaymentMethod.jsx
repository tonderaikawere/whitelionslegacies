import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import SafeImage from "./SafeImage";

const PaymentMethod = ({ onSendEnquiry }) => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Contact us to confirm availability and price
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> For imports, we will guide you through the process
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Request a quote (UK / South Africa / custom order)
        </label>

        <SafeImage src={masterCard} alt="Payment" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Visit our office in Gweru CBD for assistance
        </label>

        <SafeImage src={paypal} alt="Payment" />
      </div>
      <div className="payment text-end mt-5">
        <button type="button" onClick={onSendEnquiry}>Send Enquiry</button>
      </div>
    </>
  );
};

export default PaymentMethod;
