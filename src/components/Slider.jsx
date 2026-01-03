import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://staticassets.oxfam.org.uk/oxfamgb-production/images/Blog_What_to_do_with_your_old_clo.2e16d0ba.fill-1280x720.jpg",
    title: "Latest Fashion Trends",
    desc: "Discover stylish clothing for men & women",
    button: "Shop Clothing"
  },
  {
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    title: "Fresh Grocery Everyday",
    desc: "Best quality groceries at best price",
    button: "Shop Grocery"
  },
  {
    img: "https://pngadgilandsons.com/wp-content/uploads/2025/07/Collection-Banner.jpg",
    title: "Premium Jewelry Collection",
    desc: "Elegant designs for every occasion",
    button: "Shop Jewels"
  }
];

function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-6">

      {/* Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt="banner"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-12 text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          {slides[current].title}
        </h1>
        <p className="mb-6 text-lg">
          {slides[current].desc}
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 font-semibold rounded hover:bg-yellow-500">
          {slides[current].button}
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 text-2xl"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 text-2xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
