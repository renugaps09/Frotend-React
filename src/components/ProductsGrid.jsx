const products = [
  {
    title: "Men T-Shirt",
    price: "₹499",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    title: "Smart Watch",
    price: "₹1,999",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Headphones",
    price: "₹2,499",
    img: "https://images.unsplash.com/photo-1518441902113-f28d5f4d9c4f",
  },
  {
    title: "Running Shoes",
    price: "₹3,299",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
      {products.map((p, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
          <img src={p.img} className="h-40 w-full object-cover mb-3" />
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-green-600 font-bold">{p.price}</p>
          <button className="mt-2 w-full bg-yellow-400 py-1 rounded hover:bg-yellow-500">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
