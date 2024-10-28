import Header from './components/Header';
import Announcement from './components/Announcement';
import ClassSchedule from './components/ClassSchedule';
import QuickLinks from './components/QuickLinks';
import ClassRecording from './components/ClassRecording';


function App() {
  

  return (

    <div className="min-h-screen bg-gray-100">
    <Header />
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Side */}
      <div>
        <Announcement />
        <ClassSchedule />
      </div>

      {/* Center Side */}
      <div className="space-y-6">
        <QuickLinks />
      </div>


      {/* Right Side */}
      <div className=''>
      <ClassRecording />
      </div>
    </div>
  </div>


  );
};

export default App
