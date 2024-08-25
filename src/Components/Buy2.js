import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Buy2() {
    const location = useLocation();
    useEffect(() => {
      console.log(location)
    }, [location]);
  
    const [value, setValue] = useState();
    const { id } = useParams();
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products' + id)
        .then(res => setValue(res.data))
        .catch(err => console.log(err))
    })
  
  
    const toDateFunction = () => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const WeekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const currentDate = new Date();
      const date = `${WeekDays[currentDate.getDay() + 3]} ${currentDate.getDate() + 3} ${months[currentDate.getMonth()]
        }`;
      return date;
    };


  return (
    <div className="buy">
    <div className="">
      <h2 className='mt-3 mb-3 ms-5'>REVIEW YOUR ORDER</h2>
      <hr />
      <div className="container">
        <div className="row gx-0 align-item-center">
          <div className="col-md-3">
            <ol type='1' start='1'>
              <li className={`${location.pathname == '/buy' ? 'active' : ''}`} to='/buy'>Review</li>
            </ol>
          </div>
          <div className="col-md-3">
            <ol type='1' start='2'>
              <li>Payment</li>
            </ol>
          </div>
        </div>

      </div>
      <hr />
      <div>
        <span className='fs-1 ms-5 mb-4'>&#128666;</span>&nbsp; &nbsp; <span className='fs-3 mb-4'>Estimated Delievery by {toDateFunction()}</span>
      </div>
      <hr />
    </div>
    <br />
    <div className="container">
      <h3 className='ms-2 mb-5'>Here is Your item selected to Proceed</h3>
      <div className="container">
        <div className="row gx-0 align-item-center">
          <div className="col-lg-6 w-25">
            <div class="row ">
              {
                value && value.map((dt, i) => (
                  <div key={i} >
                    <div class="col">
                      <div class="card my-5 mx-5 col-lg-8 bg-danger-subtle ">
                        <img src={dt.image} class="card-img-top" alt="..." />
                        <div class="card-body border-dark text-dark">

                          <p class="card-text"><strong className='fs-4'>{dt.title}</strong></p>
                          <p class="card-text">{dt.description}</p>
                          <p class="card-text">{dt.price}</p>

                        </div>

                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="col-lg-6 mt-5">
            {
              value && value.map((dt, i) => (
                <div key={i}>
                
                  <span>{dt.title}:</span> &nbsp; <span>{dt.description}</span>
                  <p>₹{dt.price}</p>
                  <p>All issues easy returns</p>
                </div>

              ))
            }
          </div>

        </div>
      </div>
    </div>
    <hr />
    <hr />
    
    <div className="container">
      <h4>Total Amount to Pay</h4>
      <div>
        {
          value && value.map((dt, ind) => (
            <div key={ind}>
              <div className="container">
                <div className="row gx-0 align-item-center">
                  <div className="col-lg-6">
                  <p className='mt-3 fs-5'>Original Price: </p>
                  <p className='fs-5'>Discount on Item:</p>
                  <p className='fs-5'>Total Amount:</p>
                  </div>
                  <div className="col-lg-6">
                  <p className='mt-3 fs-5'>₹{dt.price}</p>
                  <p className='fs-5'>%-200</p>
                  <p className='fs-5'>₹{dt.price-200}</p>

                  
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div className='tag w-100 h-80px'>.</div>
    <hr />
    <div className="container text-center">
    <Link className='btn btn-primary fs-4' to='/cash'>Continue</Link>
    </div>
    <br />

    
    
  </div>
  )
}

export default Buy2
