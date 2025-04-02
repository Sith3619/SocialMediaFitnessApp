import {useState} from "react";


// list of health trackers

const HealthCalculator=()=> {

    const[weight,setWeight]= useState("");
    const [height,setHeight]= useState("");
    const [age,setAge]= useState("");
    const[ gender,setGender]= useState("");
    const [activityLevel,setActivityLevel]= useState("");
    const [bmi,setBmi]=useState(null);
    const [bmiCategory,setBmiCategory]=useState("");
    const [calorie,setCalories]=useState(null);
    const [error,setError]=useState("");

    //Bmi calculator 
const bmiCalculator=()=>{
    if(weight && height){
        const heightInMeters= height/100;
        const result= weight/(heightInMeters*heightInMeters).toFixed(2);
        setBmi(result);

        let category="";
        switch(true){
            case (result<18.5):
                category="Underweight";
                break;
            case (result>=18.5 && result<24.9):
                category="Normal weight";
                break;
            case (result>=25 && result<29.9):
                category="Overweight";
                break;
            case (result>=30):
                category="Obesity";
                break;
            default:
                category="Invalid BMI";
        }
        setBmiCategory(category);
    }else{
        setBmi("Please enter your weight and height");
        setBmiCategory("");
    }
}

//calorie calculator
const calorieCalculator=()=>{
    if(!weight || !height || !age || !gender || !activityLevel){
        setError("Please fill in all fields");
        setCalories(null);
        return;
    }
    setError("");
    let BMR;
    if (gender === "Male") {
        BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
        BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    const TDEE = BMR * parseFloat(activityLevel);

    // Calories for Different Goals
    const caloriesToLoseWeight = TDEE - 500;
    const caloriesToMaintain = TDEE;
    const caloriesToGainWeight = TDEE + 500;

    // Store results
    setCalories({
        BMR: BMR.toFixed(2),
        TDEE: TDEE.toFixed(2),
        loseWeight: caloriesToLoseWeight.toFixed(2),
        maintain: caloriesToMaintain.toFixed(2),
        gainWeight: caloriesToGainWeight.toFixed(2),
    });
}


return(
    <>
    <h1>Health Calculator</h1>
 {/* BMI calculator */}
    <h2> BMI Calculator</h2>
    <p> Fill in the fields to calculate your BMI</p>
    
   <label htmlFor="weight">Weight</label>
   <input name="weight" type="number" placeholder="Enter your weight in kg" value={weight} onChange={(e)=> setWeight(e.target.value)}>
   </input>
   <br/>
   <label for="height">Height</label>
   <input name="height" type="number" placeholder="Enter your height in cm" value={height} onChange={(e)=> setHeight(e.target.value)}></input>
    <br/>
    <button name="BMibtn" onClick={bmiCalculator} >Calculate BMI</button>
    <br/>
    <div className="bmiResult"> 
    <p>Your BMI is: {bmi!==null ? bmi: "N/A"} </p>
    <p>Category: {bmiCategory}</p>
    </div>
    <br/>

{/* Calories calculator */}
    <h2> Calorie Calculator</h2>
    <p> Fill in the fields to calculate your daily calorie needs</p>
    <label htmlFor="calorieWeight">Weight</label>
    <input name="calorieWeight" type="number" placeholder="Enter your weight in kg" value={weight} onChange={(e)=> setWeight(e.target.value)}></input>
    <br/>
    <label htmlFor="calorieHeight">Height</label>
    <input name="calorieHeight" type="number" placeholder="Enter your height in cm" value={height} onChange={(e)=> setHeight(e.target.value)}></input>
    <br/>
    <label htmlFor="age">Age</label>
    <input name="age" type="number" placeholder="Enter your age in years" value={age} onChange={(e)=> setAge(e.target.value)}></input>
    <br/>
    <label htmlFor="gender">Gender</label>
     <select value={age} onChange={e=> setGender(e.target.value)}>
        <option value="Male"> Male</option>
        <option value="Female">Female</option>
     </select>
        <br/>
        <label htmlFor="activityLevel">Activity Level</label>
        <select value={activityLevel} onChange={e=> setActivityLevel(e.target.value)}>
            <option value="">Select Activity Level</option>
            <option value="1.2">Sedentary(Little to no exercise) </option>
            <option value="1.375"> Lightly active(1-3 days per week)</option>
            <option value="1.55"> Moderately Active(3-5 days per week)</option>
            <option value="1.725">Very Active(6-7 days per week)</option>
            <option value="1.9"> Super Active(intense daily exercise)</option>
        </select>
        <br/>
        <button name="calorieBtn" onClick={calorieCalculator}>Calculate Calories</button>
        <br/>
        {/* Display error */}
        {error && <p style={{color:"red"}}>{error}</p>}
        {/* Display calorie results */}
        {calorie && (
            <div className="calorieResult">
                <h2>Calorie Results</h2>
                <p> <strong>: {calorie.BMR} </strong>BMR kcal/day</p>
                <p> <strong>TDEE: {calorie.TDEE}</strong>BMR kcal/day</p>
                <p> <strong>Calories to Lose Weight:</strong> {calorie.loseWeight} kcal/day</p>
                <p> <strong>Calories to Maintain Weight:</strong> {calorie.maintain} kcal/day</p>
                <p><strong> Calories to Gain Weight:</strong> {calorie.gainWeight} kcal/day</p>
            </div>
        )}
   </>
)


}
export default HealthCalculator;
