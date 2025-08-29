import "./ReachSection.css";
import MapCoverage from "../../assets/images/maps.jpg"; // <- map image

// Reusable ribbon badge
function Ribbon({ number, title, children, delay }) {
  return (
    <li
      className="lgreach-step"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="lgreach-ribbon">
        <svg
          className="lgreach-ribbonSvg"
          viewBox="0 0 90 132.6"
          aria-hidden="true"
        >
          <path
            d="
              M 0 114.515625
              L 45 132.515625
              L 90 114.515625
              L 90 0
              L 45 18
              L 0 0 Z
            "
          />
        </svg>
        <span className="lgreach-ribbonNum">{number}</span>
      </div>

      <div className="lgreach-stepCopy">
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </li>
  );
}

export default function ReachSection() {
  return (
    <section className="lgreach" aria-labelledby="lgreach-title">
      <div className="container lgreach-grid">
        {/* Left side */}
        <div
          className="lgreach-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2 id="lgreach-title" className="lgreach-title">
            Serving Kenya and Beyond
          </h2>

          <ul className="lgreach-steps" role="list">
            <Ribbon number="1" title="Local Markets" delay="150">
              Supplying fresh produce to Kajiado County, Nairobi, and other
              regions in Kenya.
            </Ribbon>

            <Ribbon number="2" title="Export Markets" delay="250">
              Currently exporting <strong>30%</strong> of our produce to the EU
              and Middle East.
            </Ribbon>

            <Ribbon number="3" title="Expansion" delay="350">
              Focusing on expanding export capabilities to serve more customers.
            </Ribbon>
          </ul>
        </div>

        {/* Right side */}
        <figure
          className="lgreach-visual"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <img
            src={MapCoverage}
            alt="Loosian Grocers coverage map: Kenya to EU and Middle East"
            loading="lazy"
          />
          <figcaption className="visually-hidden">
            Routes from Kenya towards Europe and Middle East.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
