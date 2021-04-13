import React from 'react';
import { Link } from 'react-scroll';
import '../../styles/Header.scss';
import logo1 from '../../assets/images/logo1.svg';

//import l2 from '../../assets/images/logo2.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo1} alt="" />
      </div>
      <div className="header__menu">
        <Link to="about" smooth={true} hashSpy={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} hashSpy={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} hashSpy={true} duration={500}>
          Contact
        </Link>
        {/* <p>🍔</p> */}
      </div>
    </div>
  );
};

export default Header;
