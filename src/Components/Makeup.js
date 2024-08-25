import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Makeup() {
    const [datas, setData] = useState([]);
    useEffect(()=> {
        axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(res=> res.data)
        .then(data=> setData(data));
    })
  return (
    <>
            <h2 className='text-center mt-4 text-decoration-underline' style={{ fontFamily: 'cursive' }}>Makeup Section!For Beauyies..</h2>
            <div className='text-center mt-3 fs-5' style={{ fontFamily: 'cursive' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium! <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure voluptas neque inventore sunt. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <br /><hr />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    datas.map((dt, i) => (
                        <div key={i} >
                            <div class="col">
                                <div class="card my-5 mx-5 col-md-8 bg-dark-subtle ">
                                    <img src={dt.api_featured_image} class="card-img-top" alt="..." />
                                    <div class="card-body border-dark text-dark">
                                        <h5 class="card-title"></h5>
                                        <p class="card-text"><strong className='fs-4'>{dt.brand}</strong></p>
                                        <p class="card-text">{dt.category}</p>
                                        <p class="card-text">{dt.name}</p>
                                        <p class="card-text">{dt.price}</p>

                                    </div>
                                    <div >
                                    <Link to={`buy/${dt.id}`} className='left btn btn-primary'>Buy Now</Link>
                                    </div>
                                    <div >
                                    <Link to='/cart' className='right btn btn-success '>Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <br /> <hr />
            <br />
            <div><Footer /></div>
        </>
  )
}

export default Makeup
