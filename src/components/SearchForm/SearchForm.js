const SearchForm = ({ location, setLocation, handleLocationChange }) => {
  // https://developers.google.com/maps/documentation/javascript/place-autocomplete
  let autocomplete;

  // source: https://www.youtube.com/watch?v=c3MjU9E9buQ&t=1s
  const initAutocomplete = () => {
    autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        componentRestrictions: { country: ["us"] },
        fields: ["place_id", "geometry", "name", "formatted_address"],
      }
    );

    autocomplete.addListener("place_changed", onPlaceChanged);
  };

  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      // user did not select a prediction: reset the input field
      document.getElementById("autocomplete").placeholder = `Enter a place`;
    } else {
      // display details about the valid place
      // document.getElementById("autocomplete").innerHTML = place.name;
      setLocation(place.formatted_address);
      console.log(place.formatted_address)
    }
  };

  initAutocomplete();

  return (
    <div id="search-container">
      <div id="search-form">
        <InputField
          type="text"
          id="autocomplete"
          placeholder="Enter Address"
          value={location}
          onChange={handleLocationChange}
          />
      </div>

    </div>
  );
};
export default SearchForm;