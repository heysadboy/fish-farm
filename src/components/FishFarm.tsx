import React from "react";
import { ITank } from "../types";
import FishTank from "./FishTank";
import "../styles/FishFarm.css";

interface FishFarmProps {
  name: string;
  location: string;
  tanks: ITank[];
}

const FishFarm: React.FC<FishFarmProps> = ({ name, location, tanks }) => {
  return (
    <div className="farm-container">
      <div className="ui three column grid">
        {tanks.map((tank) => {
          return (
            <div key={tank.id} className="column">
              <FishTank tank={tank} />
            </div>
          );
        })}
      </div>
      <h3>
        {name} <i className="map pin icon" />
        {location}
      </h3>
    </div>
  );
};

export default FishFarm;
