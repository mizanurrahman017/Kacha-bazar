import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { ShoppingCart, Search, ChevronDown } from "lucide-react";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔥 user detect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="w-full">

      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-sm py-2 px-6 flex justify-between">
        <p>
          We are available 24/7, Need help? Call Us:{" "}
          <span className="text-green-400 font-semibold">
            +01234560352
          </span>
        </p>

        <div className="space-x-6 hidden md:flex">
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/account">My Account</NavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-green-600">
          Kacha<span className="text-black">Bazer</span>
        </NavLink>

        {/* Menu */}
        <div className="flex items-center space-x-6 font-medium relative">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          {/* Categories */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-green-600"
            >
              Categories <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg w-48 overflow-hidden z-50">
                <NavLink
                  to="/category/fruits"
                  className="block px-4 py-3 hover:bg-gray-100 border-b"
                >
                  Fresh Fruits
                </NavLink>
                <NavLink
                  to="/category/vegetables"
                  className="block px-4 py-3 hover:bg-gray-100 border-b"
                >
                  Vegetables
                </NavLink>
                <NavLink
                  to="/category/fish"
                  className="block px-4 py-3 hover:bg-gray-100 border-b"
                >
                  Fish & Meat
                </NavLink>
                <NavLink
                  to="/category/dairy"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Dairy & Bakery
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "hover:text-green-600"
            }
          >
            Products
          </NavLink>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-96 shadow-sm">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <Search size={18} className="text-gray-500" />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5">

          {/* Cart */}
          <div className="relative">
            <ShoppingCart size={22} className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>

          {/* 🔥 User Section */}
          {user ? (
            <div className="flex items-center gap-3">

              <span className="hidden md:block font-medium">
                {user.displayName || "User"}
              </span>

              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-green-500"
              />

              <button
                onClick={handleLogout}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>

            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="font-medium hover:text-green-600"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="border border-green-500 text-green-600 px-4 py-1 rounded-full hover:bg-green-500 hover:text-white transition"
              >
                Register
              </NavLink>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
