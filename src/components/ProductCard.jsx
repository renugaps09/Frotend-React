function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded p-4 shadow">
      <img src={image} alt={name} className="h-40 w-full object-cover mb-3" />
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600">{price}</p>
      <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
