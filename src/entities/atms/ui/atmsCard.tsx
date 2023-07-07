import React, { useState } from "react";

import { Atm } from "../model/atms";

interface AtmCardProps {
  atm: Atm;
  handleWidtgetToggle: () => void;
}

const AtmCard: React.FC<AtmCardProps> = ({ atm, handleWidtgetToggle }) => {
  return (
    <div>
      <div
        onClick={handleWidtgetToggle}
        className="border rounded p-2 cursor-pointer transition-colors hover:bg-gray-200"
      >
        <div>{atm.location}</div>
        <div>{atm.address}</div>
      </div>
    </div>
  );
};

export default AtmCard;
