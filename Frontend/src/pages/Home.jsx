import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);


  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => e.preventDefault();

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '70%', padding: 24, duration: 0.4, ease: "power2.out" });
      gsap.to(panelCloseRef.current, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(panelRef.current, { height: '0%', padding: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(panelCloseRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [panelOpen]);

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(vehiclePanelRef.current, { y: "100%", duration: 0.4, ease: "power2.out" });
    }
  }, [vehiclePanel]);

  useEffect(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(confirmRideRef.current, { y: "100%", duration: 0.4, ease: "power2.out" });
    }
  }, [confirmRide]);

  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(vehicleFoundRef.current, { y: "100%", duration: 0.4, ease: "power2.out" });
    }
  }, [vehicleFound]);

  useEffect(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(waitingForDriverRef.current, { y: "100%", duration: 0.4, ease: "power2.out" });
    }
  }, [waitingForDriver]);


  return (
    <div className="h-screen relative flex flex-col items-center justify-start bg-gradient-to-b from-gray-100 to-white px-5 py-8 overflow-hidden">


      <div className="w-full flex justify-between items-center">
        <img
          className="w-24"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
      </div>

      {/* Map Background */}
      <div className="mt-6 bg-gray-200 w-full flex-1 rounded-xl shadow-inner overflow-hidden flex items-center justify-center">
        <img src="/Screenshot 2025-10-06 135209.png" className="w-full h-full object-cover" />
      </div>

      {/* Trip Panel */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="opacity-0 absolute right-6 top-6 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen} />
        </div>
      </div>

      {/* Vehicle Panel */}
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRideRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <ConfirmRide
          setConfirmRide={setConfirmRide}
          setVehicleFound={setVehicleFound}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-8">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
