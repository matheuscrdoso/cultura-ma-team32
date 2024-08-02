import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/styles/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Mergulho na Cultura Maranhense. Todos os direitos reservados.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/governodomaranhao/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/governoma/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/governoma/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
