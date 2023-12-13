// SearchBox.tsx
import React, { useState } from "react";

type SearchBoxProps = {
  onSearch: (query: string) => void;
};

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
