import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GrMenu, GrClose } from 'react-icons/gr';
import logo from '../../../public/image/header.png'



const NavMenu = () => {
    const [menu, setMenu] = useState(false)
    const navLink = <div className='space-x-4 text-white'>
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
    </div>

    return (

         <div className='bg- text-white py-4'>
             <div className='flex justify-between container px-4 mx-auto'>
              <div className="text-2xl text-white">
               <img src={logo} alt="" />
            </div>

            <div>
                <div className='md:block lg:hidden text-3xl flex justify-end'  onClick={() => setMenu(!menu)}>
               {
                    menu == true ? <GrClose > </GrClose> : <GrMenu className='!text-white'> </GrMenu>
                }
               </div>

               <div className='hidden lg:block'>
               {navLink}
               </div>

            </div>
          </div>
         </div>

           
       
    )
}

export default NavMenu