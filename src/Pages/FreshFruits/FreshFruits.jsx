import React from "react";

const FreshFruits = () => {
  const fruits = [
    {
      id: 101,
      name: "Apple",
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      market: "KachaBazar Market",
      price: 220,
    },
    {
      id: 102,
      name: "Banana",
      img: "/banana.jpg",
      market: "KachaBazar Market",
      price: 60,
    },
    {
      id: 103,
      name: "Orange",
      img: "/orange.jpg",
      market: "KachaBazar Market",
      price: 180,
    },
    {
      id: 104,
      name: "Mango",
      img: "https://images.unsplash.com/photo-1591073113125-e46713c829ed",
      market: "KachaBazar Market",
      price: 150,
    },
  ];

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    alert(`${item.name} added to cart 🛒`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🍎 Fresh Fruits</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fruits.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.market}</p>
                <p className="text-green-600 font-bold">৳{item.price}</p>
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

export default FreshFruits;
