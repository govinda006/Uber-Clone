import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useEffect } from 'react';

const UserProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/user-login');
        }
    }, [token, navigate]);

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper