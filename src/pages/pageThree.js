import React, { useState } from "react";

const PageThree = () => {
  // Meal Tracker State
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  // Burned Calorie Tracker State
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [burnedCalories, setBurnedCalories] = useState("");
  const [workoutDate, setWorkoutDate] = useState("");


//step tracker state
const [steps, setSteps] = useState([]);
const [stepCount, setStepCount]= useState("");
const [stepDate, setStepDate] = useState("");
const [stepGoal, setStepGoal]=useState(10000);  //default step goal




  // Function to add a meal
  const addMeal = () => {
    if (mealName && calories && date) {
      setMeals([...meals, { mealName, calories: Number(calories), date }]);
      setMealName("");
      setCalories("");
      setDate("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Function to add a workout
  const addWorkout = () => {
    if (workoutName && burnedCalories && workoutDate) {
      setWorkouts([
        ...workouts,
        { workoutName, burnedCalories: Number(burnedCalories), workoutDate },
      ]);
      setWorkoutName("");
      setBurnedCalories("");
      setWorkoutDate("");
    } else {
      alert("Please fill in all fields!");
    }
  };


//function to add steps
const addSteps = () => {
  if (stepCount && stepDate) {
    setSteps([...steps, { stepCount: Number(stepCount), stepDate }]);
    setStepCount("");
    setStepDate("");
  } else {
    alert("Please fill in all fields!");
    }
    };



  // Calculate total calories consumed
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  // Calculate total calories burned
  const totalBurnedCalories = workouts.reduce(
    (sum, workout) => sum + workout.burnedCalories,
    0
  );

  // Calculate net calories (intake - burned)
  const netCalories = totalCalories - totalBurnedCalories;




// function to handle custom step goal
  const handleStepGoalChange=(e)=>{
    setStepGoal(e.target.value);
  }
  //calculate total steps
  const totalSteps = steps.reduce((sum, step)=> sum + step.stepCount,0);
  // step goal
const stepProgress= Math.min((totalSteps/ stepGoal)* 100, 100);


  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>Nutrition & Calories Tracker</h1>

      {/* Meal Input Form */}
      <h2>Log Your Meals</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Meal Name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addMeal}>Add Meal</button>
      </div>

      {/* Display Meal List */}
      <h3>Logged Meals</h3>
      <table border="1" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Calories</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => (
            <tr key={index}>
              <td>{meal.mealName}</td>
              <td>{meal.calories}</td>
              <td>{meal.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Workout Input Form */}
      <h2>Log Your Workouts</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={burnedCalories}
          onChange={(e) => setBurnedCalories(e.target.value)}
        />
        <input
          type="date"
          value={workoutDate}
          onChange={(e) => setWorkoutDate(e.target.value)}
        />
        <button onClick={addWorkout}>Add Workout</button>
      </div>

      
      {/* Display Workout List */}
      <h3>Logged Workouts</h3>
      <table border="1" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Workout</th>
            <th>Calories Burned</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.workoutName}</td>
              <td>{workout.burnedCalories}</td>
              <td>{workout.workoutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <h2>Summary</h2>
      <p><strong>Total Calories Consumed:</strong> {totalCalories} kcal</p>
      <p><strong>Total Calories Burned:</strong> {totalBurnedCalories} kcal</p>
      <p>
        <strong>Net Calories (Intake - Burned):</strong>{" "}
        <span style={{ color: netCalories > 0 ? "red" : "green" }}>
          {netCalories} kcal
        </span>
      </p>
<br></br>
      {/*step tracker input form */}
    <h1>Step Tracker</h1>  
<h2>Set your step goal</h2>
<input
    type="number"
    placeholder="Enter step goal"
    value={stepGoal}
    onChange={handleStepGoalChange}
  />
      {/* Preset Goal Options */}
      <h2> Or choose a preset goal:</h2>
  <select onChange={handleStepGoalChange} value={stepGoal}>
    <option value="5000">5,000 steps</option>
    <option value="10000">10,000 steps</option>
    <option value="15000">15,000 steps</option>
    <option value="20000">20,000 steps</option>
    <option value="25000">25,000 steps</option>
  </select>
  
  <h2>Log Your Steps</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
      type="number"
      placeholder="Enter your steps"
      value={stepCount}
      onChange= {stepCount => setStepCount(stepCount.target.value)}
      />
          <label> Enter date</label>
      <input 
      type="date"
      value= {stepDate}
      onChange={(e)=>  setStepDate(e.target.value)}
      />
      
      <button onClick={addSteps}>Add Steps</button>

      {/*Display step list */}
      <h3>Logged Steps</h3>
      <table border="1" style={{ width: "100%", marginTop: "10px" }}>
       <thead>
        <tr>
          <th>Steps</th>
          <th>Date</th>
        </tr>
        </thead> 
        <tbody>
          {steps.map((step, index) => (

            <tr key={index}>
              <td>{step.stepCount}</td>
              <td>{step.stepDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* Step progress bar */}
      <h3>Step Progress</h3>
      <div style={{ width: "100%", border: "1px solid #333", borderRadius: "5px" }}>
  <div 
  style={{
    width: `${stepProgress}%`,
    backgroundColor: stepProgress >= 100 ? "green": "blue",
    height: "20px",
    borderRadius:"5px",
  }}
  />
  </div>
  <p> {totalSteps} / {stepGoal} steps</p> 
  
    </div>
  );
};

export default PageThree;
