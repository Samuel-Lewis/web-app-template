import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga4";
import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import App from "./App";
import {
  AboutPage,
  HomePage,
  NotFoundPage
} from "./pages";

try {
  ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
} catch (err) {
  console.error("GA initialization failed", err);
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
