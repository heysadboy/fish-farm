import React from "react";
import Graph from "../components/Graph";
import "../styles/Analytics.css";

const Analytics: React.FC = () => {
  return (
    <div className="ui container">
      <div className="ui two column grid">
        <div className="column">
          <div className="analytics-info">
            With its extended, biologically diverse coastline and centuries-long
            fishing traditions, Norway has tremendous expertise in aquaculture
            and fisheries which the country is applying in technology
            development. Glitne has developed sustainable, land-based fish farms
            for halibut.
          </div>
        </div>
        <div className="column">
          <div className="live-info">
            <h3>Live Statistics</h3>
            <p>
              <i className="check icon" /> 245679 Fishes Registered
              <br />
              <i className="heartbeat icon"></i>
              3452 Fishes Treated
              <br />
              <i className="x icon"></i>
              4987 Fishes Extracted
            </p>
          </div>
        </div>
      </div>
      <Graph />
    </div>
  );
};

export default Analytics;
