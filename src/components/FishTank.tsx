import React from "react";

interface FishTankProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FishTank: React.FC<FishTankProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="item">
      <div
        className="ui raised circular segment"
        style={{ width: "200px", height: "200px" }}
      />

      <div >
        <div className="header">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default FishTank;
