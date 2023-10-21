import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import Button from "../Button/Button";
import { useState } from 'react';

  const placesLibrary = ['places'];

const SearchForm = ({ location, setLocation, setResults }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: placesLibrary
  })

  const [address, setAddress] = useState("");
  // https://developers.google.com/maps/documentation/javascript/place-autocomplete

  // source: https://www.youtube.com/watch?v=c3MjU9E9buQ&t=1s
  // const initAutocomplete = () => {
  //   if (isLoaded) {
  //     autocomplete = new window.google.maps.places.Autocomplete(
  //       document.getElementById("autocomplete"),
  //       {
  //         componentRestrictions: { country: ["us"] },
  //         fields: ["place_id", "geometry", "name", "formatted_address"],
  //       }
  //     );

  //     autocomplete.addListener("place_changed", onPlaceChanged);
  //   }

  // };

  const onPlaceChanged = () => {
    console.log(location);
    if(location){
      const place = location.getPlace();
      const {formatted_address} = place;
      console.log(formatted_address);
      setAddress(formatted_address);
    }
    // if (!place.geometry) {
    //   // user did not select a prediction: reset the input field
    //   document.getElementById("autocomplete").placeholder = `Enter a place`;
    // } else {
    //   // display details about the valid place
    //   // document.getElementById("autocomplete").innerHTML = place.name;
    //   setLocation(place);
    //   console.log(place)
    // }
  };

  const handleClick = (event) => {
    const place = event.target.parentNode.children[0].children[0].value;
    console.log(place);
    setResults(address);
  }

  const onLoad = (autocomplete) => {
    setLocation(autocomplete);
  }

  return isLoaded ? (
    <div id="search-container">
      <Autocomplete
        onPlaceChanged={onPlaceChanged}
        onLoad={onLoad}
      >
        <input></input>
      </Autocomplete>
      <Button onClick={handleClick}>Search Trails</Button>
    </div>
  ) : <></>;
};
export default SearchForm;