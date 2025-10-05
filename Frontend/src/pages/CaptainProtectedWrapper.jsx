import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useEffect } from 'react';
import axios from 'axios';

const CaptainProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoadindg, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token, navigate]);

    axios.get(`${import.meta.env.VITE_BACKEND_URL}/captains/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setCaptain(response.data);
            setIsLoading(false);
        }
    }).catch(err => {
        console.error(err);
        localStorage.removeItem('token');
        navigate('/captain-login');
    })

    if (isLoadindg) {
        return <div>Loading...</div>
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper