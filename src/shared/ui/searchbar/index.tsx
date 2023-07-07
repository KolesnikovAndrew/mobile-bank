import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchbarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-280 bg-gray-200 rounded-lg p-2  inset-x-0 top-0 mx-auto">
      <FiSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="bg-transparent outline-none"
      />
    </div>
  );
};

export default Searchbar;
