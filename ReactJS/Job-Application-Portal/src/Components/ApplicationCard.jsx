import React from 'react'

import { Link } from 'react-router-dom';

const ApplicationCard = ({ application }) => {
  const path = `/applications/${application.id}`;

  return (
    <div className="job-card">
      <div className='job-brief'>
        <h2>{application.jobTitle}</h2>
        <h4>{application.jobCompany}</h4>
        <p>{application.name} applied for this post on {new  Date(application.dateSubmitted).toLocaleDateString()}.</p>
        <Link to={path} className='viewBtn'>View Details</Link>
      </div>
    </div>
  )
}

export default ApplicationCard