import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
// import Products from "./pages/Products/Products.jsx";
// import Quality from "./pages/Quality/Quality.jsx";
// import Markets from "./pages/Markets/Markets.jsx";
// import Sustainability from "./pages/Sustainability/Sustainability.jsx";
// import Testimonials from "./pages/Testimonials/Testimonials.jsx";
// import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    //   { path: "products", element: <Products /> },
    //   { path: "quality", element: <Quality /> },
    //   { path: "markets", element: <Markets /> },
    //   { path: "sustainability", element: <Sustainability /> },
    //   { path: "testimonials", element: <Testimonials /> },
    //   { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
