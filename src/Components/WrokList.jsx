import React, { useEffect, useState } from 'react'
import { jobCardDetailApi } from '../services/allApis'

const WrokList = ({id,refreshRequired}) => {

    const [works,setWorks]=useState([])
    const [totalAmount,setTotalAmount] = useState("")

    useEffect(()=>{
        getUserWorks()
    },[refreshRequired])

    console.log(works);

    const getUserWorks=async()=>{

        let result=await jobCardDetailApi(id)
        console.log("resu",result);
        setTotalAmount(result?.data?.total_amount)
        setWorks(result.data.jobs)
    }

  return (
    <div style={{height:'500px'}} className='p-4'>
      

      <div className="container border p-2 mt-5 h-100 shadow">

      <h1 className='text-center mb-4'>All Works</h1>

        <table className='table p-2 table-striped mb-3'>
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
                  <td>{w?.notes}</td>
                  <td>{w?.amount}</td>
                </tr>

              ))}

              <tr>
                <td></td>
                <td></td>
                <td>Subtotal : {totalAmount} </td>
              </tr>
         </tbody>
        </table>
      </div>
    </div>
  )
}

export default WrokList
