import React, { useState } from "react";
import { Link } from "react-router";

const productData = [
  {
    id: 1,
    name: "Potato",
    category: "Vegetable",
    market: "Karwan Bazar",
    price: 45,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1582515073490-dc4d3c9c4e4b",
  },
  {
    id: 2,
    name: "Onion",
    category: "Vegetable",
    market: "New Market",
    price: 60,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
  },
  {
    id: 3,
    name: "Hilsa Fish",
    category: "Fish",
    market: "Local Market",
    price: 1200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [market, setMarket] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist(
      wishlist.includes(id)
        ? wishlist.filter((item) => item !== id)
        : [...wishlist, id]
    );
  };

  const filteredProducts = productData.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      (market === "All" || product.market === market)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-500 mb-6">
          Browse daily market prices of fresh products
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="All">All Categories</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fish">Fish</option>
          </select>

          <select
            onChange={(e) => setMarket(e.target.value)}
            className="border rounded-lg px-4 py-2"
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
            className="flex-1 border rounded-lg px-4 py-2"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 text-2xl"
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.market}</p>

                <p className="text-green-600 font-bold mt-2">
                  ৳{product.price} / kg
                </p>

                <p className="text-yellow-500 text-sm">
                  ⭐ {product.rating}
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
