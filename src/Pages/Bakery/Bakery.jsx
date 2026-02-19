import React from "react";

const Bakery = () => {
  const items = [
    {
      id: 1,
      name: "Fresh Milk",
      image: "/milk.webp",
      market: "KachaBazar Market",
      price: 90,
    },
    {
      id: 2,
      name: "Eggs (Dozen)",
      image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
      market: "KachaBazar Market",
      price: 140,
    },
    {
      id: 3,
      name: "White Bread",
      image: "/whitebread.webp",
      market: "KachaBazar Market",
      price: 60,
    },
    {
      id: 4,
      name: "Butter",
      image: "/Butter.webp",
      market: "KachaBazar Market",
      price: 180,
    },
  ];

  const handleAddToCart = (item) => {
    // Load cart from LocalStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item exists
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    // Save cart back to LocalStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify Navbar to update count
    window.dispatchEvent(new Event("storage"));

    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2 break-words">
          🥛 Dairy & Bakery
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-10 break-words">
          Milk, eggs & bakery items price list
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 break-words">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base break-words">
                  {item.market}
                </p>
                <p className="text-blue-600 font-bold mt-2 text-base sm:text-lg break-words">
                  ৳{item.price}
                </p>

                <button
                  onClick={() => handleAddToCart(item)}
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

export default Bakery;
