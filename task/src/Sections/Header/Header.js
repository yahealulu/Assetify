import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import { Navitem, Start, SignButton } from '../../Components/index';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <div className="HeaderBar">
        <div className="ButtonGroup">
          <Start />
          <SignButton />
        </div>
       
        <nav className={`NavbarWrapper ${isMenuOpen ? 'open' : ''}`}>
          <ul className="Navbar">
            <Navitem>العقارات</Navitem>
            <Navitem>حول</Navitem>
            <Navitem>برامج الجنسية لدى اسيستفاي</Navitem>
            <Navitem>البيع</Navitem>
            <Navitem>المزيد</Navitem>
            <a href="/" className="Logo ">
          <img loading="lazy" src={logo} alt="Logo" />
        </a>
          </ul>
        </nav>
        <button className="MenuToggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
