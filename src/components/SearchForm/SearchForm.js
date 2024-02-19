import { Autocomplete, useLoadScript } from '@react-google-maps/api';

import SearchHikingTrails from "../../components/SearchHikingTrails/SearchHikingTrails";
import { useState } from 'react';

  const placesLibrary = ['places'];

const SearchForm = ({ location, setLocation, setCoordinates, map }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: placesLibrary
  })

  const [address, setAddress] = useState("");

  const onPlaceChanged = () => {
    console.log(location);
    if(location){
      const place = location.getPlace();
      const {formatted_address} = place;
      console.log(formatted_address);
      setAddress(formatted_address);
    }
  };


  const onLoad = (autocomplete) => {
    setLocation(autocomplete);
  }

  return isLoaded ? (
    <div id="search-container">
      <Autocomplete
        onPlaceChanged={onPlaceChanged}
        onLoad={onLoad}
      >
        <input className='input-area'></input>
      </Autocomplete>
      <SearchHikingTrails
        address={address}
        setCoordinates={setCoordinates}
        map={map}
      />
    </div>
  ) : <></>;
};
export default SearchForm;