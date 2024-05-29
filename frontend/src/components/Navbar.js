import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();

  const func=()=>{
    localStorage.removeItem('userInfo');
    navigate("/");
  }

  return (
    <>
      <header className="header">
        <h2 style={{color:'white'}}>RESTAURANT ABC</h2>
        <a href="#" className="logo">
          <img alt="" />
        </a>
        <nav className="navbar">
          <a href="#home">HOME</a>
          <a href="#menu">MENU</a>
          <a href="#about">ABOUT US</a>
          <a href="#contact">CONTACT US</a>
        </nav>
        <button onClick={func} style={{fontSize:'20px'}}>LOGOUT</button>
      </header>
    </>
  );
};

export default Navbar;