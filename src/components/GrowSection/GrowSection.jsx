import "./GrowSection.css";
import { Link } from "react-router-dom";
import { FiTrendingUp, FiClock, FiGlobe, FiArrowUpRight } from "react-icons/fi";

import ImgOnions from "../../assets/images/onions.jpg";
import ImgGreens from "../../assets/images/greens.jpg";
import ImgHerbs  from "../../assets/images/herbs.jpg";

export default function GrowSection() {
  return (
    <section
      className="grow"
      id="products-overview"
      aria-label="Loosian products overview"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container">

        {/* HEADER: left copy + right stats (same row) */}
        <div className="grow__head">
          <div
            className="grow__intro"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            <span className="eyebrow">What We Grow</span>
            <h2 className="h2">Currently We’re Growing and Supplying Premium Produce</h2>
            <p className="muted">
              Organically grown in Ildamat, Kajiado — harvested daily, graded with care,
              cold-chain handled and delivered fast to Kenyan markets and export partners.
            </p>
          </div>

          <div
            className="grow__stats"
            role="group"
            aria-label="Loosian statistics"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            <div className="stat" data-aos="zoom-in" data-aos-delay="120">
              <span className="stat__icon" aria-hidden><FiClock /></span>
              <div className="stat__text">
                <strong>98%</strong>
                <small>Satisfied <br />Clients</small>
              </div>
            </div>

            <div className="stat" data-aos="zoom-in" data-aos-delay="220">
              <span className="stat__icon" aria-hidden><FiGlobe /></span>
              <div className="stat__text">
                <strong>30%</strong>
                <small>Export <br /> Share</small>
              </div>
            </div>

            {/* <div className="stat" data-aos="zoom-in" data-aos-delay="320">
              <span className="stat__icon" aria-hidden><FiTrendingUp /></span>
              <div className="stat__text">
                <strong>34+</strong>
                <small>Expert <br />Farmers</small>
              </div>
            </div> */}
          </div>
        </div>

        {/* CARDS */}
        <div className="grow__grid">
          <ArticleCard
            title1="Freshly"
            title2="Picked Onions"
            tag="Vegetables"
            copy={[
              "Varieties: Red Coach & Neptune (50–80mm).",
              "Bag sizes: 10kg • 25kg • 50kg.",
            ]}
            img={ImgOnions}
            alt="Red onions packed for delivery"
            to="/products#onions"
            aos={{ type: "zoom-in-up", delay: 0 }}
          />

          <ArticleCard
            title1="Organic"
            title2="Greens"
            tag="Leafy"
            copy={[
              "Spinach, kale, lettuce — grown using organic methods. Kale in bunches or 250g / 500g packs.",
            ]}
            img={ImgGreens}
            alt="Fresh leafy greens assortment"
            to="/products#greens"
            aos={{ type: "zoom-in-up", delay: 120 }}
          />

          <ArticleCard
            title1="Aromatic"
            title2="Herbs"
            tag="Herbs"
            copy={[
              "Rosemary, thyme, basil, chives — fresh-cut.",
              "Retail: 50g / 100g. Bulk for commercial buyers.",
            ]}
            img={ImgHerbs}
            alt="Fresh herbs on a sorting table"
            to="/products#herbs"
            aos={{ type: "zoom-in-up", delay: 240 }}
          />
        </div>
      </div>
    </section>
  );
}

/* --------- Card component --------- */
function ArticleCard({ title1, title2, tag, copy, img, alt, to, aos = {} }) {
  const { type = "fade-up", delay = 0 } = aos;
  return (
    <article
      className="growCard"
      data-aos={type}
      data-aos-delay={delay}
      data-aos-anchor-placement="top-bottom"
    >
      <header className="growCard__head" data-aos="fade-up" data-aos-delay={delay + 60}>
        <h3 className="growCard__title">
          <span>{title1}</span> <span>{title2}</span>
        </h3>
        <p className="growCard__copy">
          {copy.map((line, i) => (
            <span key={i}>
              {line}{i < copy.length - 1 && <><br/></>}
            </span>
          ))}
        </p>
      </header>

      <figure className="growCard__media" data-aos="zoom-in" data-aos-delay={delay + 120}>
        <span className="chip">{tag}</span>
        <img src={img} alt={alt} loading="lazy" />
      </figure>

      <footer className="growCard__foot" data-aos="fade-up" data-aos-delay={delay + 180}>
        <Link className="ghost" to={to}>
          Learn more <FiArrowUpRight />
        </Link>
      </footer>
    </article>
  );
}
