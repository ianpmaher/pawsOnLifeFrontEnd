import styled from "styled-components";
import { useState, useEffect } from "react";
import "./TrailList.css"
const UlTrail = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
`

const TrailList = ({ setSelectedPlaceId, service, coordinates }) => {
  
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const request = {
      location: coordinates,
      query: "Hiking Trails",
      fields: ["name", "geometry"],
    };

    if (service) {
      console.log("Updating service")
      service.textSearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setTrails(results);
          console.log(results)
        }
      })
    }
  }, [service])
  return (
    <div id="results">
      <UlTrail>
        {trails.length ? trails.map((result, index) => 
          <li key={index} onClick={() => setSelectedPlaceId(result)} className="trail-detail">
            {result.name}
          </li>
        ) : service && <li>No hiking trails found near this location.</li>}
      </UlTrail>
    </div>
  );
};

export default TrailList;