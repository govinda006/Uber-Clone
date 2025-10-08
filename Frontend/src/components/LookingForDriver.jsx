import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div className="relative p-4">
      <h5
        onClick={() => props.setVehicleFound(false)}
        className="text-2xl cursor-pointer absolute right-6 top-6"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Looking for a driver</h3>

      <div className="flex flex-col items-center gap-4">
        <img
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Ride option"
          className="h-20"
        />

        <div className="w-full space-y-3">
          <div className="flex items-center gap-4 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11/A</h3>
              <p className="text-sm -mt-1 text-gray-600">Dental College, Marathahalli</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 border-b-2">
            <i className="ri-map-pin-fill text-xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11/A</h3>
              <p className="text-sm -mt-1 text-gray-600">Dental College, Marathahalli</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3">
            <i className="ri-cash-line text-xl"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver
