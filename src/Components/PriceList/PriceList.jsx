import React, { useEffect, useState } from "react";

const PriceList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  // Fake API Fetch
  useEffect(() => {
    const fetchData = async () => {
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

      // simulate loading delay
      setTimeout(() => {
        setProducts(data);
      }, 800);
    };

    fetchData();
  }, []);

  // Filter
  let filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // Sort
  if (sortOption === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Live Price List</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Category Buttons */}
          <div className="flex gap-3 mb-6">
            {["all", "nearby", "popular"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium capitalize transition ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">Loading prices...</p>
          ) : (
            <div className="grid md:grid-cols-1 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 border"
                >
                  <h2 className="text-xl font-semibold mb-2">
                    {item.name}
                  </h2>

                  <p className="text-2xl font-bold text-green-600 mb-2">
                    ৳{item.price}
                  </p>

                  <p className="text-gray-600">
                    Market: <span className="font-medium">{item.market}</span>
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    Updated: {item.updated}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-64 bg-gray-100 p-5 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Filter & Sort</h2>

          <select
            className="w-full p-2 border rounded-lg"
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
