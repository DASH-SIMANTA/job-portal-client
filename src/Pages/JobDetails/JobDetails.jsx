import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id,title, company,deadline} = useLoaderData();
    
    return (
        <div className='m-10'>
            <h2 className='text-3xl'>job details for: {title}</h2>
            <p>apply for:{company}</p>
            <p>Deadline: {deadline}</p>
            
            
            <Link className='btn text-cyan-600' to={`/jobApply/${_id}`}>Apply Now</Link>
        </div>
    );
};

export default JobDetails;