import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NutritionBlock = ({ label, value }) => (
  <div className="flex flex-col items-center p-4 border border-gray-300 bg-slate-900  text-cyan-50 rounded-md">
    <h3 className="text-lg font-semibold">{label}</h3>
    <p>{value}</p>
  </div>
);

const Nutritioncalculator = () => {
  // State to hold fetched data
  const [fetchedData, setFetchedData] = useState(null);
  // State to hold user input for food name
  const [foodName, setFoodName] = useState('');

  // Function to fetch data for the specified food name
  const fetchData = async (foodName) => {
    const options = {
      method: 'GET',
      url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
      headers: {
        'X-RapidAPI-Key': '94d476ba2emsha1c1d957898ac82p1a0ed4jsn90bc1c00b193', // Replace with your RapidAPI key
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      },
      params: {
        query: foodName
      }
    };

    try {
      const response = await axios.request(options);
      setFetchedData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle changes in user input for food name
  const handleInputChange = (e) => {
    setFoodName(e.target.value);
  };

  // Function to handle fetching data when the button is clicked
  const fetchDataOnClick = () => {
    // Call fetchData function with the current value of foodName
    fetchData(foodName);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-950 h-screen ">
      {/* User input for food name */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-white text-3xl">Enter Food Name:</label>
        <input
          type="text"
          placeholder='Enter Food Name'
          value={foodName}
          onChange={handleInputChange}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </div>

      {/* Button to fetch data */}
      <button
        onClick={fetchDataOnClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Fetch Data
      </button>

      {/* Display fetched data */}
      {fetchedData && fetchedData.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nutrition Information for {foodName}</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(fetchedData[0]).map((key) => (
              <NutritionBlock key={key} label={key} value={fetchedData[0][key]} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nutritioncalculator;
