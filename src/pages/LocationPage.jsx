import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [position, setPosition] = useState([11.0168, 76.9558]); // Coimbatore
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=6`
      );
      const data = await res.json();
      setResults(data);
    };

    const delay = setTimeout(fetchData, 400);
    return () => clearTimeout(delay);
  }, [query]);

  const selectPlace = (place) => {
    localStorage.setItem("location", place.display_name);
    setPosition([place.lat, place.lon]);
    navigate("/");
  };

  const useCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await res.json();

      localStorage.setItem("location", data.display_name);
      navigate("/");
    });
  };

  return (
    <div className="h-screen flex">

      {/* LEFT PANEL */}
      <div className="w-[420px] flex flex-col border-r">

        {/* SEARCH + CURRENT LOCATION (STICKY) */}
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-lg font-semibold mb-3">
            Select Delivery Location
          </h2>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for area, street, city"
            className="w-full border px-3 py-2 rounded"
          />

          {/* ✅ CURRENT LOCATION BUTTON */}
          <button
            onClick={useCurrentLocation}
            className="mt-3 w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50"
          >
            📍 Use Current Location
          </button>
        </div>

        {/* SEARCH RESULTS */}
        <div className="flex-1 overflow-y-auto">
          {results.map((place) => (
            <div
              key={place.place_id}
              onClick={() => selectPlace(place)}
              className="p-3 border-b cursor-pointer hover:bg-gray-100 text-sm"
            >
              📍 {place.display_name}
            </div>
          ))}
        </div>
      </div>

      {/* MAP */}
      <div className="flex-1">
        <MapContainer
          center={position}
          zoom={15}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} />
        </MapContainer>
      </div>

    </div>
  );
}

export default LocationPage;
