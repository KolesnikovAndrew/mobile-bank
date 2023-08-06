import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { Atm } from "../../entities/atms/model/atms";
import Searchbar from "../../shared/ui/searchbar";
import AtmsList from "../../entities/atms/ui/atmsList";

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
  const [searchResultOpened, setSearchResultOpen] = useState(false);

  const searchResultRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    const filteredResults = atms.filter(
      (atm) =>
        atm.location.toLowerCase().includes(value.toLowerCase()) ||
        atm.address.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
    setSearchText(value);
  };

  const handleSearchbarClick = () => {
    if (searchResults.length > 0) {
      setSearchResultOpen(true);
    }
  };

  useEffect(() => {
    setSearchResultOpen(searchText.length > 0);
  }, [searchText]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target as Node)
      ) {
        setSearchResultOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchResultRef}>
      <Searchbar
        placeholder="ATMs"
        value={searchText}
        onChange={handleSearch}
        onClick={handleSearchbarClick}
      />
      {searchResultOpened && (
        <AtmsList
          handleWidtgetToggle={handleWidtgetToggle}
          atms={searchResults}
        />
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
