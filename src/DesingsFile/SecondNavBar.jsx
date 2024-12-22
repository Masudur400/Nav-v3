 
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { LiaTimesSolid } from 'react-icons/lia';
import { MdOutlineMenu } from 'react-icons/md';
import { SlMenu } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';

const SecondNavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const routes = <>
  <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>First NavBar</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/secondNavbar' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Second NavBar</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/thirdNavbar' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Third NavBar</NavLink></li>


        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",  
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-orange-500 underline' : 'hover:text-red-500'}>Contact Us</NavLink></li>
  </>

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-base-100 border border-b fixed w-full z-10">
        <div className='container mx-auto flex items-center justify-between p-2'>
        <div className="relative">
          <div className="flex gap-5 lg:gap-10 justify-center items-center">
            {/* Burger Icon */}
            <div onClick={handleClick}>
              {click ? (
                <AiOutlineClose className="text-xl lg:text-2xl cursor-pointer" />
              ) : (
                < SlMenu className="text-xl lg:text-2xl cursor-pointer" />
              )}
            </div>
            <div className="lg:text-2xl font-bold">
            <p className="text-3xl font-bold mb-0">
                        <span className="">NavBar</span>
                        </p>
            </div>
          </div>

          {/* Menu Items */}
          <div
            className={`top-0 left-0 min-w-[250px] h-full bg-base-100 transition-transform duration-500 ease-in-out z-50 ${
              click ? 'translate-x-0 absolute' : '-translate-x-full hidden'
            }`}
          >
            {/* Fixed Header in Burger Menu */}
            <div className="sticky top-0 bg-base-100 px-4 py-2 border-b b ">
              <div className="text-2xl font-bold flex justify-between items-center">
              <p className="text-3xl font-bold mb-0">
                        <span className="">NavBar</span>
                        </p>
                <a onClick={closeMenu} className="hover:text-pink-500 cursor-pointer border-2">
                <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer " />
                </a>
              </div>
            </div>

            {/* Scrollable Content with Hidden Scrollbar */}
            <ul className="overflow-y-scroll px-4 space-y-4 font-medium bg-base-100  "  
              style={{
                maxHeight: '100vh',
                // scrollbarWidth: 'thin', /* For Firefox */
                scrollbarWidth: 'none', /* For Firefox */
                msOverflowStyle: 'none'  /* For Internet Explorer and Edge */
              }}
            >
              {/* Hide Scrollbar for WebKit Browsers */}
              <style>{`
                ul::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

               {routes}
            </ul>
          </div>

          {/* Overlay */}
          {click && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            ></div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex gap-5 justify-center items-center mr-4">
          <div>
            <img src="" alt="" className="w-8 lg:w-10 h-8 lg:h-10 border rounded-full" />
          </div>
          <div>
            <button className="bg-red-500 px-3 py-1 rounded-md btn-sm text-sm">LogOut</button>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default SecondNavBar;
