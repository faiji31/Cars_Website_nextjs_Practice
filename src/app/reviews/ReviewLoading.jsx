import ReviewCardSkeleton from '@/components/Skeleton/ReviewCardSkeleton'
import React from 'react'

const Reviewloading = () => {
  return (
      <div className='grid grid-cols-3 gap-5'>
      {
              [...Array(6)].map((_, index) => <ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
      }
    </div>
  )
}

export default Reviewloading
