import React, { useEffect, useState } from 'react'
import { jobCardDetailApi } from '../services/allApis'

const WrokList = ({id,refreshRequired}) => {

    const [works,setWorks]=useState([])

    useEffect(()=>{
        getUserWorks()
    },[refreshRequired])

    console.log(works);

    const getUserWorks=async()=>{

        let result=await jobCardDetailApi(id)

        setWorks(result.data.jobs)
        

    }

  return (
    <div>
      <h1>All Works</h1>

      <div className="container">

        <table className='table p-2'>
            <tr>
                <td>Tile</td>
                <td>Note</td>
                <td>Amount</td>
            </tr>
         <tbody>
            {
              works?.map(w=>(

                <tr>
                  <td>{w?.title}</td>
                  <td>{w?.description}</td>
                  <td>{w?.amount}</td>
                </tr>

              ))}
         </tbody>
        </table>
      </div>
    </div>
  )
}

export default WrokList
