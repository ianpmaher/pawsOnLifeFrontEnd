import InputField from "../InputField/InputField";

const SearchForm = ({ location, handleLocationChange, searchHikingTrails }) => {
  return (
    <div id="search-container">
      <div id="search-form">
        <InputField
          type="text"
          id="location"
          placeholder="Enter your address"
          value={location}
          onChange={handleLocationChange}
          >
        </InputField>
      </div>
    </div>
  );
};

export default SearchForm;