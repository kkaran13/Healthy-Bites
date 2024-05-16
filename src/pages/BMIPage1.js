import React from 'react';

const BMIPage1 = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-gray-200 text-3xl mb-5">Your BMI is less than 18.5, You are underweight</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-5 w-full max-w-[1450px] mx-auto bg-gray-200 p-5 rounded-lg">
        {[
          { day: 'Monday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Jogging', 'Push-ups'] },
          { day: 'Tuesday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Yoga', 'Plank'] },
          { day: 'Wednesday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Cycling', 'Lunges'] },
          { day: 'Thursday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Swimming', 'Squats'] },
          { day: 'Friday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Jumping Jacks', 'Pull-ups'] },
          { day: 'Saturday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Hiking', 'Burpees'] },
          { day: 'Sunday', meal: ['Milk, Egg', 'Salad, Dal, Rice', 'Dal, Rice, Salad'], exercise: ['Rest day'] },
        ].map(({ day, meal, exercise }) => (
          <div key={day} className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-2">{day}</h2>
            <div className="space-y-4">
              <div className="text-sm"><strong>Meal:</strong></div>
              {meal.map((m, index) => (
                <div key={index} className="text-sm ml-2">{m}</div>
              ))}
            </div>
            <div className="mt-4">
              <div className="text-sm"><strong>Exercise:</strong></div>
              <div className="grid grid-cols-1 gap-2">
                {exercise.map((ex, index) => (
                  <div key={index} className="text-sm ml-2">{ex}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BMIPage1;
