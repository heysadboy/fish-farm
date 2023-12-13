import React from "react";
import { ITank } from "../types";
import "../styles/FishTank.css";

interface FishTankProps {
  tank: ITank;
}

const FishTank: React.FC<FishTankProps> = ({ tank }) => {
  return (
    <div className="fish-tank-container">
      <div className="circular-border">
        <div className="image-container">
          <img
            className="ui small image"
            src={require(`../images/${tank.fish_image}`)}
            alt={tank.name}
          />
        </div>
        <p>{tank.species}</p>
        <p className="paramter-list">
          {tank.parameters.parameter_1} {tank.parameters.parameter_2} <br />
          {tank.parameters.parameter_3}
        </p>
      </div>
      <h3>
        {tank.name}&nbsp;&nbsp;
        <span className={`ui ${tank.status} empty circular label`} />
      </h3>
    </div>
  );
};

export default FishTank;
