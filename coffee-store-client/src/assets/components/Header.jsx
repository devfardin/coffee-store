import React from 'react'
import logo from '../../../public/image/header.png'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


const Header = () => {
  const navLink = <>
  <NavLink to="/" className={({ isActive, isPending }) =>
      isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Home  </NavLink>
  <NavLink to="/users" className={({ isActive, isPending }) =>
      isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Users </NavLink>
  <NavLink to="/add-coffee" className={({ isActive, isPending }) =>
      isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Add Coffee </NavLink>
  <NavLink to="/singup" className={({ isActive, isPending }) =>
      isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}> Register  </NavLink>
  <NavLink to="/singin" className={({ isActive, isPending }) =>
      isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold dark:text-black"}>  Login  </NavLink>
      
    <NavLink to="/navmenu" className={({ isActive, isPending }) =>
        isPending ? "!text-secondary text-lg font-semibold" : isActive ? "!text-secondary text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold dark:text-black"}>  Menu bar  </NavLink>
</>
  return (

    <div className='bg-gray-400 lg:mb-0 mb-24'>
      <div className='container mx-auto px-6'>
 
        <section className="bg-primery z-0">
            <nav className=" container px-4 py-2 mx-auto lg:flex lg:justify-between lg:items-center ">

                <div className="flex items-center justify-between">
                    <Link to="/" className='z-10'>
                    <img className='mx-auto' src={logo} alt="" />
                       </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className='absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex mt-6 lg:items-center !text-black'
                >
                    <div className="flex lg:items-center justify-center  gap-x-6  lg:mt-0 lg:flex-row lg:space-y-0 !text-black">
                        {navLink}

                   
                    </div>
                </div>
            </nav>
        </section>
      </div>
    </div>
  )
}

export default Header