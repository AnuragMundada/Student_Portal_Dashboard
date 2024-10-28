import React from 'react'

const ClassRecording = () => {

  return (
    <>
     <h3 className="text-xl font-bold mb-4">Access Class Recordings</h3>


    <div className="bg-white p-6 rounded-lg shadow-md">
      
     
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for class recordings"
          className="w-full p-3 rounded-md bg-gray-100 text-gray-600 focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between my-4">
      <p className="text-gray-700 font-semibold">Filter By:</p>

      <div className="flex space-x-2">
        {/* Filter Button - This Week */}
        <button className="px-4 py-2 bg-gray-100 rounded-lg flex items-center text-gray-500 hover:bg-gray-200 focus:outline-none">
          This week
          <svg
            className="w-4 h-4 ml-1 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {/* Filter Button - All Subjects */}
        <button className="px-4 py-2 bg-gray-100 rounded-lg flex items-center text-gray-500 hover:bg-gray-200 focus:outline-none">
          All subjects
          <svg
            className="w-4 h-4 ml-1 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </div>
    
      {/* Recording Entries */}
      <div className="space-y-4">
        {/* Algebraic Equations */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-blue-700 text-sm font-bold">Class 7 Math</p>
            <p className="text-lg font-bold pb-5 text-gray-800">Algebraic Equations</p>
            <p className="text-gray-500 text-sm">24th October, 2024</p>
          </div>
          <div className="w-16 h-10 rounded-lg flex items-center justify-center relative">
            <img className="absolute inset-0 w-full h-full" src={'/src/assets/recording.png'} alt="Recording Icon" />
            <img className="absolute" src={'/src/assets/video-circle.png'} alt="Video Circle Icon" />
          </div>
        </div>

        {/* Inert Gases */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-blue-700 text-sm font-bold">Class 7 Math</p>
            <p className="text-lg font-bold pb-5 text-gray-800">Inert Gases</p>
            <p className="text-gray-500 text-sm">24th October, 2024</p>
          </div>
          <div className="w-16 h-10 rounded-lg flex items-center justify-center relative">
            <img className="absolute inset-0 w-full h-full" src={'/src/assets/recording.png'} alt="Recording Icon" />
            <img className="absolute" src={'/src/assets/video-circle.png'} alt="Video Circle Icon" />
          </div>
        </div>

        {/* Fundamentals of Organic Chemistry */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-pink-500 text-sm font-bold">Class 7 Science</p>
            <p className="text-lg font-bold pb-5 text-gray-800">Fundamentals of Organic Chemistry</p>
            <p className="text-gray-500 text-sm">24th October, 2024</p>
          </div>
          <div className="w-16 h-10 rounded-lg flex items-center justify-center relative">
            <img className="absolute inset-0 w-full h-full" src={'/src/assets/recording.png'} alt="Recording Icon" />
            <img className="absolute" src={'/src/assets/video-circle.png'} alt="Video Circle Icon" />
          </div>
        </div>

        {/* Trigonometry 101 */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-blue-700 text-sm font-bold">Class 7 Math</p>
            <p className="text-lg font-bold pb-5 text-gray-800">Trigonometry 101</p>
            <p className="text-gray-500 text-sm">24th October, 2024</p>
          </div>
          <div className="w-16 h-10 rounded-lg flex items-center justify-center relative">
            <img className="absolute inset-0 w-full h-full" src={'/src/assets/recording.png'} alt="Recording Icon" />
            <img className="absolute" src={'/src/assets/video-circle.png'} alt="Video Circle Icon" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ClassRecording
