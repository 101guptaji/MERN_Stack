import React from 'react'
import { useSelector } from 'react-redux';
import ApplicationCard from '../Components/ApplicationCard';

const ApplicationList = () => {
  const applications = useSelector(state => state.application.applications);
  console.log(applications);

  return (
    <div>
      <div className='jobs-container'>
        <h1>Applications History</h1>
        {
          applications && <div className="jobs-list">
            {applications.map(application => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default ApplicationList