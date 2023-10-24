import styled from "styled-components";

const UlTrail = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const TrailList = ({ searchResults, setSelectedPlaceId }) => {
  console.log(typeof searchResults);

  return (
    <div id="results">
      <UlTrail>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => setSelectedPlaceId(index)}>
            {result.name}
          </li>
        ))}
      </UlTrail>
      {searchResults.length === 0 && (
        <p>No hiking trails found near this location.</p>
      )}
    </div>
  );
};

export default TrailList;
