import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Home";

// Import bootstrap style
import "bootstrap/dist/css/bootstrap.min.css";

// Import general style
import "./index.scss";
import { ArtisansPage } from "./page/Artisans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/artisans",
    element: <ArtisansPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
