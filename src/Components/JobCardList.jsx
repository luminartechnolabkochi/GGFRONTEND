import React, { useEffect, useState } from 'react'
import { jobListApi } from '../services/allApis'
import JobCard from './JobCard'

const JobCardList = () => {

    const [jobCards,setJobCards]=useState([])
    console.log(jobCards);
    useEffect(()=>{

        fetchJobCards()

    },[])

    const fetchJobCards=async()=>{

        let data=await jobListApi()
        console.log(data);
        setJobCards(data.data);
    }

  return (
    <div>

        {jobCards?.map(job=>(
            <div className='border border-2 p-2'>
    

                <div>{job?.customer_name}</div>

                <div>{job?.total_amount}</div>

            </div>
        ))}
      
    </div>
  )
}

export default JobCardList
