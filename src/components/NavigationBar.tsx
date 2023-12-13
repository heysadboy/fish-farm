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
        to="/species"
        className={`item ${location.pathname === "/species" ? "active" : ""}`}
      >
        Species
      </Link>
    </div>
  );
};

export default NavigationBar;
