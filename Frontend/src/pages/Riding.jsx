import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to="/home" className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>

            <div className="h-1/2">
                <img src="/Screenshot 2025-10-06 135209.png" className="w-full h-full object-cover" />
            </div>
            <div className='h-1/2 p-4'>

                <div className='flex items-center justify-between'>
                    <img
                        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                        alt="Ride option"
                        className="h-12"
                    />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>
                            Govinda
                        </h2>
                        <h4 className='text-xl  font-semibold -mt-1 -mb-1'>MP04 AB1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">


                    <div className="w-full space-y-3">
                        {/* <div className="flex items-center gap-4 p-3 border-b-2">
                            <i className="ri-map-pin-user-fill text-xl"></i>
                            <div>
                                <h3 className="text-lg font-medium">562/11/A</h3>
                                <p className="text-sm -mt-1 text-gray-600">Dental College, Marathahalli</p>
                            </div>
                        </div> */}

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
                <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-4">Make a payment</button>
            </div>
        </div>

    )
}

export default Riding