import "./App.css";

import { useState } from "react";

import MapView from "./components/MapView/MapView";
import SearchForm from "./components/SearchForm/SearchForm";
import TrailList from "./components/TrailList/TrailList";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  const handleSearch = (location) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
        const coordinates = results[0].geometry.location;
        setMapCenter({ lat: coordinates.lat(), lng: coordinates.lng() });
        searchHikingTrails(coordinates);
      } else {
        console.error("Location not found. Please try a different address.");
        setSearchResults([]);
      }
    });
  };

  const searchHikingTrails = (coordinates) => {
    const service = new window.google.maps.places.PlacesService(
      new window.google.maps.Map(document.getElementById("map"))
    );
    const request = {
      query: "Hiking Trails",
      location: coordinates,
      fields: ["name", "geometry"],
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSearchResults(results);
      } else {
        console.error("No hiking trails found near this location.");
        setSearchResults([]);
      }
    });
  };

  const handleResultClick = (placeId) => {
    updateMapForSelectedPlace(placeId);
  };

  const updateMapForSelectedPlace = (selectedPlaceId) => {
    const placesService = new window.google.maps.places.PlacesService(
      new window.google.maps.Map(document.getElementById("map"))
    );
    placesService.getDetails(
      {
        placeId: selectedPlaceId,
      },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setMapCenter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      }
    );
  };

  return (
    <div className="App">
      <h1>Find Hiking Trails Near You</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="result">
        <TrailList results={searchResults} onResultClick={handleResultClick} />
        <MapView center={mapCenter} zoom={15} />
      </div>
    </div>
  );
}
export default App;
