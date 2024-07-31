// import React, { useState } from 'react';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         ☰
//       </button>
//       <ul className={isOpen ? 'open' : ''}>
//         <li><a href="#culinaria">Culinária</a></li>
//         <li><a href="#festas">Festas Populares</a></li>
//         <li><a href="#artesanato">Artesanato</a></li>
//         <li><a href="#turismo">Pontos Turísticos</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

// NavBar.js
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

