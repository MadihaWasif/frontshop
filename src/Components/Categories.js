import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './Footer'

function Categories() {
    const [data, setRecords] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3002/api')
            .then(res => setRecords(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <h2 className='text-center mt-4 mb-3 ' style={{ fontStyle: 'oblique' }}>Here All Categories are available!</h2>
            <p className='text-center fs-4 ' style={{ fontFamily: 'monospace' }}>Different types of fashion wear are available here. <br />
                You can Try our new Outfits from shoppingApp. We only sell new and trendiest clothes. <br />


            </p>
            <br /><hr />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.map((dt, i) => (
                        <div key={i} >
                            <div class="col">
                                <div class="card my-5 mx-5">
                                    <img src={dt.image} class="card-img-top" alt="..." />
                                    <div class="card-body bg-warning-subtle text-dark">
                                        <h5 class="card-title">{dt.id}</h5>
                                        <p class="card-text"><strong>{dt.name}</strong></p>
                                        <p class="card-text fw-bold fs-5">{dt.title}</p>
                                        <p class="card-text">{dt.description}</p>
                                        <p class="card-text">${dt.price}</p>
                                    </div>
                                    <a href="/buy" className='btn btn-danger m-3 w-25'>Buy Now</a>

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
           <div><Footer /></div>
        </>


    )
}

export default Categories
