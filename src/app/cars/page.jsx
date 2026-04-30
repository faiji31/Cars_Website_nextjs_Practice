import React from 'react'

const getCars =async()=>{
    const res = await fetch("https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/cars")
    const data = await res.json();
    return data.cars || [];
}

const Cars = async() => {
const cars = await getCars();
    
  return (
      <div className='text-4xl font-bold'>Total <span className='text-pink-700'>{cars.length} </span> Found</div>
  )
}

export default Cars