import React from 'react'
import Navbar from './components/Navbar'
import Job_List_page from './pages/Job_List_page'
import { Routes, Route, useLocation } from "react-router-dom";
import CreateJobModal from './components/CreateJobModal';
import { useEffect } from 'react';
const App = () => {
   const location = useLocation();
  const state = location.state && location.state.background;

   useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state]);
  
  return (
     <div>
      <div className={state ? "blur-sm" : ""}>
      <Navbar />
      </div>

      {/* Normal routes */}
      <div className={state ? "blur-sm" : ""}>
      <Routes location={state || location}>
        <Route path="/" element={<Job_List_page />} />
      </Routes>
      </div>
      {/* Modal route */}
      {state && (
        <Routes>
          <Route path="/create" element={<CreateJobModal />} />
        </Routes>
      )}
    </div>
  )
}

export default App 