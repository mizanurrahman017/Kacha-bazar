import React from "react";

const Vagetable = () => {
  const vegetables = [
    {
      id: 1,
      name: "Broccoli",
      image: "/broccoli.jpg",
      market: "Local Market",
      price: 120,
    },
    {
      id: 2,
      name: "Carrot",
      image: "https://images.unsplash.com/photo-1582515073490-39981397c445",
      market: "Local Market",
      price: 80,
    },
    {
      id: 3,
      name: "Tomato",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
      market: "Local Market",
      price: 100,
    },
    {
      id: 4,
      name: "Potato",
      image: "/Potatoes.jpg",
      market: "Local Market",
      price: 50,
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

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          🥦 Vegetables
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Daily fresh vegetable prices from local markets
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vegetables.map((item) => (
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
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.name}
                </h2>

                <p className="text-gray-500">{item.market}</p>

                <p className="text-green-600 font-bold mt-2">৳{item.price}</p>

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

export default Vagetable;
