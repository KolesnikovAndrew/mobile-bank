import React, { useState } from "react";

import { Atm } from "../model/atms";

interface AtmCardProps {
  atm: Atm;
  handleWidtgetToggle: () => void;
}

const AtmCard: React.FC<AtmCardProps> = ({ atm, handleWidtgetToggle }) => {
  return (
    <div
      onClick={handleWidtgetToggle}
      className="p-2 cursor-pointer transition-colors hover:bg-blue-500 hover:text-white  border-b-blue "
    >
      <div>{atm.location}</div>
      <div>{atm.address}</div>
    </div>
  );
};

export default AtmCard;
