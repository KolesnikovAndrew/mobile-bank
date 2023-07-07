import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
interface WidgetProps {
  onToggle: () => void;
}

const Widget: React.FC<WidgetProps> = ({ onToggle }) => {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 top-5% w-500px h-9/10 z-10 bg-gray-200 shadow-lg rounded-2xl flex flex-col p-5">
      <div className="flex justify-between items-center">
        <h2>Widget Title</h2>
        <button onClick={onToggle}>
          <FiX />
        </button>
      </div>
      <div>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
};

export default Widget;
