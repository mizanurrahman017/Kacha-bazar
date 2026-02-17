import React from "react";

const Vagetable = ({ addToCart }) => {
  const vegetables = [
    {
      name: "Broccoli",
      image: "/broccoli.jpg",
      market: "Local Market",
      price: "৳120 / kg",
    },
    {
      name: "Carrot",
      image: "https://images.unsplash.com/photo-1582515073490-39981397c445",
      market: "Local Market",
      price: "৳80 / kg",
    },
    {
      name: "Tomato",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
      market: "Local Market",
      price: "৳100 / kg",
    },
    {
      name: "Potato",
      image: "/Potatoes.jpg",
      market: "Local Market",
      price: "৳50 / kg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-2">
          🥦 Vegetables
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Daily fresh vegetable prices from local markets
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vegetables.map((item, index) => (
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
                <p className="text-green-600 font-bold mt-2">
                  {item.price}
                </p>

                <button
                  onClick={addToCart}
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

export default Vagetable;
