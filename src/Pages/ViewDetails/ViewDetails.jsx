import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: "1",
      name: "Fresh Onion",
      price: 60,
      market: "Karwan Bazar",
      img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb",
      description: "Fresh organic onion from local farmers.",
    },
    {
      id: "2",
      name: "Red Tomato",
      price: 40,
      market: "New Market",
      img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
      description: "Fresh juicy tomato.",
    },
     {
      id: "3",
      name: "Hilsa Fish",
      price: 1200,
      market: "Chandpur Market",
      img: "/public/ilisha.jpg",
      description: "Fresh Hilsa Fish.",
    },
     {
      id: "4",
      name: "Basmati Rice",
      price: 95,
      market: "Local Wholesale",
      img: "/public/rise.jpg",
      description: "Fresh Basmati Rice.",
    },
     {
      id: "5",
      name: "Green Chili",
      price: 80,
      market: "Shyambazar",
      img: "/public/chili.avif",
      description: "Fresh Green Chili.",
    },
     {
      id: "6",
      name: "Fresh Carrot",
      price: 50,
      market: "Farm Market",
      img: "/public/carrot.jpg",
      description: "Fresh Fresh Carrot.",
    },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  // 🔥 Add To Cart Function
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + Number(quantity) }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        { ...product, quantity: Number(quantity) },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Product Added to Cart ✅");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-600 hover:underline"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-8">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-2xl text-green-600 font-bold mb-3">
            ৳{product.price} / kg
          </p>

          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
            {product.market}
          </span>

          <p className="mt-6 text-gray-600">{product.description}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-6">
            <span>Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 border rounded-lg px-3 py-1"
            />
          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
