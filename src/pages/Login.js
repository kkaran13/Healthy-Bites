import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/pexels-jane-doan-793772.jpg';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="stay healthy for today,tommorow, and beyond"
      desc2="stay healthy with us....."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login