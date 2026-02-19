import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleQuantity = (id, type) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: type==="inc"? item.quantity+1 : item.quantity>1? item.quantity-1:1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemove = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  const total = cart.reduce((acc, item) => acc + item.price*item.quantity,0);

  if(cart.length === 0) return <h1 className="text-center mt-12">Your cart is empty!</h1>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cart.map(item=>(
          <div key={item.id} className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded"/>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-green-600">৳{item.price}/kg</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>handleQuantity(item.id,"dec")} className="px-2 py-1 bg-gray-200 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>handleQuantity(item.id,"inc")} className="px-2 py-1 bg-gray-200 rounded">+</button>
              <button onClick={()=>handleRemove(item.id)} className="ml-2 text-red-500 font-semibold">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ৳{total}</h2>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
