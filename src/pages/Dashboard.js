// export default Dashboard
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BMICalculator = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);

    setBMI(bmiValue);
    // <p>{bmiValue}</p>
  };

  const navigateToPage = () => {
    if (bmi < 18) {
      return navigate("./BMIPage1")
    } else if (bmi >= 18.5 && bmi <= 25) {
      return navigate("./BMIPage2")
    } else {
      return navigate("./BMIPage3")
    }
  };

  return (
    <div className='mx-auto my-8 px-10 py-10 bg-richblack-700 rounded-md  h-screen'>
        <h1 className='text-slate-200 text-center text-3xl'>BMI Calculator</h1>
        <div>
          <label className='text-slate-200 text-xl'>
            Weight (kg):
            <input
              type="number"
              value={weight}
              placeholder='Weight'
              className='text-black mx-3 rounded-md px-2 py-1'
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>

        <br />
        <div>
          <label className='text-slate-200 text-xl'>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder='Height'
              className='text-black mx-3 rounded-md px-2 py-1' />
          </label>
        </div>
        <br />
        <button onClick={calculateBMI} className='text-slate-200 text-xl bg-slate-500 hover:bg-richblack-900 px-2 py-2 rounded-lg'>Calculate BMI</button>

        <button onClick={navigateToPage} className='text-slate-200 text-xl bg-slate-500 hover:bg-richblack-900 px-2 py-2 rounded-lg mx-[50px]'>Suggest a Diet</button>



        {/* {bmi !== null && navigateToPage()} */}

        <br />
        <div className='py-4'><p className='text-slate-200 text-xl'>Your BMI is : {bmi}</p></div>
      </div>
  );
};

export default BMICalculator;