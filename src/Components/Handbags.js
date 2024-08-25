import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from './Footer'
function Handbags() {

    const [data, setRecords] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3002/newApi')
            .then(res => setRecords(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <h2 className='text-center mt-4 text-decoration-underline' style={{ fontFamily: 'cursive' }}>Handbag Section! Most Trendy</h2>
            <div className='text-center mt-3 fs-5' style={{ fontFamily: 'cursive' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium! <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure voluptas neque inventore sunt. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <br /><hr />
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    data.map((dt, i) => (
                        <div key={i} >
                            <div class="col">
                                <div class="card my-5 mx-5 col-md-8 bg-danger-subtle ">
                                    <img src='https://c.ndtvimg.com/2022-04/306fkbc_handbags650_625x300_18_April_22.jpg' class="card-img-top" alt="..." />
                                    <div class="card-body border-dark text-dark">
                                        <h5 class="card-title">{dt.id}</h5>
                                        <p class="card-text"><strong className='fs-4'>{dt.name}</strong></p>
                                        <p class="card-text">{dt.title}</p>
                                        <p class="card-text">{dt.description}</p>

                                    </div>
                                    <Link to={`buy/${dt.id}`} className='btn btn-danger rounded-circle'>Buy</Link>
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

export default Handbags
