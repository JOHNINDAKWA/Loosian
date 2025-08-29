import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

// Images
import Farmer1 from "../../assets/images/testimonial1.jpg"; // replace with yours
import Farmer2 from "../../assets/images/testimonial2.jpg";
import Farmer3 from "../../assets/images/testimonial3.jpg";

// tiny avatars (optional)
import Ava1 from "../../assets/images/testimonial1.jpg";
import Ava2 from "../../assets/images/testimonial2.jpg";
import Ava3 from "../../assets/images/testimonial3.jpg";

const TESTIMONIALS = [
  {
    id: 1,
    image: Farmer1,
    quote:
      "Loosian’s onions and herbs are consistently fresh and beautifully handled. The 24-hour delivery promise really shows.",
    name: "Beth",
    role: "Founder, Nash & Nat Ltd.",
    avatar: Ava1,
  },
  {
    id: 2,
    image: Farmer2,
    quote:
      "Quality and reliability are unmatched. Our kitchen teams love the greens — especially the kale packs.",
    name: "Edward",
    role: "CEO, KILM Holdings",
    avatar: Ava2,
  },
  {
    id: 3,
    image: Farmer3,
    quote:
      "Professional farm team, cold-chain logistics, and export readiness — Loosian is an excellent partner for us.",
    name: "S. Mugo",
    role: "Procurement Lead, Urban Deli",
    avatar: Ava3,
  },
];

export default function Testimonials() {
  return (
    <section className="lgtst" aria-label="Customer testimonials">
      <div className="container lgtst-wrap">
        {/* External nav buttons */}
        <button className="lgtst-nav lgtst-prev" aria-label="Previous testimonial">
          <FiChevronLeft />
        </button>
        <button className="lgtst-nav lgtst-next" aria-label="Next testimonial">
          <FiChevronRight />
        </button>

        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          speed={650}
          loop
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".lgtst-prev",
            nextEl: ".lgtst-next",
          }}
          className="lgtst-swiper"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <article className="lgtst-card">
                {/* Decorative circle in the top-left corner */}
                <div className="card-decoration-circle"></div>

                {/* Left: masked photo */}
                <figure className="lgtst-photo">
                  <div className="lgtst-image-bg">
                    <img src={t.image} alt={`${t.name} — testimonial`} />
                  </div>
                </figure>

                {/* Right: quote */}
                <div className="lgtst-quote">
                  <span className="lgtst-eyebrow">
                    <FaLeaf /> Our Testimonial
                  </span>
                  
                  <blockquote className="lgtst-text">
                    “{t.quote}”
                  </blockquote>
                  
                  <div className="lgtst-person">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="lgtst-avatar" />
                    ) : (
                      <div className="lgtst-avatar --placeholder" aria-hidden="true" />
                    )}
                    <div>
                      <strong>{t.name}</strong>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>

                {/* Quote icon on the bottom right */}
                <div className="quote-icon">
                  <span>”</span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
