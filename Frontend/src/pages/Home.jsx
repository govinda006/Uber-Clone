import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-100 to-white px-5 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="w-full flex justify-between items-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className="w-24"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
        <Link
          to="/user-login"
          className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-900 transition-all"
        >
          Logout
        </Link>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, Captain 🚗
        </h1>
        <p className="text-gray-600">Your next ride is just around the corner.</p>
      </motion.div>

      {/* Map or Main View Section */}
      <motion.div
        className="mt-10 bg-gradient-to-r from-gray-200 to-gray-300 w-full max-w-3xl h-[50vh] rounded-xl shadow-inner flex items-center justify-center text-gray-600 text-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p>🗺️ Map or dashboard will appear here</p>
      </motion.div>

      {/* Bottom Navigation / CTA */}
      <motion.div
        className="mt-10 w-full max-w-md"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-all">
          Find Rides
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Home;
