import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [userData, setUserData] = useState({});
    const { setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            fullname: { firstname: firstName, lastname: lastName },
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: Number(vehicleCapacity),
                vehicleType,
            },
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if (response.status === 201) {
            const data = response.data;
            setCaptain(response.data);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-8 relative overflow-hidden bg-gray-50">

            {/* Animated graffiti-style background */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 opacity-30 animate-[pulse_15s_linear_infinite]"></div>

                {/* Subtle abstract shapes */}
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20%" cy="30%" r="100" fill="rgba(255,255,255,0.08)" />
                    <circle cx="80%" cy="70%" r="150" fill="rgba(255,255,255,0.06)" />
                    <rect x="50%" y="10%" width="200" height="200" rx="20" fill="rgba(255,255,255,0.04)" />
                </svg>
            </motion.div>

            {/* Signup form container */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 sm:p-8 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-col items-center mb-6"
                >
                    <img
                        className="w-24 sm:w-28 mb-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                        alt="Uber logo"
                    />
                    <div className="flex items-center gap-2 group">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Captain Signup
                        </h2>
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <ArrowRight className="text-black w-6 h-6" />
                        </motion.div>
                    </div>
                </motion.div>

                <form onSubmit={submitHandler} className="space-y-5">
                    {/* Captain Name */}
                    <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-700">
                            Captain's Name
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                required
                                className="bg-gray-100 rounded px-4 py-2 border w-full sm:w-1/2 text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-gray-100 rounded px-4 py-2 border w-full sm:w-1/2 text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-700">
                            Captain's Email
                        </h3>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            required
                            className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-700">Password</h3>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            required
                            className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                            type="password"
                            placeholder="Password (min 6 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Vehicle Details */}
                    <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-700">
                            Vehicle Details
                        </h3>
                        <div className="space-y-3">
                            {[
                                { placeholder: 'Vehicle Color', value: vehicleColor, setter: setVehicleColor },
                                { placeholder: 'Vehicle Plate Number', value: vehiclePlate, setter: setVehiclePlate },
                                { placeholder: 'Vehicle Capacity', value: vehicleCapacity, setter: setVehicleCapacity, type: 'number' },
                            ].map((field, i) => (
                                <motion.input
                                    key={i}
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    required
                                    className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black"
                                    type={field.type || 'text'}
                                    placeholder={field.placeholder}
                                    value={field.value}
                                    onChange={(e) => field.setter(e.target.value)}
                                />
                            ))}

                            <motion.select
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                required
                                className="bg-gray-100 rounded px-4 py-2 border w-full text-lg focus:outline-none focus:ring-2 focus:ring-black"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                            >
                                <option value="">Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="auto">Auto</option>
                            </motion.select>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        type="submit"
                        className="bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-900 transition"
                    >
                        Sign Up
                    </motion.button>
                </form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-4 text-sm text-gray-700"
                >
                    Already have an account?{' '}
                    <Link to="/captain-login" className="text-blue-600 font-medium">
                        Login Here
                    </Link>
                </motion.p>

                <p className="text-[10px] text-gray-500 mt-6 leading-tight text-center">
                    This site is protected by reCAPTCHA and the{' '}
                    <span className="underline">Google Privacy Policy</span> and{' '}
                    <span className="underline">Terms of Service</span> apply.
                </p>
            </motion.div>
        </div>
    );
};

export default CaptainSignup;
