import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const path = `/job/${job.id}`;

  // const applications = useSelector(state => state.application.applications);
  // const application = applications.find(app => app.jobID === job.id);

  // const [isApplied, setIsApplied] = useState(false);

  // useEffect(()=>{
  //   if (application !== undefined) {
  //     setIsApplied(true);
  //   }
  // }, []);
  

  return (
    <div className="job-card">
      <div className="job-img">
        <img src={job.image} alt={job.title} />
      </div>
      <div className='job-brief'>
        <h2>{job.title}</h2>
        <h4>{job.company}</h4>
        <p>{job.description}</p>
        {
          // isApplied ? <button className='viewBtn' disabled>Applied</button> :
            <Link to={path} className='viewBtn'>View Details</Link>
        }

      </div>
    </div>
  )
}

export default JobCard