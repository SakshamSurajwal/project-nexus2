import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const userInfo= JSON.parse(localStorage.getItem("userInfo"));

        if(userInfo){
            navigate('/');
        }
    },[navigate]);

    const func=(e)=>{
        e.preventDefault();
        navigate('/login');
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const configuration={
            headers:{
                "Content-type":"application/json"
            }
        };
        const {data}=await axios.post("/api/user/signup",{
                name:name,
                email:email,
                password:password,
                mobile: phone,
        },configuration);

        localStorage.setItem('userInfo',JSON.stringify(data));
        navigate('/');
    }

  return (
        <div className='signup'>
            <h1>Sign up</h1>
            <div className='boxs'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">User Name : </label>
                    <input value={name} required
                    onChange={(e)=> setName(e.target.value)} placeholder='Enter your name' type="text" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email : </label>
                    <input value={email} required
                    onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' type="email" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number : </label>
                    <input value={phone} required
                    onChange={(e)=> setPhone(e.target.value)} placeholder='Enter your phone number' type="number" className="form-control"id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password : </label>
                    <input value={password} required
                    onChange={(e)=> setPassword(e.target.value)}  placeholder='Enter your password' type="password" className="form-control"id="exampleInputPassword1"/>
                </div>
                <button style={{width:'100%',backgroundColor:'purple',color:'white'}} type="submit" className="btn btn-primary">Sign up</button>
                <button onClick={func} style={{width:'100%',backgroundColor:'purple',color:'white'}} className="btn btn-primary">Already have account</button>           
            </form>
            </div>
        </div>
  )
}

export default SignUp
