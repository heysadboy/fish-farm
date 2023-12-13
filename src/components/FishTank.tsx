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
        <img
          className="ui small image"
          src={require(`../images/${tank.fish_image}`)}
          alt={tank.name}
        />
      </div>
      <h3>{tank.name}</h3>
    </div>
  );
};

export default FishTank;
