import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import {
  ShoppingCart,
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setMobileMenu(false);
  };

  return (
    <div className="w-full relative">

      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 md:px-6 flex justify-between items-center">
        <p className="hidden md:block">
          We are available 24/7, Need help? Call Us:
          <span className="text-green-400 font-semibold ml-2">
            +01234560352
          </span>
        </p>

        <div className="space-x-4 hidden md:flex">
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/account">My Account</NavLink>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-100 px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-xl md:text-2xl font-bold text-green-600">
          Kacha<span className="text-black">Bazer</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium relative">
          <NavLink to="/" className="hover:text-green-600">
            Home
          </NavLink>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-green-600"
            >
              Categories <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg w-52 z-50">
                <NavLink to="/category/fruits" className="block px-4 py-2 hover:bg-gray-100">
                  Fresh Fruits
                </NavLink>
                <NavLink to="/category/vegetables" className="block px-4 py-2 hover:bg-gray-100">
                  Vegetables
                </NavLink>
                <NavLink to="/category/fish" className="block px-4 py-2 hover:bg-gray-100">
                  Fish & Meat
                </NavLink>
                <NavLink to="/category/dairy" className="block px-4 py-2 hover:bg-gray-100">
                  Dairy & Bakery
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/products" className="hover:text-green-600">
            Products
          </NavLink>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-80 shadow-sm">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <Search size={18} className="text-gray-500" />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </div>

          {/* Auth */}
          {user ? (
            <button
              onClick={handleLogout}
              className="hidden md:block text-sm bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="hidden md:block hover:text-green-600"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* 🔥 Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[600px] py-6 px-4" : "max-h-0"
        }`}
      >
        <div className="space-y-6 font-medium">

          {/* Main Section */}
          <div className="space-y-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Main Menu
            </p>

            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className="block py-2 border-b hover:text-green-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setMobileMenu(false)}
              className="block py-2 border-b hover:text-green-600"
            >
              Products
            </NavLink>
          </div>

          {/* Categories Section */}
          <div className="space-y-3">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Categories
            </p>

            <NavLink
              to="/category/fruits"
              onClick={() => setMobileMenu(false)}
              className="block py-2 border-b hover:text-green-600"
            >
              🍎 Fresh Fruits
            </NavLink>

            <NavLink
              to="/category/vegetables"
              onClick={() => setMobileMenu(false)}
              className="block py-2 border-b hover:text-green-600"
            >
              🥦 Vegetables
            </NavLink>

            <NavLink
              to="/category/fish"
              onClick={() => setMobileMenu(false)}
              className="block py-2 border-b hover:text-green-600"
            >
              🐟 Fish & Meat
            </NavLink>

            <NavLink
              to="/category/dairy"
              onClick={() => setMobileMenu(false)}
              className="block py-2 border-b hover:text-green-600"
            >
              🥛 Dairy & Bakery
            </NavLink>
          </div>

          {/* Search */}
          <div>
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <Search size={18} />
            </div>
          </div>

          {/* Auth */}
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="block text-center bg-green-500 text-white py-2 rounded-lg"
              >
                Login
              </NavLink>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
