import React from 'react'
import '../../styles/Header.scss'
import logo1 from '../../assets/images/logo1.svg'
//import l2 from '../../assets/images/logo2.svg'


const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo1} alt=""/>
      </div>
      <div className="header__menu">
        <p>🍔</p>
      </div>
    </div>
  )
}

export default Header
 