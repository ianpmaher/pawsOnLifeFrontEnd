const TrailList = ({ results, onResultClick }) => {
  return (
    <div id="results">
      {results.map((result) => (
        <p key={result.place_id}>
          <a
            href="#"
            onClick={() => onResultClick(result.place_id)}
            data-placeid={result.place_id}
          >
            {result.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default TrailList;
