import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/bandeira-maranhao.png'; 

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Bandeira do Maranhão" className="logo" />
        </Link>
        <h1>CulturaMA</h1>
      </div>
    </header>
  );
};

export default Header;
