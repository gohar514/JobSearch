import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Co/Navbar'

const Navv = () => (

  <>
    <Navbar />
    <Outlet />
    <ToastContainer />
  </>
)

export default Navv