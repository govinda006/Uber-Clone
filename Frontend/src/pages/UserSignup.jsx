import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import { motion } from 'framer-motion'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const { setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email,
            password,
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
            if (response.status === 201) {
                const data = response.data
                setUser(data.user)
                localStorage.setItem('token', JSON.stringify(data.token))
                navigate('/home')
            } else {
                alert('Signup failed. Please try again.')
            }
        } catch (error) {
            alert('Error: Could not register user.')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white px-5"
        >
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-white/40 backdrop-blur-lg p-7 rounded-2xl shadow-lg w-full max-w-md"
            >
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber"
                    className="w-24 mx-auto mb-5"
                />

                <motion.img
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="User Icon"
                    className="w-24 mx-auto mb-5"
                />

                <form onSubmit={submitHandler}>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">What's your name</h3>
                    <div className="flex gap-3 mb-5">
                        <input
                            required
                            className="bg-[#f2f2f2] rounded px-4 w-1/2 py-2 border border-gray-300 text-lg placeholder:text-base focus:ring-2 focus:ring-black outline-none"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            className="bg-[#f2f2f2] rounded px-4 w-1/2 py-2 border border-gray-300 text-lg placeholder:text-base focus:ring-2 focus:ring-black outline-none"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-gray-800">What's your email</h3>
                    <input
                        required
                        className="bg-[#f2f2f2] mb-5 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base focus:ring-2 focus:ring-black outline-none"
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Enter password</h3>
                    <input
                        required
                        className="bg-[#f2f2f2] mb-6 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base focus:ring-2 focus:ring-black outline-none"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-black text-white font-semibold rounded px-4 py-2 w-full text-lg transition-all hover:bg-gray-900"
                    >
                        Create Account
                    </motion.button>
                </form>

                <p className="text-center mt-4 text-gray-700">
                    Already have an account?{' '}
                    <Link to="/user-login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>

                <p className="text-[10px] mt-6 text-gray-600 leading-tight text-center">
                    By proceeding, you consent to receive calls, WhatsApp, or SMS messages from Uber and its affiliates to the provided number.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default UserSignup
