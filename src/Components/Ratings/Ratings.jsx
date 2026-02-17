import React, { useState, useEffect } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews"));
    if (saved) setReviews(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = () => {
    if (!name || rating === 0 || !review.trim()) {
      alert("Fill all fields!");
      return;
    }

    if (editId) {
      const updated = reviews.map((r) =>
        r.id === editId ? { ...r, name, rating, review } : r
      );
      setReviews(updated);
      setEditId(null);
    } else {
      const newReview = {
        id: Date.now(),
        name,
        rating,
        review,
      };
      setReviews([newReview, ...reviews]);
    }

    setName("");
    setRating(0);
    setReview("");
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name);
    setRating(item.rating);
    setReview(item.review);
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, item) => acc + item.rating, 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  const getPercentage = (star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    return reviews.length ? (count / reviews.length) * 100 : 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-5 md:p-8">

        {/* Responsive Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 break-words">
          Community Ratings & Reviews
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm md:text-base">
          ⭐ {averageRating} ({reviews.length} reviews)
        </p>

        {/* Rating Breakdown */}
        <div className="mb-6">
          {[5,4,3,2,1].map((star) => (
            <div key={star} className="flex items-center mb-1 text-sm">
              <span className="w-8">{star}★</span>
              <div className="flex-1 bg-gray-200 h-2 rounded mx-2">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{ width: `${getPercentage(star)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-green-400 outline-none"
        />

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={index}
                className={`text-2xl md:text-3xl cursor-pointer transition ${
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            );
          })}
        </div>

        {/* Review Textarea with Clear Border */}
        <textarea
          placeholder="Write your feedback..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="4"
          className="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none resize-none"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          {editId ? "Update Review" : "Submit Review"}
        </button>

        {/* Reviews List */}
        <div className="mt-8 space-y-4">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold break-words">{item.name}</h4>
                <div className="text-yellow-400 text-sm">
                  {"★".repeat(item.rating)}
                  <span className="text-gray-300">
                    {"★".repeat(5 - item.rating)}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mt-2 text-sm break-words">
                {item.review}
              </p>

              <div className="mt-3 flex gap-3 text-sm">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Ratings;
