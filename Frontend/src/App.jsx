import React from 'react'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogout from './pages/UserLogout'
import UserProtectedWrapper from './pages/userProtectedWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        < Route path="/" element={<Start />} />
        < Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        < Route path="/captain-signup" element={<CaptainSignup />} />
        < Route path="/captain-login" element={<CaptainLogin />} />
        < Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />

        <Route path='/users/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App