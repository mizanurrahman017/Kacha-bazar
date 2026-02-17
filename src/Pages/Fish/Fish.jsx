import React from "react";

const Fish = ({ addToCart }) => {
  const items = [
    {
      name: "Hilsa Fish",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      market: "KachaBazar Market",
      price: "৳1200 / kg",
    },
    {
      name: "Rohu Fish",
      image: "/Rohu.jpg",
      market: "KachaBazar Market",
      price: "৳350 / kg",
    },
    {
      name: "Chicken",
      image: "/chicken.webp",
      market: "KachaBazar Market",
      price: "৳220 / kg",
    },
    {
      name: "Beef",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
      market: "KachaBazar Market",
      price: "৳750 / kg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-2">
          🐟 Fish & Meat
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Fish & meat market price updates
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-500">{item.market}</p>
                <p className="text-red-600 font-bold mt-2">
                  {item.price}
                </p>

                <button
                  onClick={() => addToCart && addToCart(item)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Fish;
