import React from "react";
import { FaBell } from "react-icons/fa";

const LatestMarket = () => {
  const news = [
    {
      id: 1,
      title: "Onion prices increased by 10 BDT",
      description:
        "The price of onions has risen across major local markets today.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Tomato prices dropped slightly",
      description:
        "A small decrease in tomato prices has been observed in city markets.",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Fish prices remain stable",
      description:
        "No major changes in fish prices compared to yesterday.",
      time: "Today",
    },
    {
      id: 4,
      title: "Rice prices expected to rise",
      description:
        "Suppliers indicate a possible increase in rice prices next week.",
      time: "Today",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">
            Latest Market News & Alerts
          </h1>
          <p className="text-gray-500 mt-2">
            Stay updated with daily market changes
          </p>
        </div>

        {/* Bell Icon */}
        <FaBell className="text-green-600 text-2xl cursor-pointer hover:scale-110 transition" />
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-6 bg-white hover:shadow-lg transition duration-300"
          >
            <h2 className="font-semibold text-lg mb-3">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              {item.description}
            </p>

            <span className="text-gray-400 text-xs">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMarket;
