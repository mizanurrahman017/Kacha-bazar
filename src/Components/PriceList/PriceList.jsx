import React, { useEffect, useState } from "react";

const PriceList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Tomato",
        price: 70,
        market: "Karwan Bazar",
        updated: "10 min ago",
        category: "popular",
      },
      {
        id: 2,
        name: "Onion",
        price: 60,
        market: "Jatrabari",
        updated: "15 min ago",
        category: "nearby",
      },
      {
        id: 3,
        name: "Potato",
        price: 30,
        market: "Mirpur",
        updated: "5 min ago",
        category: "popular",
      },
    ];

    setTimeout(() => {
      setProducts(data);
    }, 800);
  }, []);

  let filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  if (sortOption === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Live Price List
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["all", "nearby", "popular"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-sm md:text-base rounded-full font-medium capitalize transition ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white shadow"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center">Loading prices...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
                >
                  <h2 className="text-lg md:text-xl font-semibold mb-1">
                    {item.name}
                  </h2>

                  <p className="text-xl md:text-2xl font-bold text-green-600 mb-1">
                    ৳{item.price}
                  </p>

                  <p className="text-sm md:text-base text-gray-600">
                    Market: <span className="font-medium">{item.market}</span>
                  </p>

                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    Updated: {item.updated}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-64 bg-gray-100 p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3 text-center md:text-left">
            Filter & Sort
          </h2>

          <select
            className="w-full p-2 text-sm md:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
