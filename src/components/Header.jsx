import React from 'react'

const Header = () => {
  return (

    <header className="bg-indigo-500 text-white p-4 flex justify-between items-center">
 
        <img src={'/src/assets/connectEd.png'} className='flex justify-between items-center' alt="ConnectEd Image" />
    <h1 className="text-2xl font-bold">Student Portal</h1>
    <div className="text-right">
      <p className="text-lg font-bold">Hello, Gabrisa!</p>
      <p className="text-sm">Class 7, Math + Science</p>
    </div>
  </header>
  )
}

export default Header
