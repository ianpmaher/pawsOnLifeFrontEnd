import "./App.css";

import { useState } from "react";
import MapView from "./components/MapView/MapView";
import SearchForm from "./components/SearchForm/SearchForm";
import TrailList from "./components/TrailList/TrailList";

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [mapZoom, setMapZoom] = useState(15);
  const [searchResults, setSearchResults] = useState([]);

  // need to transfer funcation for search
  const handleSearch = (location) => {};

  // need to transfer map udpate after search
  const handleResultClick = (selectedPlaceId) => {};

  return (
    <div className="App">
      <h1>Find Hiking Trails Near You and Your Pet</h1>
      <SearchForm onSearch={handleSearch} />
      <MapView center={mapCenter} zoom={mapZoom} />
      <TrailList results={searchResults} onResultClick={handleResultClick} />
    </div>
  );
}

export default App;
