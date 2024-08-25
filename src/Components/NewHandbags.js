import React, { useEffect } from 'react'
import axios from 'axios'
function NewHandbags() {
    useEffect(()=> {
        axios.get('https://dummyjson.com/products')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
  return (
    <div>
      
    </div>
  )
}

export default NewHandbags
