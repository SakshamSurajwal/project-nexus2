import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const userInfo= JSON.parse(localStorage.getItem("userInfo"));

        if(userInfo){
            navigate('/');
        }
    },[navigate]);

    const func=(e)=>{
        e.preventDefault();
        navigate('/signup');
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const configuration={
            headers:{
                "Content-type":"application/json"
            }
        };
        const {data}=await axios.post("/api/user/login",{
                email:email,
                password:password,
        },configuration);

        localStorage.setItem('userInfo',JSON.stringify(data));
        navigate('/');
    }

  return (
        <div className='login'>
            <h1>Login</h1>
            <div className='box'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email : </label>
                    <input value={email} required
                    onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password : </label>
                    <input value={password} required
                    onChange={(e)=> setPassword(e.target.value)}  placeholder='Enter your password' type="password" className="form-control"id="exampleInputPassword1"/>
                </div>
                <button style={{width:'100%',backgroundColor:'purple',color:'white'}} type="submit" className="btn btn-primary">Login</button>
                <button onClick={func} style={{width:'100%',backgroundColor:'purple',color:'white'}} className="btn btn-primary">New User</button>
            </form>
            </div>
        </div>
  )
}

export default Login
