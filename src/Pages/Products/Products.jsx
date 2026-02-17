import React, { useState } from "react";
import { Link } from "react-router";

const productData = [
  {
    id: 1,
    name: "Potato",
    category: "Vegetable",
    market: "Karwan Bazar",
    price: 45,
    image: "/Potatoes.jpg",
  },
  {
    id: 2,
    name: "Onion",
    category: "Vegetable",
    market: "New Market",
    price: 60,
    image: "/onion.jpg",
  },
  {
    id: 3,
    name: "Hilsa Fish",
    category: "Fish",
    market: "Local Market",
    price: 1200,
    image: "/ilisha.jpg",
  },
  {
    id: 4,
    name: "Spring Onion",
    category: "Vegetable",
    market: "Karwan Bazar",
    price: 50,
    image: "/spring.jpg",
  },
  {
    id: 5,
    name: "Tomato",
    category: "Vegetable",
    market: "New Market",
    price: 55,
    image: "/tomatos.jpg",
  },
  {
    id: 6,
    name: "Carrot",
    category: "Vegetable",
    market: "Local Market",
    price: 40,
    image: "/carrot.jpg",
  },
  {
    id: 7,
    name: "Cabbage",
    category: "Vegetable",
    market: "Karwan Bazar",
    price: 35,
    image: "/cabbage.webp",
  },
  {
    id: 8,
    name: "Rohu Fish",
    category: "Fish",
    market: "New Market",
    price: 450,
    image: "/Rohu.jpg",
  },
  {
    id: 9,
    name: "Brinjal",
    category: "Vegetable",
    market: "Local Market",
    price: 65,
    image: "/Brinjal.jpg",
  },
  {
    id: 10,
    name: "Pumpkin",
    category: "Vegetable",
    market: "Karwan Bazar",
    price: 30,
    image: "/pumpkin.jpg",
  },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [market, setMarket] = useState("All");

  const filteredProducts = productData.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      (market === "All" || product.market === market)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-500 mt-2">
            Browse daily market prices of fresh products
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-10 flex flex-col md:flex-row gap-4">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fish">Fish</option>
          </select>

          <select
            onChange={(e) => setMarket(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="All">All Markets</option>
            <option value="Karwan Bazar">Karwan Bazar</option>
            <option value="New Market">New Market</option>
            <option value="Local Market">Local Market</option>
          </select>

          <input
            type="text"
            placeholder="Search product..."
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.market}</p>

                <p className="text-green-600 text-xl font-bold mt-3">
                  ৳{product.price}
                  <span className="text-sm font-medium text-gray-500">
                    {" "}
                    / kg
                  </span>
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
            Prev
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
            3
          </button>
          <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;
