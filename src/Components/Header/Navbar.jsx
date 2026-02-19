import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { ShoppingCart, Search, ChevronDown, Menu, X } from "lucide-react";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Load cart count from LocalStorage
  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = storedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();

    // Listen for storage changes (other tabs)
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-800 hover:text-green-600 transition";

  return (
    <div className="w-full relative z-50">

      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 md:px-6 flex justify-between items-center">
        <p className="hidden md:block">
          We are available 24/7, Need help? Call Us:
          <span className="text-green-400 font-semibold ml-2">+01234560352</span>
        </p>

        <div className="space-x-4 hidden md:flex">
          <NavLink to="/contact" className="hover:text-green-400">Contact Us</NavLink>
          <NavLink to="/account" className="hover:text-green-400">My Account</NavLink>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-4 md:px-6 py-4 flex items-center justify-between shadow-sm">

        {/* Logo */}
        <NavLink to="/" className="text-xl md:text-2xl font-bold text-green-600">
          Kacha<span className="text-black">Bazar</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium relative">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-gray-800 hover:text-green-600 transition"
            >
              Categories <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg w-48 z-50">
                <NavLink to="/category/fruits" className="block px-4 py-2 hover:bg-gray-100">Fresh Fruits</NavLink>
                <NavLink to="/category/vegetables" className="block px-4 py-2 hover:bg-gray-100">Vegetables</NavLink>
                <NavLink to="/category/fish" className="block px-4 py-2 hover:bg-gray-100">Fish & Meat</NavLink>
                <NavLink to="/category/dairy" className="block px-4 py-2 hover:bg-gray-100">Dairy & Bakery</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/products" className={navLinkStyle}>Products</NavLink>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none flex-1 text-sm text-gray-700"
          />
          <Search size={18} className="text-gray-500" />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <NavLink to="/cart" className="relative">
            <ShoppingCart size={22} className="text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>

          {user ? (
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hidden md:block hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="hidden md:block text-gray-800 hover:text-green-600 transition">
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white text-gray-800 shadow-md px-4 py-4 flex flex-col gap-3 font-medium">
          <NavLink to="/" onClick={() => setMobileMenu(false)} className="py-2 px-3 rounded-md hover:bg-gray-100 transition">Home</NavLink>
          <NavLink to="/products" onClick={() => setMobileMenu(false)} className="py-2 px-3 rounded-md hover:bg-gray-100 transition">Products</NavLink>
          <NavLink to="/category/fruits" onClick={() => setMobileMenu(false)} className="py-2 px-3 rounded-md hover:bg-gray-100 transition">Fresh Fruits</NavLink>
          <NavLink to="/category/vegetables" onClick={() => setMobileMenu(false)} className="py-2 px-3 rounded-md hover:bg-gray-100 transition">Vegetables</NavLink>
          <NavLink to="/category/fish" onClick={() => setMobileMenu(false)} className="py-2 px-3 rounded-md hover:bg-gray-100 transition">Fish & Meat</NavLink>
          <NavLink to="/category/dairy" onClick={() => setMobileMenu(false)} className="py-2 px-3 rounded-md hover:bg-gray-100 transition">Dairy & Bakery</NavLink>

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-2">
            <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-1 text-sm text-gray-700" />
            <Search size={18} className="text-gray-500" />
          </div>

          {user ? (
            <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mt-2">Logout</button>
          ) : (
            <NavLink to="/login" onClick={() => setMobileMenu(false)} className="block text-center bg-green-500 text-white py-2 rounded hover:bg-green-600 transition mt-2">Login</NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
