import React, { useEffect, useState } from 'react'
import { jobListApi, updateWorkStatusApi} from '../services/allApis'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'

import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'



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

    const updateJobStatus=async(id)=>{

        let data=await updateWorkStatusApi(id)
        
        console.log(data);
        fetchJobCards()
    }

    const generatePdf=(id)=>{

        let jobData=jobCards.find(job=>job.id==id)
        let pdf=new jspdf()

        let head=[["title","notes","amount"]]

        let body=[

        ]

        jobData?.jobs.forEach(job=>{
            body.push([job.title,job.notes,job.amount])
        })
        console.log("body",body);

        pdf.setFontSize(16)

        pdf.text("Invoice",10,10)

        autoTable(pdf,{head,body})
        pdf.text(`Total Summary: ${jobData.total_amount}`,100,50)
        // pdf.output("dataurlnewwindow")
        pdf.save("invoice.pdf")

    }

  return (
    <div>

        {jobCards?.map(job=>(
            <div className='border border-2 p-2'>
    

                <div><Link to={`/jobcard/${job?.id}`}>{job?.customer_name}</Link></div>

                <div>{job?.total_amount}</div>

                <div>
                    {job?.status=="pending"?<button className='btn btn-warning' onClick={()=>updateJobStatus(job?.id)}>MarkAsComplete</button>: <button className='btn btn-success'>Completed</button>}
                </div>

                <div>
                    {job?.status=="completed" && 
                    <button onClick={()=>generatePdf(job?.id)}>PDF</button>
                    }
                </div>


            </div>
        ))}
      
    </div>
  )
}

export default JobCardList
