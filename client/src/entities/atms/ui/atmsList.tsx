import React from "react";
import { Atm } from "../model/atms";
import AtmCard from "./atmsCard";

interface AtmsListProps {
  atms: Atm[];
  handleWidtgetToggle: () => void;
}

const AtmsList: React.FC<AtmsListProps> = ({ atms, handleWidtgetToggle }) => {
  if (atms.length === 0) {
    return <div>No ATMs found</div>;
  }

  return (
    <div className="absolute rounded-b-lg bg-gray-100 -mt-1 w-full z-5 ">
      {atms.map((atm) => (
        <AtmCard
          key={atm.id}
          atm={atm}
          handleWidtgetToggle={handleWidtgetToggle}
        />
      ))}
    </div>
  );
};

export default AtmsList;
