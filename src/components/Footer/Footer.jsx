import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import {
  FiMail, FiMapPin, FiPhone,
  FiPackage, FiTruck,
  FiExternalLink, FiInstagram, FiFacebook, FiLinkedin
} from "react-icons/fi";

import logo from "../../assets/logo.png";
import footerBg from "../../assets/images/footer.png"; // replace with your image if different
import { FaLeaf } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="lgfoot"
      style={{ "--foot-image": `url(${footerBg})` }}
      aria-label="Loosian Grocers site footer"
    >
      {/* Feature strip */}
      <div className="container lgfoot-strip">
        <div className="lgfoot-chip">
          <FaLeaf /> Daily Harvest
          <span>Picked fresh every morning</span>
        </div>
        <div className="lgfoot-chip">
          <FiTruck /> Cold-Chain Logistics
          <span>Quality maintained end-to-end</span>
        </div>
        <div className="lgfoot-chip">
          <FiPackage /> 24-Hour Delivery
          <span>98% delivered within 24h</span>
        </div>
        <div className="lgfoot-chip">
          <FiExternalLink /> Export Ready
          <span>EU & Middle East markets</span>
        </div>
      </div>

      {/* Main grid */}
      <div className="container lgfoot-grid">
        {/* Brand + Contact */}
        <section className="lgfoot-col">
          <div className="lgfoot-brand">
            <img src={logo} alt="Loosian Grocers" />
            <p>
              Loosian Grocers <br />& Exporters
            </p>
          </div>
          <ul className="lgfoot-contact">
            <li>
              <span className="lgfoot-contactIcon"><FiMail /></span>
              <div>
                <p className="lgfoot-contactLabel">Email</p>
                <a href="mailto:oloosuyianfarm@gmail.com">
                  oloosuyianfarm@gmail.com
                </a>
              </div>
            </li>
            <li>
              <span className="lgfoot-contactIcon"><FiMapPin /></span>
              <div>
                <p className="lgfoot-contactLabel">Location</p>
                <address>Ildamat Area, Kajiado — P.O. Box 3991, Nairobi</address>
              </div>
            </li>
            <li>
              <span className="lgfoot-contactIcon"><FiPhone /></span>
              <div>
                <p className="lgfoot-contactLabel">Phone</p>
                <a href="tel:0723851228">0723 851 228</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Useful links */}
        <section className="lgfoot-col">
          <h4 className="lgfoot-title">Useful Links</h4>
          <ul className="lgfoot-links">
            <li><NavLink to="/about">About Loosian</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/quality">Quality Assurance</NavLink></li>
            <li><NavLink to="/markets">Markets</NavLink></li>
            <li><NavLink to="/sustainability">Sustainability</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </section>

        {/* Our Products */}
        <section className="lgfoot-col">
          <h4 className="lgfoot-title">Our Products</h4>
          <ul className="lgfoot-links">
            <li>Onions — Red Coach & Neptune (50–80mm)</li>
            <li>Greens — kale (bunch/250g/500g), spinach, lettuce</li>
            <li>Herbs — rosemary, thyme, basil, chives (50g/100g)</li>
            <li>Bulk & contract supply for retail & food service</li>
          </ul>
        </section>

        {/* Replacing "Our News" -> Highlights  */}
        <section className="lgfoot-col">
          <h4 className="lgfoot-title">Loosian Highlights</h4>
          <ul className="lgfoot-highlights">
            <li>
              <span><FaLeaf /></span>
              <p><strong>Sustainable methods</strong><br/>Drip irrigation, composting & IPM</p>
            </li>
            <li>
              <span><FiTruck /></span>
              <p><strong>Cold-chain handling</strong><br/>Refrigerated transport to market</p>
            </li>
            <li>
              <span><FiExternalLink /></span>
              <p><strong>Export share 30%</strong><br/>EU & Middle East clientele</p>
            </li>
          </ul>
        </section>
      </div>

      {/* Bottom bar */}
      <div className="lgfoot-bottom">
        <div className="container lgfoot-bottomInner">
          <p className="lgfoot-copy">
            © {year} Loosian Grocers & Exporters. All rights reserved.
          </p>
          <ul className="lgfoot-legal">
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
          <ul className="lgfoot-social">
            <li><a href="#" aria-label="Instagram"><FiInstagram /></a></li>
            <li><a href="#" aria-label="Facebook"><FiFacebook /></a></li>
            <li><a href="#" aria-label="LinkedIn"><FiLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
