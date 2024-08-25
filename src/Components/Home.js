import React from 'react'
import Footer from './Footer'
function Home() {
  return (
    <>
      <div className='home vh-100'>
        <div className='container'>
          <div className="row gx-0 align-item-center">
            <div className="col-md-6 mt-5 pt-5 me-4 pl-5">
              <h2 className='fs-2 mt-5 pr-4 text-decoration-underline' style={{fontFamily: 'cursive'}}>New and Trendiest </h2>
              <h3 className='fs-2 pr-4 mt-2 text-decoration-underline' style={{fontFamily: 'cursive'}}>Items Are only Here for you!</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div>
      <Footer />
      
      </div>
    </>
  )
}

export default Home
