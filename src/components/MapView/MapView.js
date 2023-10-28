import { useEffect, useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

// Ian do styling things here
const ContainerStyle = styled.div`
  width: 400px;
  height: 400px;
`;

const mapStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 30.085925,
  lng: -94.099047,
};

const MapView = ({ map, setMap, isLoaded, coordinates, setService }) => {
  const onLoad = useCallback(
    function loadMap(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      console.log(bounds);
      setMap(map);
    },
    [setMap]
  );

  const onUnload = useCallback(
    function unLoad() {
      setMap(null);
    },
    [setMap]
  );

  const updateMap = useCallback(() => {
    console.log("Updating Map...");
    console.log(map);
    const newService = new window.google.maps.places.PlacesService(map);
    console.log(isLoaded, "Setting new service");
    setService(newService);
  }, [map, isLoaded, setService]);

  useEffect(() => {
    if (coordinates?.lat && typeof coordinates === "object") {
      console.log("Updating..");
      const bounds = new window.google.maps.LatLngBounds({
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      });
      console.log(coordinates.lat());
      console.log(coordinates.lng());
      map.fitBounds(bounds);
      setMap(map);
      updateMap();
    }
  }, [coordinates, setMap, map, updateMap]);

  return isLoaded ? (
    <ContainerStyle>
      <GoogleMap
        mapContainerStyle={mapStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnload}
      >
        {}
        <></>
      </GoogleMap>
    </ContainerStyle>
  ) : (
    <></>
  );
};

export default MapView;
