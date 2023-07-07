import React, { useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Atm } from "../../entities/atms/model/atms";
import Searchbar from "../../shared/ui/searchbar";
import AtmsList from "../../entities/atms/ui/atms";

interface AtmsSearchProps {
  atms: Atm[];
  handleWidtgetToggle: () => void;
}

const AtmsSearch: React.FC<AtmsSearchProps> = ({
  atms,
  handleWidtgetToggle,
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<Atm[]>([]);

  const handleSearch = (value: string) => {
    const filteredResults = atms.filter(
      (atm) =>
        atm.location.toLowerCase().includes(value.toLowerCase()) ||
        atm.address.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);

    setSearchText(value);
  };

  return (
    <div>
      <Searchbar
        placeholder="ATMs"
        value={searchText}
        onChange={handleSearch}
      />

      {searchText.length > 0 && (
        <div>
          <AtmsList
            handleWidtgetToggle={handleWidtgetToggle}
            atms={searchResults}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    atms: state.atm.atms,
  };
};

export default connect(mapStateToProps)(AtmsSearch);
