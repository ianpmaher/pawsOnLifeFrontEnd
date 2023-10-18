const SearchForm = ({ location, handleLocationChange, searchHikingTrails }) => {
  return (
    <div id="search-container">
      <div id="search-form">
        <input
          type="text"
          id="location"
          placeholder="Enter your address"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
};

export default SearchForm;