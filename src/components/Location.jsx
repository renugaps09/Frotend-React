import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

/* Fix marker icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FlyTo({ position }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 17);
  }, [position]);
  return null;
}

function Location() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [position, setPosition] = useState([11.0168, 76.9558]);
  const [address, setAddress] = useState(
    localStorage.getItem("location") || "Select Location"
  );

  /* SEARCH */
  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=6`
      );
      setResults(await res.json());
    };

    const t = setTimeout(fetchData, 400);
    return () => clearTimeout(t);
  }, [query]);

  const selectPlace = (p) => {
    setPosition([+p.lat, +p.lon]);
    setAddress(p.display_name);
    setQuery("");
    setResults([]);
  };

  const onDragEnd = async (e) => {
    const { lat, lng } = e.target.getLatLng();
    setPosition([lat, lng]);

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18`
    );
    const data = await res.json();
    setAddress(data.display_name);
  };

  const save = () => {
    localStorage.setItem("location", address);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-gray-700"
      >
        📍 {address.slice(0, 30)}...
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white w-[420px] rounded-lg shadow-lg overflow-hidden">

            {/* HEADER */}
            <div className="p-3 border-b font-semibold">
              Select delivery location
            </div>

            {/* SEARCH */}
            <div className="p-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search area, street, landmark"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            {/* RESULTS (NOT OVER MAP) */}
            {results.length > 0 && (
              <div className="max-h-40 overflow-y-auto border-t border-b">
                {results.map((p) => (
                  <div
                    key={p.place_id}
                    onClick={() => selectPlace(p)}
                    className="p-3 text-sm cursor-pointer hover:bg-gray-100"
                  >
                    📍 {p.display_name}
                  </div>
                ))}
              </div>
            )}

            {/* MAP */}
            <MapContainer
              center={position}
              zoom={17}
              className="h-[240px] w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={position}
                draggable
                eventHandlers={{ dragend: onDragEnd }}
              />
              <FlyTo position={position} />
            </MapContainer>

            {/* ADDRESS */}
            <div className="p-3 text-sm text-gray-700 border-t">
              <b>📍 Selected:</b>
              <div>{address}</div>
            </div>

            {/* ACTION */}
            <div className="p-3">
              <button
                onClick={save}
                className="w-full bg-green-600 text-white py-2 rounded"
              >
                Confirm location
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Location;
