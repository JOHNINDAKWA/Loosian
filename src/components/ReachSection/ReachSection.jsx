import "./ReachSection.css";
import MapCoverage from "../../assets/images/maps.jpg"; // <- your map image

// Reusable ribbon badge that uses your SVG path
function Ribbon({ number, title, children }) {
  return (
    <li className="lgreach-step">
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
        {/* Left: copy + steps */}
        <div className="lgreach-left">
          <h2 id="lgreach-title" className="lgreach-title">
            Serving Kenya and Beyond
          </h2>

          <ul className="lgreach-steps" role="list">
            <Ribbon number="1" title="Local Markets">
              Supplying fresh produce to Kajiado County, Nairobi, and other
              regions in Kenya.
            </Ribbon>

            <Ribbon number="2" title="Export Markets">
              Currently exporting <strong>30%</strong> of our produce to the EU
              and Middle East.
            </Ribbon>

            <Ribbon number="3" title="Expansion">
              Focusing on expanding export capabilities to serve more customers.
            </Ribbon>
          </ul>
        </div>

        {/* Right: map visual */}
        <figure className="lgreach-visual">
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
