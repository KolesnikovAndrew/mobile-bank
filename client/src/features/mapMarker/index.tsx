import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MapMarker() {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 51.5074,
    lng: -0.1278,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
}

export default MapMarker;
