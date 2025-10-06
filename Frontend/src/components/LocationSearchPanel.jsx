import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    "Marathahalli Bridge Signal, Bengaluru, Karnataka",
    "Indiranagar Metro Station Road, Bengaluru, Karnataka",
    "Manyata Tech Park Main Gate, Nagavara, Bengaluru",
    "Electronic City Phase 1 Circle, Bengaluru, Karnataka",
    "Hebbal Flyover Junction Road, Bengaluru, Karnataka"
  ];

  return (
    <div>
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          key={index}
          className='flex gap-4 items-center border-2 border-gray-300 active:border-black px-2 rounded-xl my-2 justify-start'
        >
          <h2 className='bg-[#eee] rounded-full h-8 flex items-center justify-center w-12'>
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPanel
