import FooterUserTrails from "../../components/FooterUserTrails/FooterUserTrails";
import { useState, useEffect } from "react";
import MapView from "../../components/MapView/MapView";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchHikingTrails from "../../components/SearchHikingTrails/SearchHikingTrails";
import TrailList from "../../components/TrailList/TrailList";
import styled from "styled-components";
import { useLoadScript } from '@react-google-maps/api';

const MapsTrailsPageContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 0.5rem;
    background: var(--background-container-gradient);
    border-radius: 20px;
    padding: 0.5rem 5rem 10rem 5rem;
    max-width: 70vw;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 1rem 2rem 5rem 2rem;
    }
`
const FlexContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 4rem;
    justify-content: center;
    @media (max-width: 850px) {
        flex-flow: column wrap;
        gap: 1rem;
    }
`
const MapsTrailsTitleText = styled.h2`
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

  const placesLibrary = ['places'];

const MapsTrailsPage = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: placesLibrary
  })
  // need to store user input
  const [location, setLocation] = useState("");
  // need to store id of selected trail
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const [coordinates, setCoordinates] = useState([]);

  const [ map, setMap ] = useState(null);

  const [service, setService] = useState(null);

  useEffect( () => {
    if(selectedPlaceId){
      console.log("Location selected updated:", selectedPlaceId);
    if(map && selectedPlaceId) map.panTo(selectedPlaceId.geometry.location)
    }
    
  }, [selectedPlaceId, map, coordinates])

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
      <FooterUserTrails />
    </MapsTrailsPageContainer>
  );
}

export default MapsTrailsPage;