import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiExternalLink, FiPhone } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // visual states
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [revealing, setRevealing] = useState(false);

  // scroll bookkeeping
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const lastDir = useRef("down"); // "up" | "down"
  const upDistance = useRef(0);
  const revealTimeoutRef = useRef(null);

  // lock body when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const dir = goingDown ? "down" : "up";

      setStuck(y > 80);

      if (dir !== lastDir.current) {
        lastDir.current = dir;
        upDistance.current = 0;

        if (dir === "up") {
          if (!hidden) setHidden(true);
          if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
        }
      } else {
        if (dir === "up") {
          upDistance.current += lastY.current - y; // positive while going up
          const REVEAL_AFTER_PX = 64;

          if (hidden && upDistance.current > REVEAL_AFTER_PX) {
            setHidden(false);
            setRevealing(true);
            if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
            revealTimeoutRef.current = setTimeout(() => setRevealing(false), 520);
          }
        } else {
          if (y > 140 && !hidden) setHidden(true);
        }
      }

      lastY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
    };
  }, [hidden]);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["/", "Home"],
    ["/about", "About"],
    ["/products", "Products"],
    ["/quality", "Quality"],
    ["/markets", "Markets"],
    ["/contact", "Contact"],
  ];

  return (
    <>
      <header
        className={[
          "site-header",
          stuck ? "is-stuck" : "",
          hidden ? "is-hidden" : "",
          revealing ? "is-revealing" : "",
        ].join(" ")}
      >
        <div className="container header-shell">
          {/* Brand (top header pill) */}
          <Link className="brand" to="/" aria-label="Loosian Grocers home">
            <span className="brand-dock" aria-hidden="true" />
            <span className="logo-badge">
              <img src={logo} alt="Loosian Grocers" />
            </span>
          </Link>

          <nav className="nav">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="right">
            <Link to="/contact" className="cta">
              <FiPhone />
              <span>Let’s Talk</span>
              <FiExternalLink className="arrow" />
            </Link>

            <button
              className="icon-btn hamburger"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="drawer-header">
          <Link className="brand" to="/" onClick={closeMenu}>
            {/* hide the dock in drawer; keep markup for consistency */}
            <span className="brand-dock sm" aria-hidden="true" />
            {/* BIG SQUARE LOGO IN DRAWER */}
            <span className="logo-badge square">
              <img src={logo} alt="Loosian Grocers" />
            </span>
            {/* <span className="brand-title">Loosian <br /> Grocers</span> */}
          </Link>
          <button
            className="icon-btn close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <FiX />
          </button>
        </div>

        {/* (optional) space for search if you add it later */}
        <div className="drawer-search" />

        <ul className="drawer-nav">
          {navItems.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CLEAN PILL CTA (no giant card) */}
        <Link to="/contact" className="drawer-cta" onClick={closeMenu}>
          <FiPhone />
          <span>Let’s Talk</span>
          <FiExternalLink className="arrow" />
        </Link>
      </div>

      <div className={`backdrop ${menuOpen ? "open" : ""}`} onClick={closeMenu} />
    </>
  );
}
