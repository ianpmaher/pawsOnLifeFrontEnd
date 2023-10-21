import { useEffect, useState, useCallback } from "react";
import { GoogleMap } from '@react-google-maps/api';
import styled from "styled-components";

// Ian do styling things here
const ContainerStyle = styled.div`
  width: 400px;
  height: 400px;
`;

const mapStyle = {
  width: '400px',
  height: '400px'
}

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapView = ({ selectedPlaceId, searchResults, isLoaded }) => {

  const [ map, setMap ] = useState(null);

  const onLoad = useCallback( function loadMap(map){
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds)
    console.log(bounds)
    setMap(map);
  }, []);

  const onUnload = useCallback( function unLoad(map){
    setMap(null);
  }, []);

  useEffect(() => {
    console.log("Map should update here")

    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds)
    // console.log(bounds)
    // setMap(map);

  }, [selectedPlaceId, searchResults]);

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
  ) : <></>;
};

export default MapView;