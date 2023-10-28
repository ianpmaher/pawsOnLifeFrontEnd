import styled from "styled-components";
import { useState, useEffect } from "react";
import "./TrailList.css";
import ModalFun from '../ModalFun/ModalFun';
import ShowReviews from "../ShowReviews/ShowReviews";
const UlTrail = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
`;

const ModalStyled = {
    margin: "0 auto",
}

const TrailList = ({ setSelectedPlaceId, service, coordinates }) => {
  const [trails, setTrails] = useState([]);

  const [modal, setModal] = useState(false);

  const handleSelect = (result) => {
    setModal(result.place_id);
    setSelectedPlaceId(result);
  }

  const handleBlur = (event) => {
    setModal(null);
  }

  useEffect(() => {
    const request = {
      location: coordinates,
      query: "Hiking Trails",
      fields: ["name", "geometry"],
    };

    if (service) {
      console.log("Updating service");
      service.textSearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setTrails(results);
          console.log(results);
        }
      });
    }
  }, [service]);
  return (
    <div id="results">
      <UlTrail>
        {trails.length ? trails.map((result, index) => 
          <li key={index} >
            <span onClick={() => handleSelect(result)} onBlur={handleBlur} className="trail-detail">
            {result.name}</span> {(modal===result.place_id) && <ModalFun id="more-info" title="More Info" style={ModalStyled} content={<ShowReviews id={result.place_id}/>}>More Info</ModalFun>}
          </li>
        ) : service && <li>No hiking trails found near this location.</li>}
      </UlTrail>
    </div>
  );
};

export default TrailList;
