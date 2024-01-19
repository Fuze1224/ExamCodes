import React from 'react'

const Card = ({image, name, job, univer}) => {
  return (
    <div className='card bg-white w-72 text-center rounded-3xl pt-3 pb-7 mb-10'>
        <img className='rounded-full m-auto' src={image} alt="user icon" />
        <h2 className='text-4xl text-black font-medium mt-5 mb-3'>{name}</h2>
        <p className='text-2xl text-gray-500'>{job}</p>
        <p className='text-black font-medium my-4'>{univer}</p>
        <button type="submit" className="btn w-44 rounded-3xl mt-4 m-auto">Contact</button>
        

    </div>
  )
}

export default Card