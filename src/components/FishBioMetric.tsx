import React from "react";
import { IBioMetric } from "../types";
import "../styles/FishBioMetrics.css";

interface FishBioMetricProps {
  biometric: IBioMetric;
}

const FishBioMetric: React.FC<FishBioMetricProps> = ({ biometric }) => {
  return (
    <div className="ui card fluid">
      <div className="biometric-container">
        <div className="biometric-image-container">
          <img
            className="ui small image"
            src={require(`../images/${biometric.fish_image}`)}
            alt={biometric.name}
          />
        </div>
        <div className="content">
          <div className="header">{biometric.name} </div>
          <div className="meta">
            {biometric.farm} <i className="map pin icon" />
            {biometric.location}
          </div>
          <div className="description">
            {biometric.species}
            <br />
            {biometric.info}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishBioMetric;
