import React from 'react'

const ClassSchedule = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Your Class Schedule</h3>
      
      {/* Yesterday's Class */}
      <div className="flex items-center justify-between p-4 rounded-lg shadow-md mb-3 bg-gray-100">
        <div className="flex items-start space-x-3">
          <img className="p-2 mt-2 flex items-center space-x-4" src={'/src/assets/video.png'} alt="Video Icon" />
          <div>
            <p className="text-sm text-indigo-300">Class 7, Science | Live Class</p>
            <p className="text-lg font-semibold text-indigo-700">Tuesday, 5:00 - 5:50 PM</p>
          </div>
        </div>
        <p className="text-sm text-indigo-400">Yesterday</p>
      </div>

      {/* Today's Class */}
      <div className="flex items-center justify-between p-4 rounded-lg shadow-md mb-3 bg-pink-400">
        <div className="flex items-start space-x-3">
        <img className="p-2 mt-2 flex items-center space-x-4" src={'/src/assets/video1.png'} alt="Video Icon" />
        <div>
            <p className="text-sm text-pink-200">Class 7, Science | Live Class</p>
            <p className="text-lg font-semibold text-white">Tuesday, 6:30 - 7:15 PM</p>
          </div>
        </div>
        <p className="text-sm text-white">Today</p>
      </div>

      {/* Tomorrow's Class */}
      <div className="flex items-center justify-between p-4 rounded-lg shadow-md mb-3 bg-gray-100">
        <div className="flex items-start space-x-3">
        <img className="p-2 mt-2 flex items-center space-x-4" src={'/src/assets/video.png'} alt="Video Icon" />
        <div>
            <p className="text-sm text-indigo-300">Class 7, Science | Live Class</p>
            <p className="text-lg font-semibold text-indigo-700">Tuesday, 5:00 - 5:50 PM</p>
          </div>
        </div>
        <p className="text-sm text-indigo-400">Tomorrow</p>
      </div>

      {/* Future Class */}
      <div className="flex items-center justify-between p-4 rounded-lg shadow-md mb-3 bg-pink-50">
        <div className="flex items-start space-x-3">
        <img className="p-2 mt-2 flex items-center space-x-4" src={'/src/assets/video2.png'} alt="Video Icon" />
        <div>
            <p className="text-sm text-pink-300">Class 7, Science | Live Class</p>
            <p className="text-lg font-semibold text-pink-400">Tuesday, 5:00 - 5:50 PM</p>
          </div>
        </div>
        <p className="text-sm text-pink-300">23rd Sept. 2024</p>
      </div>
    </div>
  );
};

export default ClassSchedule
