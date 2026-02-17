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
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Latest Market News & Alerts
          </h1>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Stay updated with daily market changes
          </p>
        </div>

        <FaBell className="text-green-600 text-xl md:text-2xl cursor-pointer hover:scale-110 transition" />
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 bg-white hover:shadow-lg transition duration-300"
          >
            <h2 className="font-semibold text-base md:text-lg mb-2 break-words leading-snug">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
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
