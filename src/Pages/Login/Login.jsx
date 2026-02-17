import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [emailForReset, setEmailForReset] = useState("");
  const [message, setMessage] = useState("");

  // 🔐 Email Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // 🔥 Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  // 🔐 Forgot Password
  const handleForgotPassword = async () => {
    if (!emailForReset) {
      setMessage("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, emailForReset);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* LEFT IMAGE SECTION */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="market"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">
              Local Market Tracker
            </h2>
            <p className="mt-2 text-sm opacity-90">
              Track daily prices with confidence
            </p>
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-green-700">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 font-medium hover:underline">
              Sign up
            </Link>
          </p>

          {message && (
            <p className="mt-4 text-sm text-red-500 bg-red-50 p-2 rounded">
              {message}
            </p>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmailForReset(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-green-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
            >
              Log in
            </button>

          </form>

          {/* Divider */}
          <div className="my-6 border-t"></div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            Continue with Google
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            Track prices. Make smart decisions.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
