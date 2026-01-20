function Banner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg"
        className="w-full h-full object-cover"
        alt="offer"
      />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Optional text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">Special Offer!</h1>
        <p className="mt-2 text-lg md:text-xl">Get 50% off on selected items</p>
      </div>
    </div>
  );
}

export default Banner;
