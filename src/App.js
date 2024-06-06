import React, {useEffect, useState} from 'react'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import { auth } from './firebase'
import Home from './components/Home.jsx'

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  },[]);
  return (
    <div>
        <Routes>
          <Route path='/' element={user ? <Navigate to="/home" /> : <Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        <ToastContainer/>
    </div>
  )
}

export default App