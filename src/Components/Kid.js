import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import axios from 'axios'
function Kid() {
  const[datas, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then(res => res.data)
    .then(data=> setData(data))
    
  })
  return (
    <>
            <h2 className='text-center mt-4 text-decoration-underline' style={{ fontFamily: 'cursive' }}>Handbag Section! Most Trendy</h2>
            <div className='text-center mt-3 fs-5' style={{ fontFamily: 'cursive' }}>
                "What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language." <br /> —Miuccia Prada
            </div>
            <br /><hr />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    datas.map((dt, i) => (
                        <div key={i} >
                            <div class="col">
                                <div class="card my-5 mx-5 col-md-8 bg-dark-subtle ">
                                    <img src={dt.category.image} class="card-img-top" alt="..." />
                                    <div class="card-body border-dark text-dark">
                                        <h5 class="card-title">{dt.category.id}</h5>
                                        <p class="card-text"><strong className='fs-4'>{dt.category.name}</strong></p>
                                        
                                        

                                    </div>
                                    <Link to={`buy/${dt.id}`} className='btn btn-dark text-light'>Buy</Link>
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

export default Kid
