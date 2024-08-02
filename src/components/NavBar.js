import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isOpen ? 'open' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/culinaria">Culinária</Link></li>
        <li><Link to="/festas">Festas Populares</Link></li>
        <li><Link to="/artesanato">Artesanato</Link></li>
        <li><Link to="/turismo">Pontos Turísticos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

