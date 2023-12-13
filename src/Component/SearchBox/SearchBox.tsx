
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
    <div>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search name"
      />
    </div>
  );
};

export default SearchBox;
