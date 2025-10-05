import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(token)}`
                    }
                });

                if (response.status === 200 || response.status === 201) {
                    localStorage.removeItem('token');
                    navigate('/user-login');
                }
            } catch (error) {
                console.error('Error during logout:', error);
            }
        };

        logoutUser();
    }, [navigate, token]);

    return (
        <div className="flex justify-center items-center h-screen text-xl font-semibold">
            Logging out...
        </div>
    );
};

export default UserLogout;
