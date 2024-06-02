import React, { useState } from "react";

const DecimalFinder = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [position, setPosition] = useState("");
  const [result, setResult] = useState(null);

  const findDecimal = () => {
    try {
      let numerator = parseInt(a);
      const denominator = parseInt(b);
      const pos = parseInt(position);
      let decimalDigit = "";

      for (let i = 0; i < pos; i++) {
        numerator = (numerator % denominator) * 10;
        decimalDigit = Math.floor(numerator / denominator);
      }

      setResult(decimalDigit.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-200 flex flex-col items-center justify-center">
      <div className="w-4/5 max-w-lg p-4 bg-white shadow-md rounded">
        <h1 className="text-2xl mb-4">Decimal Finder</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Value of a:</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Value of b:</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Decimal Position:</label>
          <input
            type="number"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={findDecimal}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Find Decimal
        </button>
        {result !== null && (
          <div className="mt-4">
            <h2 className="text-xl">Result: {result}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecimalFinder;
