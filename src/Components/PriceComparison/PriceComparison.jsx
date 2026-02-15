import React, { useState } from "react";

const PriceComparison = () => {
  const data = {
    Onion: [
      { market: "Karwan Bazar", price: 60 },
      { market: "Jatrabari", price: 65 },
      { market: "Mirpur", price: 62 },
    ],
    Tomato: [
      { market: "Karwan Bazar", price: 70 },
      { market: "Jatrabari", price: 75 },
      { market: "Mirpur", price: 72 },
    ],
    Potato: [
      { market: "Karwan Bazar", price: 30 },
      { market: "Jatrabari", price: 35 },
      { market: "Mirpur", price: 32 },
    ],
  };

  const [selectedProduct, setSelectedProduct] = useState("Onion");

  const prices = data[selectedProduct];
  const maxPrice = Math.max(...prices.map((item) => item.price));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">Price Comparison</h1>
      <p className="text-gray-500 mb-8">
        Compare prices across different local markets
      </p>

      {/* Dropdown */}
      <div className="mb-8">
        <label className="block mb-2 font-medium">Select Product</label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-64 p-2 border rounded-lg"
        >
          {Object.keys(data).map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      {/* Price Bars */}
      <div className="space-y-6">
        {prices.map((item, index) => {
          const widthPercentage = (item.price / maxPrice) * 100;

          return (
            <div key={index}>
              <div className="flex justify-between mb-2 font-medium">
                <span>{item.market}</span>
                <span>৳{item.price} / kg</span>
              </div>

              <div className="w-full bg-gray-300 h-4 rounded-full">
                <div
                  className="bg-green-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${widthPercentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceComparison;
