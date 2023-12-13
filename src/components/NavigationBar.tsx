import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="ui three item massive menu">
      <Link
        to="/"
        className={`item ${location.pathname === "/" ? "active" : ""}`}
      >
        Farms
      </Link>
      <Link
        to="/analytics"
        className={`item ${location.pathname === "/analytics" ? "active" : ""}`}
      >
        Analytics
      </Link>
      <Link
        to="/biometrics"
        className={`item ${
          location.pathname === "/biometrics" ? "active" : ""
        }`}
      >
        Biometrics
      </Link>
    </div>
  );
};

export default NavigationBar;
