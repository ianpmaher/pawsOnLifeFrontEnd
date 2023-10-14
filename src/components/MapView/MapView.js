import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import "dotenv/config";

const MapView = ({ center, zoom }) => {
  const { isLoaded, isNotLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY,
  });

  if (isNotLoaded) return "Error loading Google Maps";

  return (
    <div style={{ width: "50%", height: "400px" }}>
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={center}
          zoom={zoom}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MapView;
