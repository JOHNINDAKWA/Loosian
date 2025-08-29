import "./CTA.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import CtaBg from "../../assets/images/banner.jpg";   // your background
import Btn   from "../../assets/images/btn.png";      // round badge icon

export default function CTA() {
  return (
    <section
      className="lgcta-wrap"
      style={{ "--lgcta-image": `url(${CtaBg})` }}
      aria-label="Get in touch with Loosian Grocers"
    >
      <div className="container">
        <div className="lgcta-card">
          {/* Left cluster */}
          <div className="lgcta-left">
            <div className="lgcta-badge" aria-hidden="true">
              <img src={Btn} alt="" />
            </div>

            <div className="lgcta-copy">
              <span className="lgcta-eyebrow">Let’s work together</span>
              <h3 className="lgcta-title">
                Fresh Loosian produce <br className="lgcta-br" />
                harvested daily, delivered fast.
              </h3>
              <p className="lgcta-sub">
                Onions, greens & herbs from Ildamat, Kajiado — bulk orders, retail
                packs & export ready.
              </p>
            </div>
          </div>

          {/* Right actions */}
          <div className="lgcta-actions">
            <Link to="/contact" className="lgcta-btn">
              Contact Us Today <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
