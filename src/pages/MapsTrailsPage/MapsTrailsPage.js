// import FooterUserTrails from "../../components/FooterUserTrails/FooterUserTrails";
import { useState, useEffect } from "react";
import MapView from "../../components/MapView/MapView";
import SearchForm from "../../components/SearchForm/SearchForm";
import TrailList from "../../components/TrailList/TrailList";
import styled from "styled-components";
import { useLoadScript } from "@react-google-maps/api";

const MapsTrailsPageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  background-image: url("https://images.unsplash.com/photo-1526510335242-248dc3765086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: bottom;
  border-radius: 20px;
  padding: 1rem 5rem 10rem 5rem;
  max-width: 80vw;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 1rem 3rem 5rem 3rem;
    max-width: 80vw;
    background-color: var(--green-pretty-color);
    background-image: none;
    padding: 0rem 4rem;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 850px) {
    flex-flow: row nowrap;
    gap: 1.25rem;
  }
`;
const MapsTrailsTitleText = styled.h2`
  background: #386e9d;
  border-radius: 20px;
  max-width: 50%;
  margin: 0 auto;
  padding: 0.5rem;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        max-width: 100%;
        padding: 0.25rem;
  }
`;

const placesLibrary = ["places"];

const MapsTrailsPage = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: placesLibrary,
  });
  // need to store user input
  const [location, setLocation] = useState("");
  // need to store id of selected trail
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const [coordinates, setCoordinates] = useState([]);

  const [map, setMap] = useState(null);

  const [service, setService] = useState(null);

  useEffect(() => {
    if (selectedPlaceId) {
      console.log("Location selected updated:", selectedPlaceId);
      if (map && selectedPlaceId) map.panTo(selectedPlaceId.geometry.location);
    }
  }, [selectedPlaceId, map, coordinates]);

  return (
    <MapsTrailsPageContainer>
      <MapsTrailsTitleText>Find Hiking Trails Near You</MapsTrailsTitleText>
      <SearchForm
        location={location}
        setLocation={setLocation}
        setCoordinates={setCoordinates}
        map={map}
      />
      <div className="result">
        <FlexContainer>
          <MapView
            map={map}
            setMap={setMap}
            isLoaded={isLoaded}
            coordinates={coordinates}
            service={service}
            setService={setService}
          />
          <TrailList
            setSelectedPlaceId={setSelectedPlaceId}
            coordinates={coordinates}
            service={service}
          />
        </FlexContainer>
      </div>
      {/* <FooterUserTrails /> */}
    </MapsTrailsPageContainer>
  );
};

export default MapsTrailsPage;
