import { Link, useRouteError } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  const err = useRouteError();
  return (
    <section className="fullpage">
      <div className="fullpage-shell">
        <div className="fullpage-icon" aria-hidden="true">🗺️</div>
        <div className="fullpage-kicker">404 • Not Found</div>
        <h1 className="fullpage-title">We couldn’t find that page</h1>
        <p className="fullpage-blurb">
          The link may be broken or the page may have moved.
          {err?.statusText ? ` (${err.statusText})` : ""}
        </p>
        <div className="fullpage-actions">
          <Link to="/" className="fp-btn"><FiHome /> Go Home</Link>
          <Link to="/about" className="fp-btn alt"><FiArrowLeft /> About Loosian</Link>
        </div>
      </div>
      <div className="fullpage-bloom" />
    </section>
  );
}
