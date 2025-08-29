import "./SustainabilityShowcase.css";
import { FiDroplet, FiShield, FiSun, FiArrowUpRight } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import Lady from "../../assets/images/pretty-lady.jpg"; // <- your image path

export default function SustainabilityShowcase() {
  return (
    <section
      className="lgsus"
      aria-labelledby="lgsus-title"
    >
      <div className="container lgsus__grid">
        {/* Image side */}
        <figure className="lgsus__media">
          <img
            src={Lady}
            alt="Loosian farmer carrying fresh cabbage harvest"
            loading="lazy"
          />
          {/* Floating badges on image */}
          <figcaption className="lgsus__badges" aria-hidden="true">
            <div className="lgsus__badge">
              <FiDroplet />
              <b>-40%</b>
              <span>Water use</span>
            </div>
            <div className="lgsus__badge">
              <FiShield />
              <b>IPM</b>
              <span>Pest mgmt</span>
            </div>
          </figcaption>
        </figure>

        {/* Copy side */}
        <div className="lgsus__copy">
          <span className="lgsus__kicker">Grown Responsibly</span>
          <h2 id="lgsus-title" className="lgsus__title">Sustainable Farming Practices</h2>

          <ul className="lgsus__list">
            <li>
              <i className="lgsus__icon"><FiDroplet /></i>
              <div>
                <h3>Water Conservation</h3>
                <p>Drip irrigation reduces water consumption by <strong>40%</strong> while keeping crops evenly hydrated.</p>
              </div>
            </li>

            <li>
              <i className="lgsus__icon"><FaLeaf /></i>
              <div>
                <h3>Soil Health</h3>
                <p>Composting and crop rotation build living soils and long-term field fertility.</p>
              </div>
            </li>

            <li>
              <i className="lgsus__icon"><FiShield /></i>
              <div>
                <h3>Pest Management</h3>
                <p>Integrated Pest Management (IPM) strategies minimize pesticide use while protecting yield and biodiversity.</p>
              </div>
            </li>
          </ul>

  

 
        </div>
      </div>
    </section>
  );
}
