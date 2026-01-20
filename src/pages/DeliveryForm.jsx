import { useState } from "react";
import Map from "../components/Map";
import axios from "axios";

function Search({ setLocation, query, setQuery, onClose }) {
  const [results, setResults] = useState([]);

  // Handle typing search input
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) return setResults([]);

    try {
      const res = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: { q: value, format: "json", addressdetails: 1, limit: 5 },
      });
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Use current location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setLocation([lat, lon]);

        try {
          const res = await axios.get("https://nominatim.openstreetmap.org/reverse", {
            params: { lat, lon, format: "json", addressdetails: 1 },
          });

          if (res.data?.address) {
            const addr = res.data.address;
            const name = [addr.city || addr.town || addr.village, addr.state, addr.country]
              .filter(Boolean)
              .join(", ");
            setQuery(name);
            setResults([]);
          }
        } catch (err) {
          console.error(err);
        }
      },
      (err) => alert("Unable to get location: " + err.message)
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-lg w-[400px] shadow-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">Your Location</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 font-bold">✕</button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search a new address"
          className="border p-2 rounded w-full mb-2"
        />

        {/* Suggestions + Current Location */}
        <ul className="max-h-60 overflow-y-auto rounded border">
          {results.map((place) => (
            <li
              key={place.place_id}
              onClick={() => {
                setLocation([parseFloat(place.lat), parseFloat(place.lon)]);
                setQuery(place.display_name);
                setResults([]);
              }}
              className="cursor-pointer hover:bg-gray-100 p-2"
            >
              {place.display_name}
            </li>
          ))}

          {/* Current Location button */}
          <li
            onClick={handleCurrentLocation}
            className="cursor-pointer hover:bg-gray-100 p-2 border-t flex justify-between items-center"
          >
            <span className="text-pink-600 font-medium">Use My Current Location</span>
            <button className="bg-pink-500 text-white px-3 py-1 rounded">Enable</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function DeliveryForm() {
  const [location, setLocation] = useState([20.5937, 78.9629]);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Delivery Address</h1>

      {/* Open Search Modal */}
      <button
        onClick={() => setShowSearch(true)}
        className="border p-2 rounded w-full text-left"
      >
        {query || "Select Delivery Location"}
      </button>

      {showSearch && (
        <Search
          setLocation={setLocation}
          query={query}
          setQuery={setQuery}
          onClose={() => setShowSearch(false)}
        />
      )}

      {/* Map */}
      <Map location={location} placeName={query} />

      {/* Form */}
      <form className="mt-4 space-y-2">
        <input type="text" placeholder="Full Name" className="border p-2 rounded w-full" />
        <input type="text" placeholder="Phone Number" className="border p-2 rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
