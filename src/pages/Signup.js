import React from 'react'
import Template from "../components/Template";
import signupImg from "../assets/pexels-jane-doan-793782.jpg";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Sign Up"
      desc1="Start your healthy life journey"
      desc2="with us!"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup