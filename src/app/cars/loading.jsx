import CarSkeleton from '@/components/Skeleton/carskeleton'
import React from 'react'

const loading = () => {
  return (
      <div className='grid grid-cols-3 gap-5'>

        {
            [...Array(9)].map((_,index)=><CarSkeleton key={index}></CarSkeleton>)
        }
      </div>
  )
}

export default loading