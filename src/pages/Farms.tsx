import React from "react";
import FishFarm from "../components/FishFarm";
import { IFarm } from "../types";

const Farms: React.FC = () => {
  let farmsData = require("../data/fish_tank.json");

  return (
    <div className="ui container">
      {farmsData.map((farm: IFarm) => {
        return (
          <FishFarm
            key={farm.id}
            name={farm.name}
            location={farm.location}
            tanks={farm.tanks}
          />
        );
      })}
    </div>
  );
};

export default Farms;
