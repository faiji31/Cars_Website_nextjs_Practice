import CarCard from '@/components/Card/CarCard';
import React from 'react'

const getCars =async()=>{
    const res = await fetch("https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/cars")

    
    const data = await res.json();

    await new Promise(resolve => setTimeout(resolve, 3000))
    return data.cars || [];
}

const Cars = async() => {
const cars = await getCars();
    
  return (
      <div className='text-4xl font-bold'>Total <span className='text-pink-700'>{cars.length} </span> Found
      
       <div className='grid grid-cols-3 gap-5'>
        {
            cars.map(car=><CarCard key={car.id} car={car}></CarCard>)
        }
       </div>
      </div>
  )
}

export default Cars