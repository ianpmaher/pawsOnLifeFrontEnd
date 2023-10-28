import Button from "../Button/Button"; //onclick of Search button use Geocoder to convert the address to a long and lat
//https://developers.google.com/maps/documentation/geocoding/requests-geocoding#geocoding-lookup
//https://github.com/googlemaps/js-samples/blob/b968b79e7ab580b723fbcdd7b3e9edd2370d30ee/dist/samples/places-placeid-geocoder/docs/index.js

const SearchHikingTrails = ({ address, setCoordinates, map }) => {
  const searchHikingTrails = () => {
    const geocoder = new window.google.maps.Geocoder();
    // Geocode the user-provided address to get its coordinates
    geocoder.geocode({ address: address }, (results, status) => {
      // if json returned from geocoder is successful and the value inside is OK change map center with found lat and long
      console.log(results);
      if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
        const bounds = results[0].geometry.location;
        setCoordinates(bounds);
        console.log(bounds);
        console.log(setCoordinates);
        console.log("Setting coordinates", bounds, " with address ", address);
        map.panTo(results[0].geometry.location);
      } else {
        console.log(status);
      }
    });
  };

  return <Button onClick={searchHikingTrails}>Search</Button>;
};
export default SearchHikingTrails;
