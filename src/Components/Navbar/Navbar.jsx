import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";
import { IoIosMenu } from 'react-icons/io';
import { TbMenu3 } from 'react-icons/tb';


const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
    const [isScroled,setIsScroled] = useState(false)

    const toggleMenu = () => {
  setShowMenu(!showMenu);
};
useEffect(()=>{
const handelscroll = ()=>{
    setIsScroled(window.scrollY>10)
}
window.addEventListener('scroll',handelscroll)
},[])
  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScroled?'shadow-lg':""} `}>
        {/* logo-section */}
        <nav className='container mx-auto px-10 md:h-[20vh] h-[12vh] flex items-center py-5 justify-between '>
            <a href="" className='text-3xl font-semibold'> Gr<span className='text-orange-500'>O</span>cify</a>

            {/* desktop menu */}
            <ul className='md:flex gap-4 items-center hidden'>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-orange-800 hover:text-orange-500'>Home</a>
                </li>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500 '>About us</a>
                </li>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a>
                </li>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact Us</a>
                </li>
                
            </ul>
            {/* Nav action */}
            <div className='flex gap-x-5 items-center '>
                <div className='md:flex  p-1 border-2 border-orange-400 rounded-full hidden'>
                    <input type="text" name='text ' id='text ' placeholder='Search...' autoComplete='off' 
                    className='flex-1 h-[5vh] px-5 py-5 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-orange-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                        <CiSearch />
                    </button>
                </div>
                {/* imput Fild */}
                <a href="" className='text-zinc-500'>
                    <FaHeart />
                </a>
                <a href="" className='text-zinc-500'>
                    <FaShoppingBag />
                </a>
                <a href="#" className='text-zinc-500 text-3xl md:hidden' onClick={toggleMenu}>
                    {/* Hambarger */}
                    {showMenu?<TbMenu3 />:<IoIosMenu  />}
                </a>
            </div>
            <ul className={`flex flex-col gap-y-15 bg-orange-500/50 backdrop-blur-xl rounded-lg  p-10  gap-4 items-center md:hidden absolute top-30  -left-full transform -translate-x-1/2 transition-all duration-300 ${showMenu?'left-1/2 ': ""}`}>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-orange-800 hover:text-orange-500'>Home</a>
                </li>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500 '>About us</a>
                </li>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Process</a>
                </li>
                <li> 
                    <a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'>Contact Us</a>
                </li>
                <li className='flex  p-1 border-2 border-orange-400 rounded-full md:hidden'>
                    <input type="text" name='text ' id='text ' placeholder='Search...' autoComplete='off' 
                    className='flex-1 h-[5vh] px-5 py-5 focus:outline-none'/>
                    <button className='bg-gradient-to-b from-orange-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                        <CiSearch />
                    </button>
                </li>
                
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;
