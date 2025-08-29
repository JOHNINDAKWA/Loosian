import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiHome } from "react-icons/fi";

export default function StaticPage({
  emoji = "🌿",
  kicker = "Loosian",
  title = "Polishing this page",
  subtitle = "Coming soon",
  blurb = "We’re crafting this experience. Check back shortly.",
  primaryTo = "/",
  primaryLabel = "Back to Home",
  secondaryTo = "/about",
  secondaryLabel = "About Loosian",
}) {
  return (
    <section className="fullpage">
      <div className="fullpage-shell">
        <div className="fullpage-icon" aria-hidden="true">{emoji}</div>

        <div className="fullpage-kicker">{kicker}</div>
        <h1 className="fullpage-title">
          {title} <span className="fullpage-subtle">— {subtitle}</span>
        </h1>

        <p className="fullpage-blurb">{blurb}</p>

        <div className="fullpage-actions">
          <Link to={primaryTo} className="fp-btn">
            <FiHome /> {primaryLabel}
          </Link>
          <Link to={secondaryTo} className="fp-btn alt">
            {secondaryLabel} <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* subtle bottom flourish */}
      <div className="fullpage-bloom" />
    </section>
  );
}
