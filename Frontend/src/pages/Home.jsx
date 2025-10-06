import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";


const Home = () => {


  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const vehiclePanelRef = useRef(null)
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen])


  useGSAP(function () {
    

  })

  return (
    <motion.div
      className="h-screen relative flex flex-col items-center justify-between bg-gradient-to-b from-gray-100 to-white px-5 py-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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

      <motion.div
        className="mt-10 bg-gray-200 w-full max-w-3xl h-[50vh] rounded-xl shadow-inner overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >

        <img src="/Screenshot 2025-10-06 135209.png"
          className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className=" opacity-0 absolute right-6 top-6 text-2xl">
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold ">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10  bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location" />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg  w-full mt-3"
              type="text"
              placeholder="Enter destination" />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 ">
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </motion.div>

      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between ">
          <img className="h-10" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-fill">4</i></span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between ">
          <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-lg">Moto <span><i className="ri-user-fill">1</i></span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable motorcycle ride</p>
          </div>
          <h2 className="text-lg font-semibold">₹65.17</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl p-3 w-full items-center justify-between ">
          <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=" ml-2 w-1/2">
            <h4 className="font-medium text-lg">UberAuto  <span><i className="ri-user-fill">3</i></span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable Auto ride</p>
          </div>
          <h2 className="text-lg font-semibold">₹118.21</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;