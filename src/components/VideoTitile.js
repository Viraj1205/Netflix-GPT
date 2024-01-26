import React from 'react'

const VideoTitile = ({title , overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className=' text-2xl md:text-4xl font-bold w-1/2'>{title}</h1>
      <p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className=' hidden md:inline-block bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 '>▶️ Play</button>
        <button className=' hidden md:inline-block bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg mx-4 hover:bg-opacity-80'> ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitile