import React from "react";

const FreshFruits = () => {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      market: "KachaBazar Market",
      price: 220,
    },
    {
      id: 2,
      name: "Banana",
      image: "/banana.jpg",
      market: "KachaBazar Market",
      price: 60,
    },
    {
      id: 3,
      name: "Orange",
      image: "/orange.jpg",
      market: "KachaBazar Market",
      price: 180,
    },
    {
      id: 4,
      name: "Mango",
      image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed",
      market: "KachaBazar Market",
      price: 150,
    },
  ];

  const handleAddToCart = (fruit) => {
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    const existing = cart.find((item) => item.id === fruit.id);

    if (existing) {
      existing.quantity += 1; // increase quantity
    } else {
      cart.push({ ...fruit, quantity: 1 });
    }

    // Save cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify Navbar to update count
    window.dispatchEvent(new Event("storage"));

    alert(`${fruit.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2">
          🍎 Fresh Fruits
        </h1>
        <p className="text-center text-gray-700 mb-10 text-sm sm:text-base">
          Seasonal and imported fruit prices
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 break-words">
                  {fruit.name}
                </h2>

                <p className="text-gray-700 text-sm sm:text-base">{fruit.market}</p>

                <p className="text-green-600 font-bold mt-2">৳{fruit.price}</p>

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
