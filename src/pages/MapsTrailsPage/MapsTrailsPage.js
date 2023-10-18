import FooterUserTrails from "../../components/FooterUserTrails/FooterUserTrails";
import { useState } from "react";
import MapView from "../../components/MapView/MapView";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchHikingTrails from "../../components/SearchHikingTrails/SearchHikingTrails";
import TrailList from "../../components/TrailList/TrailList";
import styled from "styled-components";

const MapsTrailsPage = (props) => {
  // need to store user input
  const [location, setLocation] = useState("");
  // need to hold the user searched address to find trail
  const [searchResults, setSearchResults] = useState([]);
  // need to store id of selected trail
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  // when user inputs address in input field handle event
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Find Hiking Trails Near You</h1>
      <SearchForm
        location={location}
        handleLocationChange={handleLocationChange}
      />
      <SearchHikingTrails
        location={location}
        onSearchResults={handleSearchResults}
      />
      <div className="result">
        <MapView
          selectedPlaceId={selectedPlaceId}
          searchResults={searchResults}
        />
        <TrailList
          searchResults={searchResults}
          setSelectedPlaceId={setSelectedPlaceId}
        />
      </div>
      <FooterUserTrails />
    </div>
  )
}

export default MapsTrailsPage;