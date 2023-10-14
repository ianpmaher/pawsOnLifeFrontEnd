import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div id="search-form">
      <input
        type="text"
        id="location"
        placeholder="Enter address"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
