import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import { initAnalytics } from "./analytics";
import App from "./App";
import {
    AboutPage,
    HomePage,
    NotFoundPage
} from "./pages";

initAnalytics();

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
