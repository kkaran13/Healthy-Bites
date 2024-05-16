import React from 'react';
import Homepic from '../assets/Premium Vector _ Man choosing between healthy and unhealthy food, fast food vs balanced menu.jpeg';
import { useNavigate } from 'react-router-dom';

const Home = ({ isLoggedIn }) => {
  const navigation = useNavigate()
  const navi = () =>{
    navigation("./login")
  }

  const mealplan = () =>{
    navigation("./planner")
  }
  return (
    <div className='h-screen'>
      <section className="text-gray-400 bg-richblack-900 body-font">
        <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center">

          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome, to Healthy Bites 
              <br className="hidden lg:inline-block" /> Stay healthy with us!!
            </h1>
            <p className="mb-8 leading-relaxed text-white">Hello Hello Hello Get your BMI calculated!! come get your diet plan!!!.</p>
            <div className="flex justify-center">

              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg" onClick={navi}>Click here to get your BMI.</button>

              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" onClick={mealplan}>Lets see what you can eat.</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-3xl bubble-border" alt="hero" src={Homepic} /> {/* Make sure the image source is correct */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;