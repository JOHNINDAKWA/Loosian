import "./Hero.css";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { FiClock, FiArrowUpRight } from "react-icons/fi";

import Farmer from "../../assets/images/farmer-4.png";
import Certification from "../../assets/images/imgi_8_certification.png";
import BackgroundImage from "../../assets/images/imgi_136_image-35.jpeg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ "--hero-image": `url(${BackgroundImage})` }}
      aria-label="Loosian Grocers — fresh produce from Kajiado"
    >
      {/* Desktop stamp */}
      <img
        src={Certification}
        alt="100% Natural — Certified"
        className="hero__stamp hero__stamp--desktop"
        loading="eager"
        data-aos="fade-left"
        data-aos-delay="250"
      />

      <div className="container hero__inner">
        {/* LEFT COPY */}
        <div className="hero__copy" data-aos="fade-up" data-aos-delay="0">
          <span className="hero__kicker" data-aos="fade-down" data-aos-delay="50">
            Fresh • Quality • Certified
          </span>

          <h1 className="hero__title" data-aos="fade-up" data-aos-delay="120">
            Loosian Grocers &amp; Exporters
          </h1>

          <p className="hero__subtitle" data-aos="fade-up" data-aos-delay="200">
            Grown in Ildamat, Kajiado by Oloosuyian Farm Ltd. We harvest onions, greens,
            and fresh herbs daily, move them in refrigerated transport, and deliver
            <strong> 98% within 24 hours</strong>.
          </p>

          <div className="hero__ctas" data-aos="fade-up" data-aos-delay="280">
            <Link to="/products" className="btn hero__btn">
              View Our Products <FiArrowUpRight />
            </Link>
            <Link to="/contact" className="btn outline hero__btn--outline">
              Contact Us <FiArrowUpRight />
            </Link>
          </div>

          <ul className="hero__points">
            <li data-aos="fade-up" data-aos-delay="320"><FaLeaf /> Red Coach &amp; Neptune onions</li>
            <li data-aos="fade-up" data-aos-delay="360"><FiClock /> Daily harvest, 24-hour delivery</li>
            <li data-aos="fade-up" data-aos-delay="400"><FaLeaf /> EU &amp; Middle East export ready</li>
          </ul>

          {/* Mobile stamp */}
          <img
            src={Certification}
            alt="100% Natural — Certified"
            className="hero__stamp--mobile"
            loading="eager"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>

        {/* RIGHT VISUALS */}
        <div className="hero__visual" >
          <img
            src={Farmer}
            alt="Farmer holding fresh produce"
            className="hero__farmer2"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
