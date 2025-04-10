import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "../components/firebase/firebase";
import "./pageStyles/workoutPlans.css";

const WorkoutPlans = () => {
  const [plans, setPlans] = useState([]);
  const [newPlanName, setNewPlanName] = useState("");
  const [newExercise, setNewExercise] = useState("");
  const [newReps, setNewReps] = useState("");
  const [newSets, setNewSets] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "workout-plans"));
        const workoutPlans = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlans(workoutPlans);
      } catch (error) {
        console.error("Error fetching workout plans:", error);
        setError("Failed to fetch workout plans");
      }
    };

    fetchWorkoutPlans();
  }, []);

  const handleAddPlan = async () => {
    if (!newPlanName || !newExercise || !newReps || !newSets) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "workout-plans"), {
        name: newPlanName,
        exercise: newExercise,
        reps: newReps,
        sets: newSets,
      });

      setPlans([
        ...plans,
        {
          id: docRef.id,
          name: newPlanName,
          exercise: newExercise,
          reps: newReps,
          sets: newSets,
        },
      ]);
      setNewPlanName("");
      setNewExercise("");
      setNewReps("");
      setNewSets("");
      setSuccessMessage("Workout plan added successfully!");
    } catch (error) {
      console.error("Error adding workout plan:", error);
      setError("Failed to add workout plan");
    }
    setLoading(false);
  };

  const handleDeletePlan = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "workout-plans", id));
      setPlans(plans.filter((plan) => plan.id !== id));
      setSuccessMessage("Workout plan deleted successfully!");
    } catch (error) {
      console.error("Error deleting workout plan:", error);
      setError("Failed to delete workout plan");
    }
    setLoading(false);
  };

  return (
    <div className="workout-plan-container">
      <h2>Custom Workout Plans</h2>
      <i style={{fontSize:18}}>Create and keep track of your personal goals.</i>
      <br></br>


      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="workout-plan-form">
        <input
          type="text"
          placeholder="Plan Name"
          value={newPlanName}
          onChange={(e) => setNewPlanName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Exercise"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reps"
          value={newReps}
          onChange={(e) => setNewReps(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sets"
          value={newSets}
          onChange={(e) => setNewSets(e.target.value)}
        />
        <button onClick={handleAddPlan} disabled={loading}>
          {loading ? "Adding..." : "Add Plan"}
        </button>
      </div>

      <div className="workout-plan-section">
        {plans.map((plan) => (
          <div className="workout-plan-card" key={plan.id}>
            <h3>{plan.name}</h3>
            <p>Exercise: {plan.exercise}</p>
            <p>Reps: {plan.reps}</p>
            <p>Sets: {plan.sets}</p>
            <button onClick={() => handleDeletePlan(plan.id)}>
              {loading ? "Deleting..." : "Finished"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
