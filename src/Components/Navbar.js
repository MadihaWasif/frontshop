import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid ">
                    <a class="navbar-brand ms-5" href="#">Shopper<span className='ms-2'> <i class="bi bi-bag-heart fs-4"></i></span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <a class={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link  ${location.pathname === '/women' ? "active" : ""}`} href="/women">Womens</a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link  ${location.pathname === '/men' ? "active" : ""}`} href="/men">Mens</a>
                            </li>
                            <li class="nav-item">
                                <a class={`nav-link ${location.pathname === '/kids' ? "active" : ""}`} href="/kids">Kids</a>
                            </li>
                            

                            <li class="nav-item">
                                <a href="/wc">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93E1gZrLKckR1R3HOuSi_GpWYQzD1MEWwog&s" className='rounded-circle w-25' alt="" />
                                </a>
                            </li>


                            <li class="nav-item">
                                <a class='nav-link ' href="/buy"></a>
                            </li>


                        </ul>

                    </div>
                    <a href="/cart" className='btn btn-dark m-3 fs-3 fw-italic'>Cart &#128722;</a>
                    <a type='button' href='/login' className='btn btn-warning me-3 border-light rounded fw-bold  mt-2'>Login <span><i class="bi bi-person-hearts fs-4"></i></span></a>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
