import React from 'react'

const QuickLinks = () => {
  return (
    <>
    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
    
    {/* Canvas LMS Link */}
    <div className="flex flex-col items-center justify-center bg-indigo-700 text-white p-12 rounded-lg mb-4 shadow-lg  hover:bg-white hover:text-indigo-700">
      <img className="h-8 mb-2" src={'/src/assets/book.png'} alt="Book Icon" />
      <h4 className="text-lg font-bold">Canvas LMS</h4>
      <p className="text-sm text-center">Click here to access your LMS portal for assignments, class recordings and notes.</p>
    </div>

    {/* Join Live Class Link */}
    <div className="flex flex-col items-center justify-center bg-pink-400 text-white p-12 rounded-lg mb-4 shadow-lg hover:bg-white hover:text-pink-400">
      <img className="h-8 mb-2" src={'/src/assets/liveclass.png'} alt="Live Class Icon" />
      <h4 className="text-lg font-bold">Join Live Class</h4>
      <p className="text-sm text-center">Class 7 Math is starting in <br /> <b>1 hour, 35 minutes.</b></p>
    </div>

    {/* Contact Teacher Link */}
    <div className="flex flex-col items-center justify-center bg-indigo-500 text-white p-12 rounded-lg shadow-lg hover:bg-white hover:text-indigo-500">
      <img className="h-8 mb-2 hover:bg-indigo-500" src={'/src/assets/contact.png'} alt="Contact Icon" />
      <h4 className="text-lg font-bold">Contact Teacher</h4>
      <p className="text-sm text-center">Click here to contact your teacher for any doubts or concerns.</p>
    </div>
 
  </>
  )
}

export default QuickLinks
