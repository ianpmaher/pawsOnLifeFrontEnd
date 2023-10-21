//onclick of Search button use Geocoder to convert the address to a long and lat
//https://developers.google.com/maps/documentation/geocoding/requests-geocoding#geocoding-lookup
//https://github.com/googlemaps/js-samples/blob/b968b79e7ab580b723fbcdd7b3e9edd2370d30ee/dist/samples/places-placeid-geocoder/docs/index.js
const SearchHikingTrails = ({ location, onSearchResults, isLoaded }) => {
  const searchHikingTrails = () => {
    const geocoder = new window.google.maps.Geocoder();
    // Geocode the user-provided location to get its coordinates
    geocoder.geocode({ address: location }, (results, status) => {
      // if json returned from geocoder is successful and the value inside is OK change map center with found lat and long
      if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
        const coordinates = results[0].geometry.location;
        // Initialize the map with the obtained coordinates
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: coordinates,
          zoom: 15,
        });
        // console.log(results);
        // console.log(coordinates);
        // now go back to the google places API to display nearby Hiking Trials
        // https://developers.google.com/maps/documentation/javascript/places#place_search_requests
        const service = new window.google.maps.places.PlacesService(map);
        const request = {
          query: "Hiking Trails",
          location: coordinates,
          fields: ["name", "geometry"],
        };
        // console.log(request);

        // need to update state with search results
        service.textSearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            onSearchResults(results);
          } else {
            onSearchResults([]);
          }
        });
      } else {
        onSearchResults([]);
      }
    });
  };
  return isLoaded ? <button onClick={searchHikingTrails}>Search</button> : <></>;
};
export default SearchHikingTrails;