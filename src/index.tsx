import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { initAnalytics } from "./analytics";
import App from "./App";
import { AboutPage, ErrorPage, HomePage } from "./pages";
import { Link } from "./types";

initAnalytics();

const routes: Link[] = [
  { link: "/", label: "Home", component: <HomePage /> },
  { link: "/about", label: "About", component: <AboutPage /> },
  { link: "*", label: "Error", component: <ErrorPage />, hide: true },
];

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App links={routes} />}>
          {routes.map(({ link, component }) => (
            <Route key={link} path={link} element={component} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
