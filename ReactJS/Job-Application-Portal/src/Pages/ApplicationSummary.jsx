import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

const ApplicationSummary = () => {
  const applications = useSelector(state => state.application.applications)
  const { id } = useParams();
  // console.log(id);

  const application = applications.find(app => app.id === id);
  console.log(application);

  
  const path = application !== "undefined" ? `/apply/${application.jobID}` : '/';

  return (
    <div className='appSummary-container'>
      {application && <div>
        <div className='appSummary'>
          <h1>Personal Information</h1>
          <div className='appRow'>
            <p>Name: </p>
            <p>{application.name}</p>
          </div>
          <div className='appRow'>
            <p>Email: </p>
            <p>{application.email}</p>
          </div>
          <div className='appRow'>
            <p>Phone: </p>
            <p>{application.phone}</p>
          </div>
          <div className='appRow'>
            <p>Years of Experience: </p>
            <p>{application.experience}</p>
          </div>
          <div className='appRow'>
            <p>Skills: </p>
            <p>{application.skills}</p>
          </div>
          <div className='appRow'>
            <p>Cover Letter: </p>
            <p>{application.file}</p>
          </div>
          <div className='appRow'>
            <p>Start Date: </p>
            <p>{application.startDate}</p>
          </div>

          <h1>Job Details</h1>
          <div className='appRow'>
            <p>Title: </p>
            <p>{application.jobTitle}</p>
          </div>
          <div className='appRow'>
            <p>Company: </p>
            <p>{application.jobCompany}</p>
          </div>
        </div>
        <div className='actions'>
          <Link to={path} className='viewBtn'>Edit Application</Link>
          <Link to='/applications' className='viewBtn'>Save Application</Link>
        </div>
      </div>
      }
    </div>
  )
}

export default ApplicationSummary