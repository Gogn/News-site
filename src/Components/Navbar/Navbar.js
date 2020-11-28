import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => (
  <nav className='navbar navbar--light'>

    <div className="navbar__brand">
      Profilance: Новостной сайт
    </div>

    <ul className='navbar__list'>
      <li className='navbar nav-item'>
        <NavLink exact to="/" className='nav-item__link'>Главная</NavLink>
      </li>
      <li>
        <NavLink to="/about" className='nav-item__link'>Новости</NavLink>
      </li>
    </ul>

  </nav>
)
