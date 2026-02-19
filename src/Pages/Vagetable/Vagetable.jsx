import React from "react";

const Vagetable = () => {
  const vegetables = [
    { id: 201, name: "Broccoli", img: "/broccoli.jpg", market: "Local Market", price: 120 },
    { id: 202, name: "Carrot", img: "https://images.unsplash.com/photo-1582515073490-39981397c445", market: "Local Market", price: 80 },
    { id: 203, name: "Tomato", img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337", market: "Local Market", price: 100 },
    { id: 204, name: "Potato", img: "/Potatoes.jpg", market: "Local Market", price: 50 },
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
        <h1 className="text-3xl font-bold text-center mb-8">🥦 Vegetables</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vegetables.map((item) => (
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

export default Vagetable;
