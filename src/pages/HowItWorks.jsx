import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const HowItWorks = () => {
  const howText = `
This How It Works page explains how White Lions Legacies helps you buy a vehicle in Zimbabwe and how we assist with import-to-order sourcing from the UK and South Africa. The goal is to show the steps clearly so you know what to expect, what information to prepare, and how decisions are made.

Because vehicle markets change frequently, the website is designed as an enquiry and guidance platform rather than an automated checkout system. That means the most important step is contacting our team so we can confirm the latest availability, condition, and pricing for the vehicle you want.

1. Step One: Browse and Search
Start by browsing the Cars page or using the search bar in the header. You can search by make (Toyota, Honda, Nissan), model (Fit, Aqua, Note), or by keywords you see in the listings.

If you already know what you want, you can search directly. If you are still deciding, browse several options to compare sizes, running costs, and features.

2. Step Two: Select a Vehicle and Check Key Details
When you open a vehicle details page, review the basic information such as model, automatic transmission, fuel economy, and any notes. You can also select your preferred color where available. Color selection helps us understand your preference, especially for import-to-order.

Remember: vehicles can vary a lot by year, mileage, trim level, and condition. The details on the site are designed as guidance and may not include every single feature. If a specific feature is important to you (for example, push start, reverse camera, specific infotainment, 4WD), list it clearly in your enquiry.

3. Step Three: Send an Enquiry (Fastest Way to Get Accurate Information)
Click Enquire or contact us directly by phone. In your enquiry, include:
(a) the vehicle name you are interested in,
(b) your budget range,
(c) your preferred color,
(d) your preferred year range (if any),
(e) transmission preference (automatic/manual),
(f) fuel type preference (petrol/diesel/hybrid),
(g) how soon you want the vehicle.

The more details you share, the faster we can respond with accurate options.

4. Step Four: Confirmation of Availability and Current Pricing
After you enquire, our team will confirm whether the vehicle is available and provide the latest pricing. Prices on the website may be “starting from” figures and can change based on condition, specifications, market price changes, exchange rates (for imported vehicles), shipping costs, and clearance costs.

If the exact vehicle is not available, we will propose alternatives close to your budget and requirements.

5. Step Five: Viewing / Inspection (When Applicable)
If the vehicle is available locally, we may arrange a viewing appointment. Depending on the situation, a test drive may be possible. For security and safety reasons, we may request identification before a test drive.

For imported vehicles, we may provide inspection details, auction sheets, or supplier notes where available. These sources may have abbreviations and scoring systems; we can explain them.

6. Step Six: Choosing Between Local Stock vs Import-to-Order
There are two common pathways:

6.1 Local stock / available units
This is usually the fastest option because the vehicle can be viewed and delivered sooner.

6.2 Import-to-order
This option is ideal if you want a specific model, a specific year range, or a specific color/spec. Import-to-order often provides wider options but takes longer due to sourcing, shipping, and clearance.

7. Import-to-Order: Detailed Steps
Import-to-order generally follows these steps:

7.1 Requirements gathering
We confirm your requirements in detail: make/model, acceptable alternatives, budget, preferred color, mileage range, year range, transmission, fuel type, and must-have features.

7.2 Sourcing and option shortlist
We search supplier networks and provide options. We may share photos, inspection notes, and estimated landed cost.

7.3 Confirmation and commitment
When you select a unit, we confirm the next steps. Depending on the supplier/market, this may involve a deposit or commitment. Terms are provided before you commit.

7.4 Shipping and clearance
Shipping schedules and clearance steps vary by route and port conditions. Delays can occur due to shipping schedules, port congestion, inspections, and document processing.

7.5 Delivery and handover
Once the vehicle is cleared and ready, we arrange delivery or collection and handover details.

8. Payments and Safety
We will provide payment instructions through official channels. Always verify payment details directly with our official contacts. Avoid sending sensitive banking/card details through public channels.

9. Ongoing Support
Even after purchase, you can contact us for guidance. We can also advise on routine ownership considerations such as service intervals, tyre replacement, and basic maintenance planning.

10. Contact
If you are ready to buy or want to start an import-to-order request:

CONTACT_BLOCK_COMPONENT

Office hours: Mon - Sat 8am - 5pm, Sun 10am - 2pm
Location: Gweru CBD, Zimbabwe

Note: This page is guidance only. Transaction-specific terms may apply and will be confirmed in writing.

11. What Information Helps Us Help You Faster
When you contact us, the following details help us respond quickly:
(a) your budget range and the maximum you are willing to spend,
(b) your preferred vehicle size (small hatchback, sedan, SUV, pickup),
(c) fuel preference (petrol, diesel, hybrid),
(d) whether you require automatic transmission,
(e) your timeline (urgent vs can wait),
(f) your preferred color and whether you are flexible,
(g) your must-have features.

If you are not sure about features, describe your use case: daily commute, family use, business deliveries, long-distance travel, rough roads, or mixed use.

12. How We Handle “Starting From” Prices
The website shows indicative pricing so you can compare options. For final pricing, we confirm based on the exact unit available and the costs involved. For imported vehicles, final pricing can be influenced by exchange rates, shipping and insurance, duty/taxes, and clearance costs.

If you have a strict budget, tell us. We can propose options that fit the budget and advise where flexibility might help.

13. Why Availability Can Change Quickly
Vehicles can be sold or reserved quickly, especially popular models such as small fuel-efficient hatchbacks. If you see a vehicle you like, contact us early. If it is not available, we can suggest alternatives.

14. Imports: What “Landed Cost” Usually Means
When we talk about landed cost, we mean the estimated total cost to bring the vehicle into Zimbabwe, which can include the purchase price, shipping and insurance, port fees, duty/taxes, clearance fees, and local delivery. The exact breakdown varies depending on the sourcing route.

15. Documentation and Customer Cooperation
Some steps require documents or confirmation from the customer. Delays in providing details can cause delays and sometimes extra costs such as storage. If you respond quickly to document requests, processes move faster.

16. Choosing Alternatives (Smart Flexibility)
If you choose a single exact model and exact color only, sourcing can take longer. If you are open to similar alternatives (for example, Honda Fit vs Toyota Vitz vs Nissan Note), you will typically get results faster.

17. After-Sales Tips (Practical Guidance)
After purchase, plan for routine ownership:
(a) service and oil changes,
(b) tyres and alignment,
(c) battery health,
(d) brake pads and fluids,
(e) basic safety checks.

If you want, we can advise on common maintenance considerations for the model you choose.

18. Common Questions
Customers often ask:
(a) “Can you import a specific color?” Yes, we try, but availability can vary.
(b) “How long does import take?” It depends on supplier timing, shipping schedules, and clearance.
(c) “Do prices change?” They can change due to exchange rates and supplier/market shifts.

19. Best Way to Start
The best way to start is to send an enquiry with your budget, preferred models, and preferred color. We will respond with the next steps.

20. Quick Checklist (Copy/Paste)
If you want to send a clean enquiry message, copy and fill this:
Make/Model:
Budget:
Preferred Color:
Year Range:
Transmission:
Fuel Type:
Mileage Preference:
Must-have Features:
Timeline:
Location (if for viewing):

21. Example Import Timeline (Illustrative)
Import timelines vary. This is an example of how a smooth process could look:
(a) Day 1–2: requirements confirmed and sourcing starts.
(b) Day 3–7: shortlist options shared and unit selected.
(c) Day 7–14: supplier commitment and shipping booking.
(d) Weeks 3–6: shipping in transit.
(e) Weeks 6–8: arrival, clearance, and handover.

This is illustrative only. Real timelines can be shorter or longer.

22. What Can Delay an Import?
Common delay causes include:
(a) supplier delays and paperwork,
(b) shipping schedule changes,
(c) port congestion,
(d) inspection timing,
(e) missing or incorrect documents,
(f) changes in regulations.

23. How to Choose a Small Car (Honda Fit / Vitz / Note)
If your priority is low running costs and easy parking, small hatchbacks are a great option. Consider:
(a) parts availability,
(b) fuel economy,
(c) whether you prefer hybrid,
(d) the condition and service history,
(e) your preferred color and features.

24. Frequently Asked Questions (FAQ)
Q: Are website prices final?
A: They are indicative “starting from” figures. Final pricing depends on the exact unit and costs involved.

Q: Can I request a specific color?
A: Yes. We can source by color where possible. Availability varies, so flexibility can help.

Q: Do you provide financing?
A: The website does not provide financing. If you have your own financing, tell us.

Q: Can I buy without visiting the office?
A: Yes, you can start remotely. For local vehicles, viewing is recommended where possible.

Q: How do I avoid scams?
A: Verify payment instructions through our official phone numbers and email.

25. Glossary
Indicative price: a guide figure that may change.
Import-to-order: sourcing a vehicle internationally based on your requirements.
Landed cost: estimated total cost to bring the vehicle into Zimbabwe.
Trim level: the specification variant of a model.

26. Final Note
If you are unsure, contact us with your budget and what you want to use the car for. We will guide you.

27. What Happens After You Click Enquire
After you click Enquire, the goal is to quickly confirm three things:
(a) availability (is the unit available, incoming, or on request),
(b) current price (based on the exact unit/spec),
(c) next steps (viewing, sourcing, or alternative suggestions).

We may ask follow-up questions to confirm your requirements because this reduces mistakes.

28. How to Compare Two Cars
When choosing between two options, compare:
(a) total ownership cost (fuel + service + tyres),
(b) parts availability,
(c) reliability reputation,
(d) comfort and space,
(e) resale value,
(f) suitability for your roads.

29. What If You Don’t Know the Exact Model?
That is common. Send your use case and budget. Example:
“I need a small automatic fuel saver under $7,000 for daily commuting in town.”

We will then suggest options like Honda Fit, Toyota Vitz, Nissan Note, or Toyota Aqua, depending on availability.

30. How We Use Your Color Selection
Preferred color helps in two ways:
(a) it guides sourcing when multiple options exist,
(b) it helps us avoid suggesting cars you will not accept.

If color is flexible, you will get results faster.

31. Fees and Extra Costs (What to Ask)
When you receive a quote or estimate, ask:
(a) what is included,
(b) what is not included,
(c) which costs can change,
(d) what the next payment milestone is.

32. Safety Reminder
Always verify payment instructions. Do not rely on forwarded payment details from unknown contacts. Use our official contacts.
  `.trim();

  const paragraphs = howText.split("\n\n");

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
    <Helmet title="How It Works">
      <CommonSection title="How It Works" />
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

export default HowItWorks;
