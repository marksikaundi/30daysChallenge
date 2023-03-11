import React from 'react'

const News = () => {
  return (
    <div className='w-full py-6 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optmize your flow</h1>
          <p>Signup to our news letter and stay updated.</p>
        </div>
        <div className='my-4'>
    <div>
      <input type="email" placeholder='Enter your Email' />
      <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3 text-black'>Notify me</button>
    </div>
        </div>

      </div>
      
    </div>
  )
}

export default News
