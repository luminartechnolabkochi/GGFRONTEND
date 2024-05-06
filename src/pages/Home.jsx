import React from 'react'
import { Button } from 'react-bootstrap'

import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className='container d-flex justify-content-between mt-5'>
      <h1>Home</h1>
   <Link to={"/jobcard/add"}>   <Button variant="primary"  className=''>Add</Button></Link>{' '}
    </div>
  )
}

export default Home
