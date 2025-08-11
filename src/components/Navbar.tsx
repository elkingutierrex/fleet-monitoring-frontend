import React from 'react'
import img  from './../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-customer">
            <div className="container">
                <a className="navbar-brand">
                <img className='logo' src={img} alt="logo" height="50" />
                </a>
                <strong> Deliveries Tracker </strong> 
            </div>

        </nav>
      
    </div>
  )
}

export default Navbar
