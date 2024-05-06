
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import JobCard from './pages/JobCard'
import Works from './pages/Works'
import Header from './Components/Header'
import Footer from './Components/Footer'




function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/jobcard/add' element={<JobCard />}/>
      <Route path='/jobcard/:id' element={<Works />}/>

    </Routes>
    <Footer />
 </>
  )
}

export default App
