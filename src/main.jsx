import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

import StaticPage from "./pages/Static/StaticPage.jsx";
import NotFound from "./pages/Static/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, // route-level error fallback
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },

      // Static full-height placeholders
      {
        path: "products",
        element: (
          <StaticPage
            emoji="🧅"
            kicker="Loosian Products"
            title="Fresh Onions, Greens & Herbs"
            subtitle="Page in progress"
            blurb="We’re finalizing product specs and pack sizes. Meanwhile, call us for bulk or export orders."
            primaryTo="/"
            primaryLabel="Back to Home"
            secondaryTo="/about"
            secondaryLabel="About Our Farm"
          />
        ),
      },
      {
        path: "quality",
        element: (
          <StaticPage
            emoji="✅"
            kicker="Quality Assurance"
            title="From farm to market"
            subtitle="Polishing this page"
            blurb="Daily harvests, cold-chain handling, and tight grading standards. Details coming soon."
          />
        ),
      },
      {
        path: "markets",
        element: (
          <StaticPage
            emoji="✈️"
            kicker="Markets"
            title="Serving Kenya & beyond"
            subtitle="Coming soon"
            blurb="Supplying Kajiado, Nairobi & more. Export-ready for EU & Middle East."
          />
        ),
      },
      {
        path: "sustainability",
        element: (
          <StaticPage
            emoji="🌱"
            kicker="Sustainability"
            title="Growing responsibly"
            subtitle="Coming soon"
            blurb="Water conservation, soil health, and IPM at the core — renewable energy in progress."
          />
        ),
      },
      {
        path: "testimonials",
        element: (
          <StaticPage
            emoji="💬"
            kicker="Testimonials"
            title="What our buyers say"
            subtitle="Coming soon"
            blurb="Stories from restaurants, retailers, and export partners."
          />
        ),
      },
      {
        path: "contact",
        element: (
          <StaticPage
            emoji="📞"
            kicker="Contact"
            title="Let’s talk"
            subtitle="Page in progress"
            blurb="Call +254 723 851 228 or email oloosuyianfarm@gmail.com — we’ll get back fast."
            primaryTo="/"
            primaryLabel="Back to Home"
            secondaryTo="/about"
            secondaryLabel="About Loosian"
          />
        ),
      },

      // Wildcard 404 within the layout
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
