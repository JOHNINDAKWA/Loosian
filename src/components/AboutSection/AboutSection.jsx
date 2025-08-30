import "./AboutSection.css";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiPhone, FiArrowUpRight } from "react-icons/fi";

import Farmer from "../../assets/images/farmer-5.png";   // farmer holding crate
import CircleBG from "../../assets/images/farm.png";    // aerial/ag fields
import Inset from "../../assets/images/plants1.png";    // small round inset

import BranchTR from "../../assets/images/twig-1.svg";
import BranchBL from "../../assets/images/twig2.svg";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      {/* ornaments */}
      <img
        src={BranchTR}
        alt=""
        aria-hidden
        className="about__branch about__branch--tr"
      />
      <img
        src={BranchBL}
        alt=""
        aria-hidden
        className="about__branch about__branch--bl"
      
      />

      <div className="container about__inner">
        {/* MEDIA (left visuals) */}
        <div
          className="about__media"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* big circular background */}
          <div className="circle-bg" >
            <img src={CircleBG} alt="" />
          </div>

          {/* farmer in front */}
          <img
            src={Farmer}
            alt="Loosian farmer with fresh produce"
            className="farmer-fg"
          />

          {/* inset small circle */}
          <div
            className="circle-inset"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img src={Inset} alt="Loosian farm beds" />
          </div>
        </div>

        {/* COPY (right text) */}
        <div
          className="about__copy"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <span className="about__eyebrow">About Loosian</span>
          <h2 className="about__title">
            Kenya’s trusted source for fresh, certified produce.
          </h2>
          <p className="about__lead">
            Loosian Grocers (Oloosuyian Farm Ltd) grows onions, leafy greens,
            and fresh herbs in Ildamat, Kajiado. We harvest daily, maintain a
            cold chain with refrigerated transport, and deliver{" "}
            <strong>98% within 24 hours</strong> to the Kenyan market—while
            meeting export standards for the EU and Middle East.
          </p>

          <ul className="about__features">
            <li data-aos="fade-up" data-aos-delay="100">
              <FiCheckCircle /> Daily harvest & consistent grading
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <FiCheckCircle /> Refrigerated logistics end-to-end
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <FiCheckCircle /> Certified quality & traceability
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <FiCheckCircle /> Export-ready packing & documentation
            </li>
          </ul>

          <div className="about__stats">
            <div
              className="stat"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              <div className="ring"><span>98%</span></div>
              <p>Delivered within 24 hours</p>
            </div>
            <div
              className="stat"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <div className="ring"><span>30%</span></div>
              <p>Current export share</p>
            </div>
          </div>

          <div
            className="about__cta"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/about" className="btn">
              More About Us <FiArrowUpRight />
            </Link>
            <div className="phone">
              <span className="phone__icon"><FiPhone /></span>
              <div className="phone__text">
                <small>Phone:</small>
                <a href="tel:0723851228">0723 851 228</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
