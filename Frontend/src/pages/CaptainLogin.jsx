import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({ email, password });
        console.log('Captain Login Data:', { email, password });

        setEmail('');
        setPassword('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 sm:px-8">
            {/* Animated Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 sm:p-8"
            >
                {/* Logo + Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-col items-center mb-6"
                >
                    <img
                        className="w-24 sm:w-28 mb-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                        alt="Uber Logo"
                    />
                    <div className="flex items-center gap-2 group">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Captain Login
                        </h2>
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <ArrowRight className="text-black w-6 h-6" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Form */}
                <form onSubmit={submitHandler} className="space-y-5">
                    <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-700">
                            What's your email
                        </h3>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-100 mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                            type="email"
                            placeholder="email@example.com"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-700">
                            Enter Password
                        </h3>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-100 mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                            type="password"
                            placeholder="password"
                        />
                    </div>

                    {/* Login Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        type="submit"
                        className="bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-900 transition"
                    >
                        Login
                    </motion.button>
                </form>

                {/* Signup Redirect */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-4 text-sm text-gray-700"
                >
                    Join a fleet?{' '}
                    <Link
                        to="/captain-signup"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Register as Captain
                    </Link>
                </motion.p>

                {/* Sign in as User */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6"
                >
                    <Link
                        to="/user-login"
                        className="bg-[#d5622d] justify-center flex items-center text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-[#c25222] transition"
                    >
                        Sign in as User
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CaptainLogin;
