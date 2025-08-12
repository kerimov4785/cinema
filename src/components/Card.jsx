import React from 'react'
import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <Link to={`movie/${item.id}`} style={{ backgroundImage: (`url(${item.image})`) }} className='w-[231px] h-[370px] rounded-3xl bg-cover relative cursor-pointer '>
      <div className='h-[100%] w-[100%] bg-[#0000004f] rounded-3xl '></div>
      <h3 className='text-white font-bold text-3xl absolute bottom-12 left-3 '>{item.name}</h3>
      <p className='text-white absolute bottom-6 text-1xl left-3'>{item?.firstScreeningDate?.slice(0,10)}</p>
    </Link>
  )
}

export default Card