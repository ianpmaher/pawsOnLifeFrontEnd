const TrailList = ({ searchResults, setSelectedPlaceId }) => {
  return (
    <div id="results">
      <ul>
        {searchResults.map((result, index) => (
          <li key={index} onClick={() => setSelectedPlaceId(index)}>
            {result.name}
          </li>
        ))}
      </ul>
      {searchResults.length === 0 && (
        <p>No hiking trails found near this location.</p>
      )}
    </div>
  );
};

export default TrailList;