import "./SearchBox.scss";

import React, { useState } from "react";

type SearchBoxProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
