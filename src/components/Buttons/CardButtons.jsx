"use client"

import React from 'react'

const CardButtons = () => {
  return (
    <div>
          <button onClick={handleAddtocart} className="bg-black text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-800">
              Add to Cart
          </button>
    </div>
  )
}

export default CardButtons
