import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="none" style={{maxWidth: 'auto', minWidth: 'auto',marginBottom: '100px' }}>
      <div className="container-fluid" style={{display: 'flex',flexWrap: 'wrap',alignItems: 'center',justifyContent: 'center',alignContent: 'center', textAlign: 'center'}}>
        
      <div className="footer-section">
          <img  className='descarga-app' src='https://i.pinimg.com/736x/67/a7/94/67a794070546721442318bfca6474b33.jpg' alt="Master In Coding" style={{width:'70%', height:'80%', marginBottom:'50px', display:'grid',justifyContent:'center', borderRadius: '20px', margin:'20px'}}/>
        </div>
        
        <h1 className="navbar-brand" href=""  style={{color: 'blue', width: '170px', height: '70px', marginBottom: '10px', backgroundColor: '', borderRadius: '10px', fontFamily: 'cursive', justifyContent: 'center', display: 'grid'}}>
          Mi Portafolio || <br></br> Program
        </h1>

        <h1 className="navbar-brand" href=""  style={{color: 'red', width: '170px', height: '70px', marginBottom: '10px', backgroundColor: '', borderRadius: '10px', fontFamily: 'cursive', justifyContent: 'center', display: 'grid'}}>
        Santiago rivera <br></br>  prada
        </h1>

        <h1 className="navbar-brand" href=""  style={{color: 'blue', width: '170px', height: '70px', marginBottom: '10px', backgroundColor: '', borderRadius: '10px', fontFamily: 'cursive', justifyContent: 'center', display: 'grid'}}>
          Master In Coding <br></br>
        </h1> 

        <div className="footer-bottom" style={{ width:'100%', height:''}}>
  <p>←—————Santiago—————→</p>
</div>


      </div>
    </nav>
  );
};

export default Header;
