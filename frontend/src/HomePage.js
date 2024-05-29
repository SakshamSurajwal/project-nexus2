import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./main.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Menu from "./components/Menu.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

const HomePage = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        const userInfo= JSON.parse(localStorage.getItem("userInfo"));

        if(!userInfo){
            navigate('/signup');
        }
    },[navigate]);

  return (
    <div className='home' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
