import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='navbar'>
      <nav>
        <h2>Hexa</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
        <button><Link to={"/ProductsPost"} style={{textDecoration: "none", color: "white"}}>Products Add</Link></button>
    </div>
  )
}

export default Header