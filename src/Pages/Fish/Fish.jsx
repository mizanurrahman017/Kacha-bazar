import React from "react";

const Fish = () => {
  const items = [
    { id: 301, name: "Hilsa Fish", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", market: "KachaBazar Market", price: 1200 },
    { id: 302, name: "Rohu Fish", image: "/Rohu.jpg", market: "KachaBazar Market", price: 350 },
    { id: 303, name: "Chicken", image: "/chicken.webp", market: "KachaBazar Market", price: 220 },
    { id: 304, name: "Beef", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f", market: "KachaBazar Market", price: 750 },
  ];

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);

    if (existing) existing.quantity += 1;
    else cart.push({ ...item, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🐟 Fish & Meat</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.market}</p>
                <p className="text-red-600 font-bold">৳{item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
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
