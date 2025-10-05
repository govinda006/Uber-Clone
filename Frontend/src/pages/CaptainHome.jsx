import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaptainHome = () => {
    const { captain } = useContext(CaptainDataContext);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">

            {/* Animated background */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 opacity-30 animate-[pulse_15s_linear_infinite]"></div>
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20%" cy="30%" r="100" fill="rgba(255,255,255,0.08)" />
                    <circle cx="80%" cy="70%" r="150" fill="rgba(255,255,255,0.06)" />
                    <rect x="50%" y="10%" width="200" height="200" rx="20" fill="rgba(255,255,255,0.04)" />
                </svg>
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center p-6 sm:p-8 bg-white rounded-2xl shadow-2xl max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Welcome, {captain?.fullname?.firstname || 'Captain'}!
                </h1>
                <p className="text-gray-700 mb-6">
                    Ready to start your day? Check your rides and vehicle status below.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/rides"
                        className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition"
                    >
                        View Rides
                    </Link>
                    <Link
                        to="/profile"
                        className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
                    >
                        Profile
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default CaptainHome;
