import React from "react";

const MyAccount = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
          <p className="text-gray-500 mt-2">
            Manage your personal information and activities
          </p>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Profile Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
            <p><span className="font-medium text-gray-800">Name:</span>Mizanur rahman</p>
            <p><span className="font-medium text-gray-800">Email:</span>mizanasif1@gmail.com</p>
            <p><span className="font-medium text-gray-800">Role:</span> User</p>
            <p><span className="font-medium text-gray-800">Member Since:</span> Jan 2025</p>
          </div>
        </div>

        {/* Watchlist */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            My Watchlist
          </h2>
          <p className="text-gray-500">
            You have no items in your watchlist yet.
          </p>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            My Orders
          </h2>
          <p className="text-gray-500">
            You have not placed any orders yet.
          </p>
        </div>

        {/* Account Security */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            Account Security
          </h2>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default MyAccount;
