import React from "react";

const Fish = () => {
  const items = [
    {
      id: 1,
      name: "Hilsa Fish",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      market: "KachaBazar Market",
      price: 1200,
    },
    {
      id: 2,
      name: "Rohu Fish",
      image: "/Rohu.jpg",
      market: "KachaBazar Market",
      price: 350,
    },
    {
      id: 3,
      name: "Chicken",
      image: "/chicken.webp",
      market: "KachaBazar Market",
      price: 220,
    },
    {
      id: 4,
      name: "Beef",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
      market: "KachaBazar Market",
      price: 750,
    },
  ];

  const handleAddToCart = (item) => {
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    // Save cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify Navbar to update count
    window.dispatchEvent(new Event("storage"));

    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          🐟 Fish & Meat
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Fish & meat market price updates
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h2>

                <p className="text-gray-500">{item.market}</p>

                <p className="text-red-600 font-bold mt-2">৳{item.price}</p>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
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
