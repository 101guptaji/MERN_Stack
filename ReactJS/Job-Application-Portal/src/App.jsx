import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import JobDetails from './Pages/JobDetails';
import ApplicationForm from './Pages/ApplicationForm';
import ApplicationList from './Pages/ApplicationList';
import ApplicationSummary from './Pages/ApplicationSummary';
import Profile from './Pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from './Redux/Slice/jobsSlice';
import Header from './Components/Header';

function App() {

  const jobs = useSelector(state => state.jobs.jobs);

  const dispatch = useDispatch()

  const url = 'https://script.google.com/macros/s/AKfycbz-K4XNZgGx0zp21QpNbORJolaMj5o4d7JJOB2lOXvULW_LQ6wsp1VnLU4uB-4m9lrSLw/exec';

  async function fetchData() {
    try {
      await fetch(url)
        .then(response => response.json())
        .then((data) => {
          if(data)
            dispatch(setJobs([...jobs, ...data]))
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    fetchData();

  }, [])


  console.log(jobs);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home jobs={jobs} />} />
          <Route exact path='/job/:id' element={<JobDetails jobs={jobs} />} />
          <Route exact path='/apply/:id' element={<ApplicationForm jobs={jobs} />} />
          <Route exact path='/applications' element={<ApplicationList />} />
          <Route exact path='/applications/:id' element={<ApplicationSummary />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
