import React, { useState } from 'react'
import { addWorkApi } from '../services/allApis'

const WorkForm = ({id,setRefreshRequired}) => {

    

    const [work,setWork]=useState({title:"",notes:"",amount:""})

    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        console.log(work);
        
        let result=await addWorkApi(id,work)
        
        console.log(result);
        setRefreshRequired(result?.data)
    }

    

  return (
    
    <div>
       <div className='container mt-5 p-4'>
      
      <form action="" className='border shadow p-5 rounded' onSubmit={handleSubmit}>

        <h1 className='text-center'>Add Work</h1>

        <div className="mb-3">
          <label htmlFor="">Title</label>
          <input type="text" className='form-control' onChange={(e)=>setWork({...work,title:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="">Notes</label>
          <input type="text" className='form-control'  onChange={e=>setWork({...work,notes:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="">Amount</label>
          <input type="text" className='form-control' onChange={e=>setWork({...work,amount:e.target.value})} />
        </div>
       
        <div className="mb-3">
          <input type="submit" className='form-control btn btn-outline-info' />
        </div>
      </form>
    </div>
    </div>
  )
}

export default WorkForm
