import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Mens() {
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => res.data)
      .then(data=> setData(data));
  })
  return (
    <>
            <h2 className='text-center mt-4 text-decoration-underline' style={{ fontFamily: 'cursive' }}>Mens Section! Most Trendy</h2>
            <div className='text-center mt-3 fs-5' style={{ fontFamily: 'cursive' }}>
                "Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live."
            </div>
            <br /><hr />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    datas.map((dt, i) => (
                        <div key={i} >
                            <div class="col">
                                <div class="card my-5 mx-5 col-md-8 bg-dark-subtle ">
                                    <img src={dt.image} class="card-img-top" alt="..." />
                                    <div class="card-body border-dark text-dark">
                                        <h5 class="card-title">{dt.id}</h5>
                                        <p class="card-text"><strong className='fs-4'>{dt.title}</strong></p>
                                        <p class="card-text">{dt.category}</p>
                                        <p class="card-text">{dt.description}</p>
                                        <p class="card-text">{dt.price}</p>
                                        

                                    </div>
                                    <Link to={`buy/${dt.id}`} className='btn btn-dark text-light float-right'>Buy</Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <br /> <hr />

            <div className="container d-flex justify-content-between">
              <button  className='btn btn-dark' > &larr; Previous
              </button>
              <button  className='btn btn-dark' >Next &rarr;</button>
            </div>

            <br />
            <div><Footer /></div>
        </>
    

  )
}

export default Mens
