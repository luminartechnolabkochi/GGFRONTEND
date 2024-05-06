import React, { useState } from 'react'
import { addJobCardApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'



const JobCard = () => {

  const navigate=useNavigate()

  const [customer,setCustomer]=useState(
                {
                  customer_name:"",
                  vehicle_number:"",
                  running_kilometers:"",
                  phone:""
              }
          )


      const handleSubmit=async (e)=>{

        e.preventDefault()

        console.log(customer)

        const {customer_name,vehicle_number,running_kilometers,phone}=customer

        if(customer_name && vehicle_number && running_kilometers && phone){

          let result=await addJobCardApi(customer)

          console.log(result);

          if(result.status > 199 && result.status <300){

              navigate(`/jobcard/${result.data.id}`)

          }
          
        }
        else{

          alert("invalid data")
        }

      }


  return (
    <div className='container mt-5 p-4'>
      
      <form action="" className='border shadow p-5 rounded' onSubmit={handleSubmit}>

        <h1 className='text-center'>AddJobCard</h1>

        <div className="mb-3">
          <label htmlFor="">Phone</label>
          <input type="text" className='form-control' onChange={(e)=>setCustomer({...customer,phone:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="">CustomerName</label>
          <input type="text" className='form-control'  onChange={e=>setCustomer({...customer,customer_name:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="">VehicleNUmber</label>
          <input type="text" className='form-control' onChange={e=>setCustomer({...customer,vehicle_number:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="">Kms</label>
          <input type="text" className='form-control' onChange={e=>setCustomer({...customer,running_kilometers:e.target.value})} />
        </div>
        <div className="mb-3">
          <input type="submit" className='form-control btn btn-outline-info' />
        </div>
      </form>
    </div>
  )
}

export default JobCard
