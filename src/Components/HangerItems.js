import React from 'react'

function HangerItems(props) {
    const { tops } = props
    return (
        <>
        
    
            <div className="container col-md-4">
              
                    

                        <div class="card border-1 m-3 bg-dark text-light">
                            <img src={tops.image} class="card-img-top" alt="photos" />
                            <div class="card-body">
                                <h5 class="card-title">{tops.id}</h5>
                                <p class="card-text fw-bolder fs-6">{tops.name}</p>
                                <p class="card-text">{tops.price}</p>
                                <a href="/buy" className='btn btn-warning'>Buy Now</a>
                                <a href="/cart" className='btn btn-warning mx-4'>Add to Cart</a>
                            </div>
                        </div>
                    </div>
                  


        </>
    )
}

export default HangerItems
