import React from "react";
import { ArrowUp, ArrowDown, Search, Star } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Top Price Increase",
    desc: "Onion +৳10",
    icon: <ArrowUp className="text-green-500 w-6 h-6" />,
  },
  {
    id: 2,
    title: "Top Price Drop",
    desc: "Tomato −৳8",
    icon: <ArrowDown className="text-red-500 w-6 h-6" />,
  },
  {
    id: 3,
    title: "Most Searched Product",
    desc: "Potato",
    icon: <Search className="text-blue-500 w-6 h-6" />,
  },
  {
    id: 4,
    title: "Best Deal Product",
    desc: "Green Chili",
    icon: <Star className="text-yellow-500 w-6 h-6" />,
  },
];

const Highlights = () => {
  return (
    <div className="py-10 px-6 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Today’s Market Highlights
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-60 hover:shadow-lg transition"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
