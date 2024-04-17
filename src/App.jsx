import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import RoutesIndex from './routes/RoutesIndex';
import Footer from './footer/Footer';
import './App.css';

function App() {
  // Obtener el estado inicial del modo oscuro del Local Storage o usar false por defecto
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  // Función para alternar entre modos claro y oscuro
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Guardar el estado en el Local Storage
    localStorage.setItem('darkMode', newMode.toString());
  };

  useEffect(() => {
    // Aplicar o quitar la clase 'dark-mode' al body dependiendo del estado de darkMode
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div  className="miapp">
    
      <button onClick={toggleDarkMode} className="toggle-btn" style={{display:'flex', color:'blue'}}>
      Modo
        {darkMode ? (
          <img src="https://i.pinimg.com/736x/48/76/1b/48761bfbb27515d314c48fe8bd67df09.jpg" alt="Luna" className="moon-icon" />
        ) : (
          <img src="https://i.pinimg.com/736x/cf/bb/cb/cfbbcb7f8c842f6b945aa2fba9feff9a.jpg" alt="Sol" className="sun-icon"/>
        )}
      </button>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
