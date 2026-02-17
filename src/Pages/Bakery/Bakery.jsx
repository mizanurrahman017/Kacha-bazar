import React from "react";

const Bakery = ({ addToCart }) => {
  const items = [
    {
      name: "Fresh Milk",
      image: "/milk.webp",
      market: "KachaBazar Market",
      price: "৳90 / litre",
    },
    {
      name: "Eggs (Dozen)",
      image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
      market: "KachaBazar Market",
      price: "৳140 / dozen",
    },
    {
      name: "White Bread",
      image: "/whitebread.webp",
      market: "KachaBazar Market",
      price: "৳60 / pack",
    },
    {
      name: "Butter",
      image: "/Butter.webp",
      market: "KachaBazar Market",
      price: "৳180 / pack",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-2">
          🥛 Dairy & Bakery
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Milk, eggs & bakery items price list
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
                <p className="text-blue-600 font-bold mt-2">
                  {item.price}
                </p>

                <button
                  onClick={() => addToCart && addToCart(item)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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

export default Bakery;
