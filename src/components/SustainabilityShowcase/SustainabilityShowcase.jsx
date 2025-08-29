import "./SustainabilityShowcase.css";
import { FiDroplet, FiShield, FiSun, FiArrowUpRight } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import Lady from "../../assets/images/pretty-lady.jpg"; // <- your image path

export default function SustainabilityShowcase() {
  return (
    <section
      className="lgsus"
      aria-labelledby="lgsus-title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container lgsus__grid">
        {/* Image side */}
        <figure
          className="lgsus__media"
          data-aos="zoom-in"
          data-aos-delay="60"
          data-aos-duration="900"
        >
          <img
            src={Lady}
            alt="Loosian farmer carrying fresh cabbage harvest"
            loading="lazy"
          />
          {/* Floating badges on image */}
          <figcaption className="lgsus__badges" aria-hidden="true">
            <div
              className="lgsus__badge"
              data-aos="zoom-in"
              data-aos-delay="160"
            >
              <FiDroplet />
              <b>-40%</b>
              <span>Water use</span>
            </div>
            <div
              className="lgsus__badge"
              data-aos="zoom-in"
              data-aos-delay="260"
            >
              <FiShield />
              <b>IPM</b>
              <span>Pest mgmt</span>
            </div>
          </figcaption>
        </figure>

        {/* Copy side */}
        <div
          className="lgsus__copy"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="900"
        >
          <span className="lgsus__kicker" data-aos="fade-down" data-aos-delay="120">
            Grown Responsibly
          </span>
          <h2 id="lgsus-title" className="lgsus__title" data-aos="fade-up" data-aos-delay="160">
            Sustainable Farming Practices
          </h2>

          <ul className="lgsus__list">
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="lgsus__icon"><FiDroplet /></i>
              <div>
                <h3>Water Conservation</h3>
                <p>Drip irrigation reduces water consumption by <strong>40%</strong> while keeping crops evenly hydrated.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="260">
              <i className="lgsus__icon"><FaLeaf /></i>
              <div>
                <h3>Soil Health</h3>
                <p>Composting and crop rotation build living soils and long-term field fertility.</p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="320">
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
