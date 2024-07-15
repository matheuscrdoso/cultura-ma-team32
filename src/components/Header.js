import React from 'react';
import logo from '../assets/images/bandeira-maranhao.png'; // Ajuste o caminho conforme necessário

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Bandeira do Maranhão" className="logo" />
        <h1>Mergulho na Cultura Maranhense</h1>
      </div>
    </header>
  );
};

export default Header;
