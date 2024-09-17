"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";

const SelectionResult = () => {
  const [name, setName] = useState("");
  const [prn, setPrn] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // ... existing selectedCandidates array ...
  const selectedCandidates = [
    { name: "John Doe", prn: "12345" },
    { name: "Jane Smith", prn: "67890" },
    // Add more selected candidates here
  ];
  const handleCheck = () => {
    const isSelected = selectedCandidates.some(
      (candidate) =>
        candidate.name.toLowerCase() === name.toLowerCase() &&
        candidate.prn === prn
    );
    setResult(isSelected);
    if (isSelected) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Club Recruitment Results
        </h1>

        <div className="space-y-6 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />

          <input
            type="text"
            placeholder="Enter your PRN"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />

          <button
            onClick={handleCheck}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Check Result
          </button>
        </div>

        {result !== null && (
          <div
            className={`mt-6 p-6 rounded-lg ${
              result ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            <h2 className="text-2xl font-bold text-center mb-3">
              {result ? "Congratulations!" : "We're sorry"}
            </h2>
            <p className="text-center text-lg">
              {result
                ? "You have been selected to join our club!"
                : "You were not selected this time. Please try again next year."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionResult;
