import React from 'react'

import JobCard from '../Components/JobCard'

const Home = ({jobs}) => {
    return (
        <div>
            <div className='jobs-container'>
                <h1>Available Jobs</h1>
                {
                    jobs && <div className="jobs-list">
                        {jobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Home