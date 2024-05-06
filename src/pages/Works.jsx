import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jobCardDetailApi } from '../services/allApis'

const Works = () => {

  const {id}=useParams()

  const [jobCardDetal,setJobCardDetail]=useState({})

  useEffect(()=>{
    fetchJobCard()
  },[id])

  const customer_name=jobCardDetal.customer_name;
  const phone=jobCardDetal.phone;
  const vehicle_number=jobCardDetal.vehicle_number
  console.log(jobCardDetal);

  const fetchJobCard=async()=>{
    
    const result=await jobCardDetailApi(id)
    setJobCardDetail(result?.data)

  }

  return (
    <div>
      
      <div className="section border p-5 border-3 d-flex justify-content-evenly mt-5">

        <div><h3>CustomerName:{customer_name}</h3></div>
        <div><h3>Phone:{phone}</h3></div>
        <div><h3>vehicle Num:{vehicle_number}</h3></div>

      </div>
    </div>
  )
}

export default Works
