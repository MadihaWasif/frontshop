import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cash() {
    const [value, setValue] = useState();
    const handleClick = ()=> {
        alert('Your Order has been Placed')
        
        
    }
    return (
        <div className=''>
            <h3 className='m-3'>Payment Method</h3>
            <div className='tag w-100 h-80px'>.</div>
            <hr />
            <div className="container mt-4">
                <div className='bord w-50 h-100px p-2 rounded mt-5 mb-4'>
                <input type='radio' className='fs-3 ms-2' name='cash' value='Cash' /> &nbsp; &nbsp;
                    <label htmlFor="Cash" className='fs-4 ms-5'>Cash on Delievry &nbsp; <span className='fs-3'>&#128181;</span></label> 
                </div>
                <br />
                <div className="bord w-50 h-100px p-2 rounded">
                    <input type="radio" name='cash' className='fs-3 ms-2' value='Upi' />&nbsp; &nbsp;
                    <label htmlFor="Upi" className='fs-4 ms-5'>Upi Payment &nbsp; <span className='fs-3'>&#128179;</span></label> <br /><br />
                </div>
                <br />
                <div className="bord w-50 h-100px p-2 rounded">
                <input type="radio" name='cash' value='pay'  className='fs-3 ms-2' />&nbsp; &nbsp;
                    <label htmlFor="pay" className='fs-4 ms-5'>PhonePay &nbsp; <span className='fs-3'>&#128178;</span></label>
                </div>
            </div>
            <br /> 
            <hr />
            <div className="container text-center">
            <button className='btn btn-warning mt-5 fs-5' onClick={handleClick}>Place Order</button>
            </div>
            <br />

            <center><Link to='/' className='btn btn-success'>Continue Your Shopping..</Link></center>
        </div>
    )
}

export default Cash
