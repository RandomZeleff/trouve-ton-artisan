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
import { ArtisanPage } from "./page/Artisan";
import Layout from "./components/layout";
import NotFound from "./page/NotFound";
import Legals from "./page/Legals";
import Cookies from "./page/Cookies";
import Accessibility from "./page/Accessibility";
import PersonalData from "./page/PersonalData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/artisans",
        element: <ArtisansPage />,
      },
      {
        path: "/artisans/:id",
        element: <ArtisanPage />,
      },
      {
        path: "/category/:id",
        element: <ArtisansPage />,
      },
      {
        path: "/legals",
        element: <Legals />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/accessibility",
        element: <Accessibility />,
      },
      {
        path: "/personal-data",
        element: <PersonalData />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
