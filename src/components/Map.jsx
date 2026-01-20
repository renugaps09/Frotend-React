import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Recenter({ location }) {
  const map = useMap();
  map.setView(location, map.getZoom());
  return null;
}

function Map({ location, placeName }) {
  return (
    <MapContainer
      center={location || [20.5937, 78.9629]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={location || [20.5937, 78.9629]}>
        <Popup>{placeName || "Selected Location"}</Popup>
      </Marker>
      <Recenter location={location || [20.5937, 78.9629]} />
    </MapContainer>
  );
}

export default Map;
