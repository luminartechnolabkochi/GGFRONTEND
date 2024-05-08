import React from 'react'

const JobCard = (props) => {
  return (
    <div>
      <div className='border border-2 p-2'>
    

    <div>{props.job.customer_name}</div>

    <div>{props.total_amount}</div>

  </div>
    </div>
  )
}

export default JobCard
