import React from "react";
import Button from "../Button/Button";

const SearchHikingTrails = ({ location, onSearchResults }) => {
  const searchHikingTrails = () => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: location }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
        const coordinates = results[0].geometry.location;
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: coordinates,
          zoom: 15,
        });

        const service = new window.google.maps.places.PlacesService(map);

        const request = {
          query: "Hiking Trails",
          location: coordinates,
          fields: ["name", "geometry"],
        };

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

//   return <button onClick={searchHikingTrails}>Search</button>;
  return( 
    <div>
        <Button onClick={searchHikingTrails}>Search</Button>
    </div>
  );
};

export default SearchHikingTrails;