import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  // console.log(id);
  const job = jobs.find(p => p.id === id);

  const path = `/apply/${job.id}`;

  const applications = useSelector(state => state.application.applications);
  const application = applications.find(app => app.jobID === job.id);

  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    if (application !== undefined) {
      setIsApplied(true);
    }
  }, []);

  return (
    <>
      <div className='jobDetail-container'>
        <div className="job-details">
          <div className="job-card">
            <div className='job-brief'>
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
              <div>Location: {job.location}</div>
              <div>Salary: {job.salaryRange}</div>
            </div>
            <div className="job-img">
              <img src={job.image} alt={job.title} />
            </div>
          </div>
          <div className='job-description'>
            <h2>Job Description:</h2>
            <pre>{job.description}</pre>
          </div>
        </div>
        {
          isApplied ? <button className='viewBtn' style={{backgroundColor:'gray'}} disabled>Applied</button> :
            <Link to={path} className='viewBtn'>Apply Now</Link>
        }
      </div>
    </>
  )
}

export default JobDetails