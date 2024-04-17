import React from 'react';
import './Footer.css';

const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? 'footer footer-dark' : 'footer footer-light'}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li>Contáctame</li>
            <li>
              <a href="https://wa.me/+573245417802">Tell- +57 3245417802</a>
            </li>
            <li>
              <a href="mailto:Santiagoriveraprada0@gmail.com">
                santiagoriveraprada0@gmail.com
              </a>
            </li>
            <li>Via whatsApp y llamadas</li>
            <li>Respuesta por correo-12 horas</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/santiago.riveraprada?mibextid=ZbWKwL">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/Santiag52876368?t=Vs58jIrO9I4AtmgKKQ5c-A&s=09">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/santiagoriveraprada?igsh=OGQ5ZDc2ODk2ZA==">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/santiago-rivera-784aa625a/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Santi-rivera-prada">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <img
            className="descarga-app"
            src="https://i.pinimg.com/736x/ed/70/51/ed70515b5aca17fbd9352242aec6c291.jpg"
            alt="Master In Coding"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 <span className="large-letter">Master In Coding-</span>
          <span className="orange-text">Santiago-rivera-prada-</span> Todos los
          derechos reservados.<span className="orange-text"> V-1.0</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
