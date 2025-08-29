import "./About.css";
import { Link } from "react-router-dom";
import {
  FiAward,
  FiTruck,
  FiThermometer,
  FiClock,
  FiGlobe,
  FiDroplet,
  FiShield,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaRecycle } from "react-icons/fa";

import HeroBg from "../../assets/images/track.jpg";      // leafy background
import Farmer from "../../assets/images/image.jpg";                 // farmer holding crate
import Cert from "../../assets/images/imgi_8_certification.png";       // 100% natural badge

export default function About() {
  return (
    <main className="lgabout">
      {/* ===== Hero ===== */}
      <section
        className="lgabout-hero"
        style={{ "--about-hero": `url(${HeroBg})` }}
        aria-label="About Loosian Grocers"
      >
        <div className="container lgabout-heroInner">
          <div className="lgabout-heroCopy">
            <span className="lgabout-eyebrow">Fresh • Quality • Certified</span>
            <h1 className="lgabout-title">
              About Loosian Grocers &amp; Exporters
            </h1>
            <p className="lgabout-sub">
              For over 3 years, Oloosuyian Farm Ltd (Loosian Grocers) has been
              cultivating the rich soils of Ildamat, Kajiado—harvesting daily
              and moving produce through a cold-chain to Kenyan markets and
              export partners across the EU &amp; Middle East.
            </p>

            <div className="lgabout-ctaRow">
              <Link to="/products" className="lgabout-btn">
                View Products <FiArrowUpRight />
              </Link>
              <Link to="/contact" className="lgabout-ghost">
                Contact Us <FiArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="lgabout-heroBadge">
            <img src={Cert} alt="100% Natural Certified" />
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="lgabout-stats">
        <div className="container lgabout-statsGrid">
          <Stat icon={<FiClock />} kpi="3+ yrs" label="Growing with care" />
          <Stat icon={<FiTruck />} kpi="98%" label="Delivered within 24h" />
          <Stat icon={<FiGlobe />} kpi="30%" label="Export share" />
          <Stat icon={<FiShield />} kpi="100%" label="Traceable lots" />
        </div>
      </section>

      {/* ===== Who we are ===== */}
      <section className="lgabout-twoCol container">
        <figure className="lgabout-figure">
          <img src={Farmer} alt="Loosian grower with harvest crate" />
        </figure>

        <div className="lgabout-rich">
          <h2 className="h2">Who We Are</h2>
          <p className="muted">
            Loosian Grocers (Oloosuyian Farm Ltd) is a grower-packer based in
            Kajiado, Kenya. We harvest daily, grade with care, and maintain a
            refrigerated chain from field to market—so our partners receive
            produce at peak freshness and outstanding shelf life.
          </p>

          <ul className="lgabout-list">
            <li>
              <FiAward /> Kenya GAP-aligned practices &amp; strict quality
              checks
            </li>
            <li>
              <FiThermometer /> Cold-room handling and reefer transport
            </li>
            <li>
              <FiTruck /> Nairobi distribution &amp; regional export dispatch
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Sustainability pillars ===== */}
      <section className="lgabout-pillars">
        <div className="container">
          <header className="lgabout-head">
            <span className="lgabout-eyebrow">Sustainable Farming</span>
            <h2 className="h2">Our Growing Practices</h2>
            <p className="muted">
              We steward land and water responsibly while producing safe,
              delicious food for families and trade partners.
            </p>
          </header>

          <div className="lgabout-pillarGrid">
            <Pillar
              icon={<FiDroplet />}
              title="Water Conservation"
              text="Drip irrigation cuts water use by ~40% while improving plant health."
            />
            <Pillar
              icon={<FaRecycle />}
              title="Soil Health"
              text="Composting & crop rotation build organic matter and long-term fertility."
            />
            <Pillar
              icon={<FiShield />}
              title="IPM Pest Management"
              text="We prioritize monitoring and biological controls to minimize pesticide use."
            />
          </div>
        </div>
      </section>

      {/* ===== Story / Timeline ===== */}
      <section className="lgabout-story">
        <div className="container">
          <h2 className="h2">Our Story</h2>

          <ol className="lgabout-timeline" aria-label="Loosian timeline">
            <TimelineItem year="2022" title="Rooted in Ildamat, Kajiado">
              Began onion &amp; leafy greens production with a focus on safe,
              sustainable methods.
            </TimelineItem>

            <TimelineItem year="2023" title="Cold-Chain & Grading">
              Invested in insulated handling, grading standards and better farm
              logistics to shorten time to market.
            </TimelineItem>

            <TimelineItem year="2024" title="Export Ready">
              Achieved consistent export volumes (EU &amp; Middle East) with
              improved packaging and documentation.
            </TimelineItem>

            <TimelineItem year="2025" title="Scaling Responsibly">
              Expanding acreage &amp; contract grower network while targeting
              100% renewable energy within 3 years.
            </TimelineItem>
          </ol>
        </div>
      </section>

      {/* ===== Quality strip ===== */}
      <section className="lgabout-quality">
        <div className="container lgabout-qualityInner">
          <div className="lgabout-qcopy">
            <span className="lgabout-eyebrow">Quality &amp; Cold-Chain</span>
            <h3 className="h3">From Farm to Market—Handled Right</h3>
            <ul>
              <li>Daily harvest &amp; rapid pre-cooling</li>
              <li>Refrigerated transport to maintain freshness</li>
              <li>Graded, packed &amp; labeled with full traceability</li>
            </ul>
          </div>

          <img className="lgabout-qbadge" src={Cert} alt="Certified badge" />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="lgabout-cta">
        <div className="container lgabout-ctaInner">
          <div className="lgabout-ctaCopy">
            <span className="lgabout-eyebrow">Let’s work together</span>
            <h3 className="h3">
              Fresh Loosian produce—harvested daily, delivered fast.
            </h3>
          </div>

          <div className="lgabout-ctaActions">
            <Link to="/contact" className="lgabout-btn">
              Contact  <FiArrowUpRight />
            </Link>
            <Link to="/products" className="lgabout-ghost">
              Browse Products <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------- small helpers ------- */
function Stat({ icon, kpi, label }) {
  return (
    <div className="lgabout-stat">
      <span className="lgabout-statIcon">{icon}</span>
      <div>
        <strong className="lgabout-kpi">{kpi}</strong>
        <div className="muted">{label}</div>
      </div>
    </div>
  );
}

function Pillar({ icon, title, text }) {
  return (
    <article className="lgabout-pillar">
      <div className="lgabout-pillarIcon">{icon}</div>
      <h3 className="h4">{title}</h3>
      <p className="muted">{text}</p>
    </article>
  );
}

function TimelineItem({ year, title, children }) {
  return (
    <li className="lgabout-tlItem">
      <div className="lgabout-dot" aria-hidden="true" />
      <div className="lgabout-year">{year}</div>
      <div className="lgabout-tlBody">
        <h4 className="h4">{title}</h4>
        <p className="muted">{children}</p>
      </div>
    </li>
  );
}
