import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Navbar/Addproduct/Addproduct'
import ListProduct from '../../Components/Navbar/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>

      </Routes>
    </div>
  )
}

export default Admin
