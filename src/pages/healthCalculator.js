import { useState } from "react";
import "./pageStyles/healthCalculator.css";

const HealthCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [calorie, setCalories] = useState(null);
  const [error, setError] = useState("");
  const [bmrError, setBmrError] = useState("");

  const [bmrWeight, setBmrWeight] = useState("");
  const [bmrHeight, setBmrHeight] = useState("");

  const bmiCalculator = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const result = weight / (heightInMeters * heightInMeters);
      const finalResult = result.toFixed(2);
      setBmi(finalResult);

      let category = "";
      switch (true) {
        case result < 18.5:
          category = "Underweight";
          break;
        case result >= 18.5 && result < 24.9:
          category = "Normal weight";
          break;
        case result >= 25 && result < 29.9:
          category = "Overweight";
          break;
        case result >= 30:
          category = "Obese";
          break;
        default:
          category = "Invalid BMI";
      }
      setBmiCategory(category);
    } else {
      setError("Please enter your weight and height");
      setBmiCategory("");
    }
  };

  const bmrCalculator = () => {
    if (!bmrWeight || !bmrHeight || !age || !gender || !activityLevel) {
      setBmrError("Please fill in all fields");
      setCalories(null);
      return;
    }
    if (age < 15 || age > 80) {
      setError("Ages should be between 15 and 80");
      setCalories(null);
    }
    setBmrError("");
    let BMR;
    if (gender === "Male") {
      BMR = 10 * bmrWeight + 6.25 * bmrHeight - 5 * age + 5;
    } else if (gender === "Female") {
      BMR = 10 * bmrWeight + 6.25 * bmrHeight - 5 * age - 161;
    }

    const TDEE = BMR * parseFloat(activityLevel);

    const caloriesToLoseWeight = TDEE - 500;
    const caloriesToMaintain = TDEE;
    const caloriesToGainWeight = TDEE + 500;

    setCalories({
      BMR: BMR.toFixed(2),
      TDEE: TDEE.toFixed(2),
      loseWeight: caloriesToLoseWeight.toFixed(2),
      maintain: caloriesToMaintain.toFixed(2),
      gainWeight: caloriesToGainWeight.toFixed(2),
    });
  };

  return (
    <div className="health-calculator">
      <h1 className="heading">Health Calculator</h1>

      <div className="calculator-container">
        <h2>BMI Calculator</h2>
        <div className="bmi-info">
          <p>
            Body Mass Index (BMI) is a measure of body fat based on height and
            weight. It is used to assess whether a person has a healthy body
            weight for their height.
          </p>
        </div>
        <p>Fill in the fields to calculate your BMI</p>

        <div className="form-container">
          <label htmlFor="weight">Weight</label>
          <input
            name="weight"
            type="number"
            placeholder="Enter your weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height">Height</label>
          <input
            name="height"
            type="number"
            placeholder="Enter your height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button className="Btn" onClick={bmiCalculator}>
            Calculate BMI
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="bmiResult">
          <p>Your BMI is: {bmi !== null ? bmi : "N/A"}</p>
          <p>Category: {bmiCategory}</p>
        </div>
      </div>

      <div className="calculator-container">
        <h2>BMR Calculator</h2>
        <div className="BMR-info">
          <p>
            Basal Metabolic Rate (BMR) is the number of calories your body needs
            to maintain basic physiological functions at rest.
          </p>
        </div>
        <p>Fill in the fields to calculate your daily calorie needs</p>

        <div className="form-container">
          <label htmlFor="bmrWeight">Weight</label>
          <input
            name="bmrWeight"
            type="number"
            placeholder="Enter your weight in kg"
            value={bmrWeight}
            onChange={(e) => setBmrWeight(e.target.value)}
          />
          <label htmlFor="bmrHeight">Height</label>
          <input
            name="bmrHeight"
            type="number"
            placeholder="Enter your height in cm"
            value={bmrHeight}
            onChange={(e) => setBmrHeight(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="number"
            placeholder="Enter your age in years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="gender">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label htmlFor="activityLevel">Activity Level</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="">Select Activity Level</option>
            <option value="1.2">Sedentary (Little to no exercise)</option>
            <option value="1.375">Lightly active (1-3 days per week)</option>
            <option value="1.55">Moderately Active (3-5 days per week)</option>
            <option value="1.725">Very Active (6-7 days per week)</option>
            <option value="1.9">Super Active (intense daily exercise)</option>
          </select>
          <button className="Btn" onClick={bmrCalculator}>
            Calculate BMR
          </button>
        </div>

        {bmrError && <p style={{ color: "red" }}>{bmrError}</p>}
        {calorie && (
          <div className="bmrResult">
            <h2>Calorie Results</h2>
            <p>
              <strong>BMR:</strong> {calorie.BMR} kcal/day
            </p>
            <p>
              <strong>Total Daily Energy Expenditure (TDEE):</strong>{" "}
              {calorie.TDEE} kcal/day
            </p>
            <p>
              <strong>Calories to Lose Weight:</strong> {calorie.loseWeight}{" "}
              kcal/day
            </p>
            <p>
              <strong>Calories to Maintain Weight:</strong> {calorie.maintain}{" "}
              kcal/day
            </p>
            <p>
              <strong>Calories to Gain Weight:</strong> {calorie.gainWeight}{" "}
              kcal/day
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthCalculator;
