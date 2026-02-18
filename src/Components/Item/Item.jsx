import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Item = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;

    if (!current) return;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const items = [
    {
      id: 1,
      name: "Fresh Onion",
      price: 60,
      market: "Karwan Bazar",
      img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb",
    },
    {
      id: 2,
      name: "Red Tomato",
      price: 40,
      market: "New Market",
      img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
    },
    {
      id: 3,
      name: "Hilsa Fish",
      price: 1200,
      market: "Chandpur Market",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    },
    {
      id: 4,
      name: "Basmati Rice",
      price: 95,
      market: "Local Wholesale",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    },
    {
      id: 5,
      name: "Green Chili",
      price: 80,
      market: "Shyambazar",
      img: "/chili.avif",
    },
    {
      id: 6,
      name: "Fresh Carrot",
      price: 50,
      market: "Farm Market",
      img: "/carrot.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Featured & Popular Items
      </h1>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Most viewed and frequently updated market products
      </p>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[80%] sm:w-[45%] lg:w-[23%] flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-40 md:h-48 w-full object-cover rounded-t-2xl"
            />

            <div className="p-4 md:p-5">

              {/* 🔥 FIX: Added proper text color */}
              <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {item.name}
              </h2>

              <p className="text-green-600 font-bold mb-2 text-sm md:text-base">
                ৳{item.price} / kg
              </p>

              <span className="inline-block bg-green-100 text-green-700 text-xs md:text-sm px-3 py-1 rounded-full mb-4">
                {item.market}
              </span>

              <button className="w-full border border-green-600 text-green-600 py-2 rounded-lg text-sm md:text-base hover:bg-green-600 hover:text-white transition duration-300">
                View Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
