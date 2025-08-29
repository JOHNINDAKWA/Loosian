import "./QualityAssurance.css";
import { FiCalendar, FiTruck, FiPercent } from "react-icons/fi";
import Tractor from "../../assets/images/tractor.jpg";

export default function QualityAssurance() {
  const steps = [
    {
      title: "Daily Harvest",
      desc: "Our produce is harvested daily to ensure optimal freshness.",
      Icon: FiCalendar,
    },
    {
      title: "Refrigerated Transport",
      desc: "We use refrigerated trucks to maintain product quality during transportation.",
      Icon: FiTruck,
    },
    {
      title: "24-Hour Delivery",
      desc: "98% of our produce reaches the market within 24 hours of harvesting.",
      Icon: FiPercent,
    },
  ];

  return (
    <section
      className="qa"
      style={{
        "--qa-image": `url(${Tractor})`,
        "--qa-position": "75% center",
      }}
      aria-label="Quality Assurance"
    >
      {/* full-bleed tractor bg */}
      <div className="qa__bg" aria-hidden="true" />

      <div className="container">
        <div className="qa__panel">
          <span className="qa__eyebrow">Why Choose Us</span>
          <h2 className="qa__title">Quality Assurance: From Farm to Market</h2>

          <div className="qa__timeline">
            <span className="qa__spine" aria-hidden="true" />
            {steps.map(({ title, desc, Icon }, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              const offset = `${i * 36}px`; // compact stagger
              return (
                <div
                  key={title}
                  className={`qa__item ${side}`}
                  style={{ "--offset": offset }}
                >
                  <div className="qa__itemCard">
                    <div className="qa__icon"><Icon /></div>
                    <div>
                      <h3 className="qa__itemTitle">{title}</h3>
                      <p className="qa__itemDesc">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="tel:0723851228" className="qa__cta">Contact Today</a>
        </div>
      </div>
    </section>
  );
}
