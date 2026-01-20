// src/components/CategoryTabs.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Grocery",
    slug: "grocery",
    img: "/icons/grocery.png",
    subs: {
      All: ["All Items"],
      Staples: ["Rice", "Wheat", "Pulses"],
      Beverages: ["Tea", "Coffee", "Juices"],
    },
  },
  {
    name: "Clothing",
    slug: "clothing",
    img: "/icons/clothing.png",
    subs: {
      All: ["All Items"],
      Men: ["T-Shirts", "Shirts", "Jeans"],
      Women: ["Kurtis", "Dresses", "Tops"],
      Kids: ["Boys", "Girls"],
    },
  },
  {
    name: "Footwear",
    slug: "footwear",
    img: "/icons/footwear.png",
    subs: {
      All: ["All Items"],
      Men: ["Casual Shoes", "Formal Shoes"],
      Women: ["Flats", "Heels"],
      Kids: ["Boys", "Girls"],
    },
  },
  {
    name: "Jewellery",
    slug: "jewellery",
    img: "/icons/jewellery.png",
    subs: {
      All: ["All Items"],
      Types: ["Necklaces", "Rings", "Earrings"],
    },
  },
  {
    name: "Bags",
    slug: "bags",
    img: "/icons/bags.png",
    subs: {
      All: ["All Items"],
      Types: ["Handbags", "Backpacks", "Travel Bags"],
    },
  },
  {
    name: "Cosmetics",
    slug: "cosmetics",
    img: "/icons/cosmetics.png",
    subs: {
      All: ["All Items"],
      Makeup: ["Lipstick", "Foundation"],
      Skincare: ["Moisturizer", "Serum"],
    },
  },
  {
    name: "Books",
    slug: "books",
    img: "/icons/books.png",
    subs: {
      All: ["All Items"],
      Categories: ["Story", "Education", "Comics"],
    },
  },
];

export default function CategoryTabs() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-white shadow-sm"
      onMouseLeave={() => setActive(null)}
    >
      {/* CATEGORY BAR */}
      <div className="flex gap-6 px-6 py-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onMouseEnter={() => setActive(cat)}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className={`flex flex-col items-center cursor-pointer 
              w-20 p-2 rounded-xl transition
              ${
                active?.name === cat.name
                  ? "bg-green-100"
                  : "hover:bg-green-50"
              }`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-medium mt-1 text-center">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* MEGA DROPDOWN */}
      {active && (
        <div className="absolute left-0 top-full w-full bg-white border-t shadow-lg z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-4 gap-8">
            {Object.entries(active.subs).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-semibold text-sm mb-2">{title}</h4>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li
                      key={item}
                      onClick={() =>
                        navigate(
                          `/category/${active.slug}/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        )
                      }
                      className="text-sm cursor-pointer hover:text-green-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
