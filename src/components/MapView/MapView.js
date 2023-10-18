import { useEffect } from "react";

const MapView = ({ selectedPlaceId, searchResults }) => {
  const updateMapForSelectedPlace = () => {
    if (selectedPlaceId !== null) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: searchResults[selectedPlaceId].geometry.location,
        zoom: 15,
      });
    }
  };

  useEffect(() => {
    updateMapForSelectedPlace();
  }, [selectedPlaceId, searchResults]);

  return <div id="map" style={{ height: "400px", width: "50%" }}></div>;
};

export default MapView;