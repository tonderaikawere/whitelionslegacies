import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const BuyingAndSellingPolicy = () => {
  const policyText = `
This Buying & Selling Policy explains how White Lions Legacies handles vehicle buying, import-to-order sourcing, and customer enquiries. The purpose of this page is to set expectations, explain the steps involved, and provide practical guidance. This policy is part of our wider website documentation and should be read together with our Terms & Conditions and Privacy Policy.

1. Overview
White Lions Legacies is a vehicle sales and import company based in Gweru CBD, Zimbabwe. We assist customers with two main pathways: (a) purchasing vehicles that are available locally or through our network, and (b) import-to-order sourcing from markets such as the UK and South Africa.

Because vehicles differ by year, trim, mileage, and condition, our process focuses on clear communication and confirmation. The website listings and prices are not a guaranteed offer; they are indicative guides to help you start an enquiry.

2. Buying From Available Stock
If a vehicle is available locally or in our network, you can enquire about it through the Site or by calling/WhatsApp. Our team will confirm the latest availability, the condition, and the exact asking price. Where possible, we may arrange a viewing appointment.

2.1 Viewing and inspection
Viewing is subject to availability and scheduling. For safety and security, we may request identification before a test drive. A test drive may be limited by location, time, and vehicle status. We may refuse a test drive if we believe it presents a safety risk or security concern.

2.2 Condition of used vehicles
Used vehicles often show wear consistent with age and mileage. You should expect to budget for routine maintenance such as fluids, filters, tyres, battery, brake pads, and other wear items. Unless we specifically agree otherwise in writing, used vehicles may be sold on an “as-is” basis.

3. Import-to-Order (Sourcing From UK / South Africa)
Import-to-order means we help you source a vehicle that matches your preferences when it is not readily available in local stock. You will be asked to provide: make/model, budget range, preferred year range, transmission, fuel type, mileage preference, preferred color, and any must-have features.

3.1 Sourcing and options
We may provide options from suppliers, auctions, or partner networks. Some options may include inspection details, auction sheets, images, or supplier notes. These sources can be limited and sometimes use abbreviations; our team can explain them.

3.2 Estimated costs
Import costs may include purchase price, inland logistics, shipping, insurance, port fees, duty/taxes, clearance fees, and local delivery. Exchange rates can change, which can impact final pricing. We will provide an estimate and explain what is included.

3.3 Timelines
Timelines are estimates and depend on supplier processing, shipping schedules, port congestion, documentation processing, inspection timing, and clearance. Delays may occur. We will share updates and advise on what is needed from you.

4. Deposits and Reservations
Where a deposit or reservation fee is required, we will explain the purpose (reservation of local stock, supplier commitment, auction bid, shipping booking) and whether it is refundable. Refundability depends on the stage of the process and third-party commitments.

5. Pricing Notes
Prices shown on the Site are indicative. Final pricing depends on specification, condition, mileage, exchange rates, shipping, duty and taxes, clearance costs, and optional services requested by the customer.

6. Selling / Trade-In
If you want to sell your vehicle or discuss a trade-in, you can contact us with:
(a) make/model and year,
(b) mileage,
(c) condition and any known issues,
(d) documents available,
(e) your location.

Any estimate is subject to verification and inspection. We may decline to purchase a vehicle based on condition, documentation, or business considerations.

7. Documents and Verification
Depending on the transaction, we may request identification and supporting documentation. For imported vehicles, documentation is essential for clearance and registration. Delays in providing documents may cause delays and additional costs such as storage or demurrage.

8. Customer Responsibilities
You agree to provide accurate information, respond to requests in a timely manner, and verify payment instructions through official channels. If you require a specific feature or a specific color, you must confirm it before committing.

9. Contact
For enquiries or to start a buying/selling conversation:

CONTACT_BLOCK_COMPONENT

Location: Gweru CBD, Zimbabwe

Note: This policy is provided for guidance and does not replace transaction-specific written terms.

10. What “In Stock” and “On Request” Means
Some vehicles may be available locally and can be viewed sooner. Other vehicles are shown as examples of what we can source and may be “on request”. If you need an urgent purchase, tell us your timeline. If you can wait for sourcing, import-to-order may provide more choices.

11. How We Estimate Prices
We estimate prices based on:
(a) supplier pricing and current market rates,
(b) expected shipping and insurance,
(c) expected port and clearance costs,
(d) duty/taxes assumptions,
(e) exchange rates and timing.

Final pricing can change when the exact unit is confirmed. For example, a higher-trim unit or a lower-mileage unit may cost more. Exchange rates can also affect the final landed cost.

12. Deposits: Why They May Be Required
Deposits may be required to:
(a) reserve a local unit for a short period,
(b) demonstrate commitment before a supplier starts sourcing,
(c) secure a unit at auction,
(d) book shipping or logistics.

We will explain deposit purpose and whether it is refundable. Refunds are affected by third-party commitments. Once a supplier has purchased or committed to a unit, refunds may not be possible.

13. Basic Customer Checklist Before You Commit
Before committing to a purchase or import-to-order, consider:
(a) your budget ceiling (including unexpected costs),
(b) your preferred fuel type and running costs,
(c) service and spare parts availability,
(d) insurance costs,
(e) resale value,
(f) whether you need extra ground clearance,
(g) whether you need a hatchback, sedan, SUV, or pickup.

If you are not sure, tell us your use case (commute, family, business, long-distance) and we can propose options.

14. Color and Specification Requests
Color is a preference and can affect availability. If you want a specific color (for example, white only), tell us early. If your preference is flexible, you will have more options.

Specifications that commonly affect cost and availability include:
(a) hybrid vs petrol,
(b) 2WD vs 4WD,
(c) push-start vs key start,
(d) reverse camera,
(e) trim level and interior finish.

15. Viewing and Handover for Local Vehicles
If a vehicle is available locally, we can arrange a viewing. A test drive may be possible depending on the vehicle status and the environment. We may request identification for security.

On handover, we will confirm the handover steps, any included accessories, and any relevant notes. For used vehicles, routine maintenance should be expected.

16. Import-to-Order: Sourcing Steps in More Detail
Import-to-order typically follows:
(a) requirements gathering,
(b) sourcing and shortlist,
(c) inspection review,
(d) quote confirmation,
(e) supplier purchase/commitment,
(f) shipping booking,
(g) clearance and handover.

At each stage, we will communicate what is needed from you (for example, confirmation choices, document details, or payment milestones) and what the expected next step is.

17. Risk Management and What We Cannot Guarantee
We can guide you and provide options, but we cannot guarantee:
(a) that a specific unit will remain available until you commit,
(b) that shipping schedules will be unchanged,
(c) that third-party processes (customs, inspections, ports) will be instant,
(d) that a used vehicle will be defect-free.

We will always aim to reduce risk by sharing available inspection information and confirming the process.

18. Complaints and Customer Support
If you have an issue, contact us with details of the problem and supporting evidence. We will review and respond. Most issues can be resolved by clarifying facts and agreeing on practical next steps.

19. Trade-In / Selling: Vehicle Details We Need
If you want to sell your vehicle or request a trade-in assessment, send:
(a) make/model,
(b) year,
(c) mileage,
(d) photos (exterior and interior),
(e) known issues,
(f) service history if available,
(g) your location.

We may arrange an inspection before confirming any offer.

20. Safety Note
If meeting for viewings or inspections, follow safe meeting practices. Use agreed locations and times, and keep communication on official channels.

21. Example Scenarios (Practical)
Scenario A: Small car for daily commuting
A customer wants a small fuel-saving car for commuting in town. In this case, we usually ask whether you prefer petrol or hybrid, whether you need automatic transmission, and whether you have a strict budget. Common options can include Honda Fit, Toyota Vitz, Nissan Note, and Toyota Aqua. We will confirm the available year range, mileage, and condition for the units available.

Scenario B: Family SUV for mixed roads
A customer wants a family SUV suitable for long-distance travel and mixed road conditions. We ask about seating needs, fuel preference, whether 4WD is required, and budget. We then suggest suitable options and discuss running costs.

Scenario C: Import-to-order with strict color
A customer wants a specific model in a specific color (for example, white only). We can attempt to source it, but strict color requirements can reduce availability and increase timelines. If you are flexible on color, sourcing is usually faster.

22. What We Mean by “Available Stock”
When we refer to available stock, it can mean:
(a) vehicles physically in Zimbabwe and ready for viewing,
(b) vehicles in transit/incoming,
(c) vehicles available from a partner source.

Availability changes quickly. We confirm availability at the time you are ready to proceed.

23. Negotiation and “Best Price” Requests
Some customers ask for a best price immediately. We can advise, but pricing depends on:
(a) the exact unit condition,
(b) the supplier/market pricing,
(c) exchange rates,
(d) import/clearance costs.

If a vehicle is rare or high demand, discounts may be limited. If you have flexibility on model or year, we may propose a more affordable alternative.

24. What to Expect From a Quotation
A quotation may include:
(a) vehicle details (make/model/year range or exact unit),
(b) what is included in the price,
(c) a validity period,
(d) assumptions (exchange rate assumptions for imports),
(e) payment milestones.

If you need a breakdown of costs, ask us. Where possible, we can explain major components.

25. Cancellations: Practical Notes
Cancellations depend on timing. Import-to-order cancellations can be expensive because suppliers may not refund once a unit is purchased or shipping has been booked. For local stock reservations, refundability depends on what costs have been incurred.

Before you pay a deposit, ask:
(a) what exactly the deposit is for,
(b) whether it is refundable,
(c) what happens if you change your mind,
(d) what happens if the unit becomes unavailable.

26. Ownership Transfer and Registration Guidance
The paperwork process depends on the transaction. We will guide you on what is required. Keep your documents safe and provide accurate names/details to avoid delays.

27. Inspection and Condition Notes (Used Vehicles)
Used vehicles can have cosmetic wear. If you expect a “brand new” look, you may need a newer unit or budget for cosmetic work. We can discuss expectations and options.

28. After-Sales Support (General)
We can provide general guidance after purchase. Routine maintenance is the buyer’s responsibility unless a specific warranty/service agreement is provided.

29. Policy Updates
We may update this policy as our processes improve. The latest version will be posted on this page.

30. Summary
Our goal is to make buying and importing clear and transparent. Contact us with your budget and needs, and we will guide you step by step.

31. Import-to-Order: Cost Components (Explained)
When customers ask “why does import cost vary?”, it is usually because the total landed cost is made up of many parts. Depending on the route and unit, cost components may include:
(a) supplier/auction purchase price,
(b) inland transport in the source country,
(c) inspection fees (where applicable),
(d) shipping charges,
(e) marine insurance,
(f) port charges and handling,
(g) duty/taxes,
(h) clearance fees,
(i) storage/demurrage if clearance is delayed,
(j) local delivery.

We can explain major components and assumptions when quoting.

32. What We Need From You for a Clean Import Process
To reduce delays:
(a) respond quickly to questions,
(b) confirm your chosen option clearly,
(c) provide accurate names/details for documents,
(d) avoid changing requirements late in the process,
(e) keep funds ready for agreed milestones.

33. Common Mistakes Customers Make (Avoid These)
(a) selecting a vehicle without confirming must-have features,
(b) assuming website prices are final for all years/specs,
(c) delaying document submission,
(d) changing model repeatedly without clarifying budget,
(e) sending money to unverified accounts.

34. Condition Expectations and Pricing
Condition affects price. Lower mileage, cleaner interior, and higher trim can cost more. If your priority is “clean and low mileage”, tell us and we will source accordingly. If your priority is “lowest price”, be prepared for more average condition.

35. Hybrid vs Petrol: Practical Notes
Hybrid cars often have excellent fuel economy but can have different maintenance needs (e.g., hybrid battery health). Petrol cars may be simpler for some owners. We can advise common considerations, but final decisions depend on your usage.

36. Duty/Tax and Regulatory Changes
Government duties/taxes and regulations can change. If a change occurs, it can impact final costs. We will communicate changes where they affect your transaction.

37. Disputes and Resolution
If you are unhappy with any step, contact us promptly. Provide:
(a) what happened,
(b) what you expected,
(c) supporting messages/documents,
(d) your requested resolution.

We aim to resolve issues professionally and fairly.

38. Frequently Asked Questions (FAQ)
Q: Can you guarantee delivery dates?
A: We provide estimates. Shipping and clearance can change.

Q: Can I import a specific year and color?
A: We can attempt to source it. Availability varies.

Q: Are deposits refundable?
A: It depends on the purpose and stage. We explain before you pay.

Q: Can you help me sell my car?
A: Contact us with details. We will advise if we can assist.

39. Final Note
This policy is intended to help customers understand the process. Transaction-specific written terms apply when you proceed.
  `.trim();

  const paragraphs = policyText.split("\n\n");

  const contactBlock = (
    <>
      <p className="section__description mb-0">
        Phone: <a href="tel:+263782528050">+263 78 252 8050</a> /{" "}
        <a href="tel:+263716264988">+263 71 626 4988</a>
      </p>
      <p className="section__description mb-0">
        Email: <a href="mailto:contact@whitelionslegacies.com">contact@whitelionslegacies.com</a>
      </p>
    </>
  );

  return (
    <Helmet title="Buying & Selling Policy">
      <CommonSection title="Buying & Selling Policy" />
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              {paragraphs.map((text, idx) => {
                if (text.trim() === "CONTACT_BLOCK_COMPONENT") {
                  return <React.Fragment key={idx}>{contactBlock}</React.Fragment>;
                }

                return (
                  <p key={idx} className="section__description">
                    {text}
                  </p>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BuyingAndSellingPolicy;
