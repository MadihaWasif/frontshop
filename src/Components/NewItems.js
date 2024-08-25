import React from 'react'

function NewItems(props) {
    return (

        <div className="container col-md-4">



            <div class="card border-1 m-3 bg-dark text-light">
                <img src='' class="card-img-top" alt="photos" />
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text fw-bolder fs-6"></p>
                    <p class="card-text"></p>
                    <a href="/buy" className='btn btn-warning'>Buy Now</a>
                </div>
            </div>
        </div>

    )
}

export default NewItems
