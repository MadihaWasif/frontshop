import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Display() {
    const [value, setValue] = useState();
    useEffect(()=> {
        axios.get('http://localhost:3002/display')
        .then(res=> setValue(res.data))
        .catch(err=> console.log(err))
    })
  return (
    <div>
      <table>
      <thead>
      <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Address</th>
      </tr>
      </thead>
      <tbody>
      {
        value && value.map((dt, ind)=> (
            <tr key={ind}>
            <td>{dt.id}</td>
            <td>{dt.name}</td>
            <td>{dt.Address}</td>
            <Link to='/buy' className='btn btn-secondary'>Select</Link>
            </tr>
        ))
      }
      </tbody>
      </table>
    </div>
  )
}

export default Display
