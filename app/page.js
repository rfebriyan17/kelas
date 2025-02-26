"use client";
import { useState } from "react";

export default function Kalkulator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Gunakan eval dengan hati-hati
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl w-96 text-white border-4 border-rgb border-opacity-50">
        <h1 className="text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Kalkulator siput
        </h1>
        
        <div className="bg-black p-3 rounded-lg text-right mb-3 text-xl shadow-lg font-mono tracking-wider">{input || "0"}</div>
        <div className="bg-gray-800 p-3 rounded-lg text-right mb-3 text-2xl font-bold shadow-lg">{result}</div>
        
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/"].map((item) => (
            <button key={item} className="btn" onClick={() => handleClick(item)}>{item}</button>
          ))}
          {["4", "5", "6", "*"].map((item) => (
            <button key={item} className="btn" onClick={() => handleClick(item)}>{item}</button>
          ))}
          {["1", "2", "3", "-"].map((item) => (
            <button key={item} className="btn" onClick={() => handleClick(item)}>{item}</button>
          ))}
          {["0", ".", "C", "+"].map((item) => (
            <button key={item} className={`btn ${item === "C" ? "bg-red-600" : ""}`} onClick={item === "C" ? handleClear : () => handleClick(item)}>
              {item}
            </button>
          ))}
          <button className="col-span-4 btn bg-green-500 text-white text-lg shadow-lg animate-pulse" onClick={handleCalculate}>=</button>
        </div>
      </div>

      <style jsx>{`
        .btn {
          padding: 18px;
          font-size: 1.5rem;
          background: linear-gradient(45deg, #ff00ff, #8000ff, #0044ff);
          color: white;
          border-radius: 10px;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 15px rgba(255, 0, 255, 0.4);
        }
        .btn:hover {
          background: linear-gradient(45deg, #ff1493, #9932cc, #00bfff);
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(255, 0, 255, 0.6);
        }
      `}</style>
    </div>
  );
}
