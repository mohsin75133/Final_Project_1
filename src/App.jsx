import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const getMessage = () => {
    if (count > 5) return "You’ve gone above 5!";
    if (count < 0) return "You’re in negative!";
    return "Keep going!";
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">Interactive Counter</h1>
      <p className="text-center text-2xl">{count}</p>
      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => setCount(count + 1)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          Increase
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
        >
          Decrease
        </button>
        <button 
          onClick={() => setCount(0)} 
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"
        >
          Reset
        </button>
      </div>
      <p className="text-center text-gray-700 font-medium">{getMessage()}</p>
    </div>
  );
};

export default CounterApp;