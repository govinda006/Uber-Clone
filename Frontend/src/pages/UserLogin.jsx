import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { motion } from 'framer-motion'

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = { email, password }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
            if (response.status === 200 || response.status === 201) {
                const data = response.data
                setUser(data.user)
                localStorage.setItem('token', JSON.stringify(data.token))
                navigate('/home')
            } else {
                alert('Login failed. Please try again.')
            }
        } catch (err) {
            alert('Invalid credentials or server error.')
        }

        setEmail('')
        setPassword('')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='p-7 h-screen flex flex-col justify-between bg-gradient-to-b from-gray-100 to-white'
        >
            <div>
                <motion.img
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className='w-20 mb-8 mx-auto'
                    src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
                    alt='Uber'
                />

                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className='w-40 mx-auto mb-5'
                    src='https://cdn-icons-png.flaticon.com/512/747/747376.png'
                    alt='User Icon'
                />

                <form onSubmit={submitHandler} className='mt-3'>
                    <motion.h3
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='text-lg font-medium mb-2'
                    >
                        What's your email
                    </motion.h3>

                    <motion.input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black'
                        type='email'
                        placeholder='email@example.com'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    />

                    <motion.h3
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='text-lg font-medium mb-2'
                    >
                        Enter password
                    </motion.h3>

                    <motion.input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-black'
                        type='password'
                        placeholder='password'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-black text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg'
                    >
                        Login
                    </motion.button>
                </form>

                <p className='text-center text-gray-700'>
                    New here?{' '}
                    <Link to='/user-signup' className='text-blue-600 hover:underline'>
                        Create New Account
                    </Link>
                </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                    to='/captain-login'
                    className='bg-[#10b461] justify-center flex items-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'
                >
                    Sign in as Captain
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default UserLogin
