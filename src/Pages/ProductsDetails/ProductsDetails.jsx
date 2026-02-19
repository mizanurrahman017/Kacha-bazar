import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

// Sample products
const products = [
  { id:1,name:"Potato",price:30,market:"Karwan Bazar",img:"/Potatoes.jpg",description:"Fresh potatoes." },
  { id:2,name:"Onion",price:60,market:"Karwan Bazar",img:"/onion.jpg",description:"Fresh onions." },
  { id:3,name:"Hilsa Fish",price:1200,market:"Chandpur Market",img:"/ilisha.jpg",description:"Fresh Hilsa fish." },
  { id:4,name:"Spring Onion",price:50,market:"Local Market",img:"/spring.jpg",description:"Fresh spring onions." },
  { id:5,name:"Tomato",price:40,market:"New Market",img:"/tomatos.jpg",description:"Ripe red tomatoes." },
  { id:6,name:"Carrot",price:50,market:"Farm Market",img:"/carrot.jpg",description:"Fresh carrots." },
  { id:7,name:"Cabbage",price:35,market:"Shyambazar",img:"/cabbage.webp",description:"Fresh cabbage." },
  { id:8,name:"Rohu Fish",price:500,market:"Chandpur Market",img:"/Rohu.jpg",description:"Fresh Rohu fish." },
  { id:9,name:"Brinjal",price:45,market:"Shyambazar",img:"/Brinjal.jpg",description:"Fresh brinjal." },
  { id:10,name:"Pumpkin",price:60,market:"Local Market",img:"/pumpkin.jpg",description:"Fresh pumpkin." },
];

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if(!product) return <h1>Product not found!</h1>;

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = storedCart.find(item => item.id === product.id);

    if(existing){
      const updated = storedCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updated));
    } else {
      storedCart.push({...product, quantity});
      localStorage.setItem("cart", JSON.stringify(storedCart));
    }

    // trigger Navbar update
    window.dispatchEvent(new Event("storage"));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <button onClick={()=>navigate(-1)} className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">← Back</button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.img} alt={product.name} className="w-full h-96 object-cover rounded-2xl shadow-md"/>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          <p className="text-green-600 font-bold text-xl md:text-2xl">৳{product.price}/kg</p>
          <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">{product.market}</span>
          <p className="text-gray-700 mt-4">{product.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <button onClick={()=>setQuantity(q=>q>1?q-1:1)} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">-</button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button onClick={()=>setQuantity(q=>q+1)} className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">+</button>
          </div>

          <button onClick={handleAddToCart} className="mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
