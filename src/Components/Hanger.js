import React, { useContext } from 'react'
import First from '../Contexts/NewContext/First'
import HangerItems from './HangerItems';


function Hanger(props) {
    const userData = useContext(First);
    let {fashion, setFashion} = userData;
  return (
    <>
    <div className="container my-5 row-md-4">
    <div className='row'>
      <h2 className='text-center fw-bold p-2 fs-2'>Fashion Wear</h2>
      <p className='text-center fs-4' style={{fontFamily: 'cursive'}}>"Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes." —Diana Vreeland</p>
      <hr /><br />
    {fashion && fashion.map((tops)=> {
        return (
            <HangerItems tops={tops} />
        )
    })}
    </div>
    </div>
    <hr />
    <br /><br />
    </>
  )
}

export default Hanger
