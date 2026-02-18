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
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Latest Market News & Alerts
          </h1>
          <p className="text-gray-600 mt-1 text-sm md:text-base">
            Stay updated with daily market changes
          </p>
        </div>

        <FaBell className="text-green-600 text-2xl cursor-pointer hover:scale-110 transition" />
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl transition duration-300"
          >
            <h2 className="font-semibold text-gray-900 text-base md:text-lg mb-3 leading-snug">
              {item.title}
            </h2>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {item.description}
            </p>

            <span className="text-gray-500 text-xs">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMarket;
