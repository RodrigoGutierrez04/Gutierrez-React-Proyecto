import React from "react";
import CartWidget from "../CartWidget";
import './navbar.css'
import { NavLink } from "react-router-dom";

const navbarbg = {
  backgroundColor: '#3E6BDD'
}

const logo = {
  width: '120px',
  height: '40px',
  transform: 'translateX(20px)'

}


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg na" style={navbarbg}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to='/'>
            <img src="img/refreshme2-cropped.svg" style={logo} alt="logo"/>
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to='/categoria/shakers'>Shakers</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to='/categoria/termos'>Termos</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to='cart'>
                  <CartWidget/>
                </NavLink>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>


    )

}

export default NavBar