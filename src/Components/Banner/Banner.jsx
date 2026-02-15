import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    title: "Live KachaBazer Price Tracker",
    desc: "Check today’s latest market prices instantly",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    title: "Fresh Market Updates",
    desc: "Real-time vegetable, fish, and meat prices",
  },
  {
    id: 3,
    image: "/public/Fish.jpg",
    title: "Smart Shopping Decisions",
    desc: "Decide when to buy with accurate price insights",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 second পর slide change হবে

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Bottom Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-green-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
