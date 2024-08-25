import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [Address, setAddress] = useState();

    const navigate = useNavigate();

    const handleSubmit = (event)=> {
        event.preventDefault();
        axios.post('http://localhost:3002/login', {name, email, password, Address})
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
        navigate('/')
        alert('Your account information has been saved')
    }

    return (
        <>
        <h1 className='text-center fw-bold fs-3 text-decoration-underline'>Login Your Account <i class="bi bi-person-gear"></i></h1>
        <div className='d-flex justify-content-center align-items-center vh-100 bg-success'>
        
            <div className='bg-white p-3 rounded w-25'>
            
                <form action="" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <strong>Name</strong>
                        <input type="text" onChange={e=> setName(e.target.value)} className='form-control rounded border-3 border-success bg-success-subtle' name="name" placeholder='Enter Your Name'/>
                        

                    </div>
                    <div className='mb-3'>
                        <strong>Email</strong>
                        <input type="email" onChange={e=> setEmail(e.target.value)} className='form-control rounded border-3 border-success bg-success-subtle' placeholder='UserEmail' name="email"  />
                        
                        <p>We will never share your email with anyone else</p>
                    </div>
                    <div className='mb-3'>
                        <strong>Password</strong>
                        <input type="text" onChange={e=> setPassword(e.target.value)} className='form-control rounded border-success border-3 bg-success-subtle' placeholder='Strong Password' name="password" />
                        
                    </div>
                    <div className='mb-3'>
                        <strong>Your Address</strong>
                        <input type="text" onChange={e=> setAddress(e.target.value)} className='form-control rounded border-success border-3 bg-success-subtle' placeholder='Strong Password' name="Address" />
                        
                    </div>
                    <button type='submit' className='btn btn-warning w-100 '>Sign-Up</button>
                    


                </form>
            </div>

        </div>
        </>
    )
}

export default Login
