import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const login=()=>{
        localStorage.setItem("login",true);
        navigate("/");
    }
    const navigate = useNavigate();

    useEffect(()=>{
        const login = localStorage.getItem('login');
        if (login) {
            navigate("/")
        }
    },[navigate])
  return (
    <>
        <div style={{display:'grid', justifyContent:'center', alignItems:'center'}}>
        <h1>Login Form</h1>
        <input type="text"/>
        <br />
        <input type="password"/>
        <br />
        <button onClick={login}>Submit</button>
        </div>
    </>
  )
}

export default Login

