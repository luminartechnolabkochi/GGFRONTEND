import React from 'react'
import { Button } from 'react-bootstrap'

import {Link} from 'react-router-dom'
import JobCardList from '../Components/JobCardList'


const Home = () => {
  return (
    <div className='container d-flex justify-content-between flex-column mt-5'>
      <div className='d-flex justify-content-between my-5'>
        <h1>Home</h1>
        <Link to={"/jobcard/add"}>   <Button variant="primary"  className=''>Add</Button></Link>{' '}
      </div>
      <JobCardList></JobCardList>
    </div>
  )
}

export default Home
