import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jobCardDetailApi } from '../services/allApis'
import WorkForm from '../Components/WorkForm'
import WrokList from '../Components/WrokList'

const Works = () => {

  const [refreshRequired,setRefreshRequired]=useState("")


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
      
      <div className="section border p-5 border-3 d-flex justify-content-evenly mt-2">

        <div><h3>CustomerName:{customer_name}</h3></div>
        <div><h3>Phone:{phone}</h3></div>
        <div><h3>vehicle Num:{vehicle_number}</h3></div>

      </div>
      <WorkForm id={id} setRefreshRequired={setRefreshRequired}/>
      
      <WrokList id={id} refreshRequired={refreshRequired}/>
    </div>
  )
}

export default Works
