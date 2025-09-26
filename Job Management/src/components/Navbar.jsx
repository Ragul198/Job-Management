import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className='  p-4 '>
        <ul  className='flex justify-around items-center p-8 rounded-full shadow-lg bg-white m-auto lg:w-[56rem] lg:h-[5.625rem] md:w-[38rem] md:h-[3.814rem]   '>
            <li><div className="img"><img src="https://www.cybermindworks.com/images/cmwlogo.svg" className='lg:w-[2.75rem] lg:h-[2.7925rem] md:w-[2.25rem] md:h-[2.5rem] ' alt="" /></div></li>
            <li className=' px-4 py-2 hover:shadow-xl font-medium hover:translate-1 transition ease-in-out duration-300 rounded-xl '>Home</li>
            <li className=' px-4 py-2 hover:shadow-xl font-medium hover:translate-1 transition ease-in-out duration-300 rounded-xl '>Find Jobs</li>
            <li className=' px-4 py-2 hover:shadow-xl  font-medium hover:translate-1 transition ease-in-out duration-300 rounded-xl '>Find Talents</li>
            <li className=' px-4 py-2 hover:shadow-xl  font-medium hover:translate-1 transition ease-in-out duration-300 rounded-xl '>Testimonials</li>
            <li><div className=" p-1 hover:shadow-xl hover:translate-1  hover:bg-[#bfb9b93f] transition ease-in-out duration-300 rounded-xl"><button onClick={() => navigate("/create", { state: { background: location } })} className='px-4 py-2 bg-gradient-to-b  from-[#A128FF] to-[#6100AD] text-white rounded-full'>Create Jobs</button></div></li>
        </ul>
    </div>
  )
}

export default Navbar