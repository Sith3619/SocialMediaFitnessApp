import React, { useState, useEffect } from "react";
import { db, auth } from "../components/firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function CustomWorkoutPlans() {
  const [user] = useAuthState(auth);
  const [plans, setPlans] = useState([]);
  const [newPlanName, setNewPlanName] = useState("");
  const [newExercise, setNewExercise] = useState("");
  const [newReps, setNewReps] = useState("");
  const [newSets, setNewSets] = useState("");

  useEffect(() => {
    if (user) {
      const fetchPlans = async () => {
        const userPlansRef = collection(db, "workoutPlans");
        const q = query(userPlansRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const loadedPlans = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlans(loadedPlans);
      };
      fetchPlans();
    }
  }, [user]);

  const handleAddPlan = async () => {
    if (newPlanName && newExercise && newReps && newSets && user) {
      const newPlan = {
        userId: user.uid,
        name: newPlanName,
        exercise: newExercise,
        reps: newReps,
        sets: newSets,
      };
      await addDoc(collection(db, "workoutPlans"), newPlan);
      setPlans([...plans, newPlan]);
      setNewPlanName("");
      setNewExercise("");
      setNewReps("");
      setNewSets("");
    }
  };

  const handleDeletePlan = async (id) => {
    await deleteDoc(doc(db, "workoutPlans", id));
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Custom Workout Plans</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Plan Name"
          value={newPlanName}
          onChange={(e) => setNewPlanName(e.target.value)}
          className="mr-2 p-1 border rounded"
        />
        <input
          type="text"
          placeholder="Exercise"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          className="mr-2 p-1 border rounded"
        />
        <input
          type="number"
          placeholder="Reps"
          value={newReps}
          onChange={(e) => setNewReps(e.target.value)}
          className="mr-2 p-1 border rounded"
        />
        <input
          type="number"
          placeholder="Sets"
          value={newSets}
          onChange={(e) => setNewSets(e.target.value)}
          className="mr-2 p-1 border rounded"
        />
        <button
          onClick={handleAddPlan}
          className="ml-2 p-1 bg-blue-500 text-white rounded"
        >
          Add Plan
        </button>
      </div>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id} className="p-2 bg-gray-100 rounded mb-2">
            <h3 className="text-xl">{plan.name}</h3>
            <p>Exercise: {plan.exercise}</p>
            <p>Reps: {plan.reps}</p>
            <p>Sets: {plan.sets}</p>
            <button
              onClick={() => handleDeletePlan(plan.id)}
              className="mt-1 p-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomWorkoutPlans;
