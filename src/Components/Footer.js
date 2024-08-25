import React from 'react'

function Footer() {
    return (
        <footer className='bg-dark text-light pt-5 pb-4'>
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h4 className='text-warning'>Company</h4>
                        <p>This organization is about selling the trendiest clothes to their users for their ease so that they can easily buy clothes without moving anywhere and going anywhere.The Shopper App provides buying clothes facility from home and also provide deleivery facility</p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h4 className='text-warning'>Products</h4>
                        <p>Fashion-Wear Clothes</p>
                        <p>Kids-Wear</p>
                        <p>Accessories for Mens/Womens</p>
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h4 className='text-warning'>Useful Link</h4>
                        <p>
                            <a href="#" className='text-light fs-5' style={{ textDecoration: 'none' }}>Your Account</a>
                        </p>
                        <p>
                            <a href="#" className='text-light fs-5' style={{ textDecoration: 'none' }}>Privacy Policy</a>
                        </p>
                        <p>
                            <a href="#" className='text-light fs-5' style={{ textDecoration: 'none' }}>Help Center</a>
                        </p>
                        <p>
                            <a href="#" className='text-light fs-5' style={{ textDecoration: 'none' }}>Shipping Rates</a>
                        </p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h4 className='text-warning mb-4'>Contact</h4>
                        <i class="bi bi-envelope-at-fill fs-2 mr-3"></i>madeehawasif859@gmail.com<br />
                        <i class="bi bi-whatsapp fs-2 mr-3"></i><br />
                        <i class="bi bi-twitter fs-2 mr-3"></i>
                    </div>
                </div>
                <hr className='mb-4' />
                <div className='row align-item-center'>
                <div className='col-md-7 col-lg-8'>
                Copyright @2024 All Rights are preserved by :
                <a href="#" style={{textDecoration: 'none'}}>
                <strong className='text-warning'>The Providers</strong>
                </a>
                </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer
