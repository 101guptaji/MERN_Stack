// This is the main component of the application. It will be the parent component of all other components.
import './App.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "workouts" using the useState hook
  const [workouts, setWorkouts] = useState([]);

  // Get workouts from the server
  const getWorkouts = async () => {
    await axios.get('http://localhost:8080/api/workouts')
      .then(res => {
        // console.log(res.data);
        setWorkouts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getWorkouts();
  }, []);

  // post a workout to the server
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    reps: '',
    load: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const postWorkout = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (isEdit && formData.id) { // update the workout
        res = await axios.patch(`http://localhost:8080/api/workouts/${formData.id}`, formData);
      }
      else { // add a new workout
        res = await axios.post('http://localhost:8080/api/workouts', formData);
      }

      if (res && res.data) {
        console.log(res.data);
        setFormData({
          id: null,
          name: '',
          reps: '',
          load: ''
        });
        getWorkouts();
      }
      else {
        console.log("Error in posting workout");
      }
    }
    catch (err) {
      console.log(err);
    }

}

  // update a workout on the server
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = (workout) => {
    setFormData({
      id: workout._id,
      name: workout.name,
      reps: workout.reps,
      load: workout.load
    });
    setIsEdit(!isEdit);
  }

  // delete a workout from the server
  const deleteWorkout = async (id) => {
    await axios.delete(`http://localhost:8080/api/workouts/${id}`)
      .then(res => {
        console.log(res.data);
        getWorkouts();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Workout Tracker</h1>
      <div>
        <ul>
          {workouts && workouts.map(workout => (
            <li key={workout._id}>
              <h2>{workout.name}</h2>
              <p>Reps: {workout.reps}</p>
              <p>Load: {workout.load}</p>
              <button onClick={() => toggleEdit(workout)}>Edit</button>
              <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>{isEdit ? "Edit Workout" : "Add Workout"}</h1>
        <form>
          <div>
            <label htmlFor="name">Exercise Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="reps">Reps:</label>
            <input type="number" id="reps" name="reps" value={formData.reps} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="load">Weight(Kg):</label>
            <input type="number" id="load" name="load" value={formData.load} onChange={handleChange} />
          </div>
          <br />
          <button type="submit" onClick={postWorkout}> {isEdit ? "Edit Workout" : "Add Workout"}</button>
        </form>
      </div>
    </div>
  );
}

export default App;
