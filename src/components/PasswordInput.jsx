import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({ placeholder, value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}          // ✅ ADD THIS
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-2.5 text-gray-500"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
