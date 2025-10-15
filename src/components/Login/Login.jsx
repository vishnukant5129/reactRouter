import React, { useState } from 'react';

const Vishnu = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitButton = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      console.log("Username:", userName);
      console.log("Password:", password);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <form 
        onSubmit={submitButton} 
        className="backdrop-blur-md bg-white/30 shadow-2xl rounded-2xl p-8 w-[350px] border border-white/20"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-md">
          Welcome to Login Page
        </h1>

        <label className="block text-white font-semibold mb-2">Username</label>
        <input
          className="border border-gray-300 w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-white font-semibold mb-2">Password</label>
        <input
          className="border border-gray-300 w-full p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full py-2 text-lg text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-700/50"
        >
          Submit
        </button>
        {/* 🔹 Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg mt-4 animate-pulse text-center">
            ⚠️ Please fill in both fields
          </div>
        )}
      </form>
    </div>
  );
}

export default Vishnu;
