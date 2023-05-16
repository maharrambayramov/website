import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import "../css/Main.css"
import Footer from '../components/Footer'

const Mainroot = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Mainroot