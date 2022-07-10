import React from 'react'
import {NavLink} from 'react-router-dom'
import '../scss/Header.scss'

function Header() {
  return (
    <div>
      <div className="header center_right">
        <ul className='center_center'>
          <li className='nav_item '><NavLink  to={"/"}    >Home</NavLink></li>
          <li className='nav_item '><NavLink  to={"/Mr"}  >Visit Mr</NavLink></li>
          <li className='nav_item '><NavLink  to={"/Mrs"} >Visit Mrs</NavLink></li>
        </ul>
      </div>

    </div>
  )
}

export default Header