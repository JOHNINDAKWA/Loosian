// src/App.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const location = useLocation();

  // Init once on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      offset: 80,
      once: true,
      mirror: false,
      startEvent: 'DOMContentLoaded',// makes sure it runs immediately
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  // Refresh animations on route change
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);


  
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
