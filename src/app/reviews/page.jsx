"use client"
import ReviewCard from '@/components/Card/ReviewCard'
import React, { useEffect, useState } from 'react'

const ReviewPage = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
      fetch("https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/reviews")
      .then(res=>res.json())
      .then(data=>setReviews(data.reviews|| []))



    },[])
  return (
    <div>
        <h2>Total Reviews Found: {reviews.length}</h2>
        <div className='grid grid-cols-3 gap-5'>
          {
            reviews.map(review=><ReviewCard review={review} key={review.id}></ReviewCard> )
          }

        </div>
    </div>
  )
}

export default ReviewPage
