import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";


const Navbar = () => {
  return (
    <header className='bg-white fixed top-0 right-0 left-0'>
        {/* logo-section */}
        <nav className='container mx-auto flex items-center py-5 justify-between '>
            <a href="" className='text-3xl font-semibold'> Gr<span className='text-orange-500'>O</span>cify</a>

            {/* desktop menu */}
            <ul className='flex gap-4 items-center'>
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
                <div className='flex p-1 border-2 border-orange-400 rounded-full'>
                    <input type="text" name='text ' id='text ' placeholder='Search...' autoComplete='off' 
                    className='flex-1 h-[5vh] px-3 focus:outline-none'/>
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
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
