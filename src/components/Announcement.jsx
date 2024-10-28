import React from 'react'

const Announcement = () => {
  return (
    <>
    <h3 className="text-xl font-bold mb-4">Announcements</h3>
    
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <div className="bg-slate-100 rounded p-4 mt-2 flex items-center space-x-4">
      <img src={'/src/assets/sun.png'} alt="Holiday Icon" />
      <p className='text-indigo-700'>On account of Independence Day, August 15th will be a holiday.</p>
    </div>

    <div className="bg-slate-100 rounded p-4 mt-2 flex items-center space-x-4">
      <img src={'/src/assets/clipboard-text.png'} alt="Clipboard Icon" />
      <p className='text-indigo-700'>Reminder to finish your assignments and submit them by Monday.</p>
    </div>
  </div>
  </>
  )
}



export default Announcement
