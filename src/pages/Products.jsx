const products = [
  {
    id: 1,
    name: "Men Casual Shirt",
    price: "₹999",
    category: "Clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Tg4v3rKnMnesdE9l9cknQXwZggFsiSugjg&s"
  },
  {
    id: 2,
    name: "Women Dress",
    price: "₹900",
    category: "Clothing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_m-ITWZsKv2uKUxSqFmC-G223RBRAtbtXdg&s"
  },
  {
    id: 3,
    name: "Fresh Vegetables Pack",
    price: "₹200",
    category: "Grocery",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e"
  },
  {
    id: 4,
    name: "Organic Fruits Box",
    price: "₹200",
    category: "Grocery",
    img: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499"
  },
  {
    id: 5,
    name: "Gold Necklace",
    price: "₹25,999",
    category: "Jewels",
    img: "https://www.shutterstock.com/image-photo/bridal-jewellery-collection-real-22-260nw-2566616457.jpg"
  },
  {
    id: 6,
    name: "Diamond Ring",
    price: "₹15,999",
    category: "Jewels",
    img: "https://www.brilliance.com/cdn-cgi/image/f=webp,width=1440,height=1440,quality=90/sites/default/files/vue/collections/engagement-rings-diamond_og.jpg"
  }
];

function Products() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-48 w-full object-cover rounded-t"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {product.category}
              </p>

              <p className="text-xl font-bold mt-2">
                {product.price}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;
