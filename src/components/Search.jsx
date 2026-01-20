import { useState } from "react";
import axios from "axios";

function Search({ setLocation }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    const res = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: query,
        format: "json",
        addressdetails: 1,
        limit: 5,
      },
    });
    setResults(res.data);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search place..."
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>

      <ul>
        {results.map((place) => (
          <li
            key={place.place_id}
            onClick={() => setLocation([parseFloat(place.lat), parseFloat(place.lon)])}
            className="cursor-pointer hover:bg-gray-200 p-1 rounded"
          >
            {place.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
