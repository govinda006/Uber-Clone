import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Start = () => {
    return (
        <div className="relative h-screen w-full flex flex-col justify-between bg-cover bg-center bg-[url('https://i.pinimg.com/1200x/6c/f0/3d/6cf03d1774818d8d1ca25dc4bfd99692.jpg')]">
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative z-10 pt-8 pl-8"
            >
                <img
                    className="w-20 sm:w-24"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber Logo"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 bg-white rounded-t-3xl shadow-2xl px-6 py-10 sm:px-8 sm:py-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                    Get Started with Uber
                </h2>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                        to="/user-login"
                        className="flex items-center justify-center w-full bg-black text-white py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 transition"
                    >
                        Continue
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Start;
