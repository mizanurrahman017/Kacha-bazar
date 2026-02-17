import React from "react";

const FreshFruits = () => {
  const fruits = [
    {
      name: "Apple",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      market: "KachaBazar Market",
      price: "৳220 / kg",
    },
    {
      name: "Banana",
      image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8",
      market: "KachaBazar Market",
      price: "৳60 / dozen",
    },
    {
      name: "Orange",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
      market: "KachaBazar Market",
      price: "৳180 / kg",
    },
    {
      name: "Mango",
      image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed",
      market: "KachaBazar Market",
      price: "৳150 / kg",
    },
  ];

  const handleAddToCart = (fruit) => {
    alert(`${fruit.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-2">
          🍎 Fresh Fruits
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Seasonal and imported fruit prices
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fruits.map((fruit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">
                  {fruit.name}
                </h2>
                <p className="text-gray-500">{fruit.market}</p>
                <p className="text-green-600 font-bold mt-2">
                  {fruit.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(fruit)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
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

export default FreshFruits;
