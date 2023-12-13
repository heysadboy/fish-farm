import React from "react";
import FishBioMetric from "../components/FishBioMetric";
import { IBioMetric } from "../types";

const BioMetrics: React.FC = () => {
  const biometricData = require("../data/biometrics.json");
  return (
    <div className="ui container">
      <div className="ui list">
        {biometricData.map((biometric: IBioMetric) => {
          return <FishBioMetric biometric={biometric} />;
        })}
      </div>
    </div>
  );
};

export default BioMetrics;
