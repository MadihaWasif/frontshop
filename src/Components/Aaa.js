import axios from 'axios'
import React, { useEffect } from 'react'

function Aaa() {
    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products/mensclothing')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
  return (
    <div>
      Hello
    </div>
  )
}

export default Aaa
