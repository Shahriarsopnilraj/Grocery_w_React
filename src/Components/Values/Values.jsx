import React from 'react';
import Heading from "../Heading/Heading"
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png"

const Values = () => {
    const leftValues = values.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div className=''>
                 <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icons}</span>
                </div>
                <div className='md:text-right'>
                 <h3 className='text-zinc-800 text-3xl font-semibold'>{item.title}</h3>
                 <p className='text-zinc-600 text mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    const rightValues = values.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex items-center gap-7'>
                <div className=''>
                 <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icons}</span>
                </div>
                <div className=''>
                 <h3 className='text-zinc-800 text-3xl font-semibold'>{item.title}</h3>
                 <p className='text-zinc-600 text mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })
  return (
    <section>
        <div className='container mx-auto px-10'>
            <Heading highlight="Our" heading="Values"/>
            <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>
                {/* Left values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {leftValues}
                </div>
                <div className='md:flex w-3/4 hidden'>
                    <img src={Basket} alt=""  />
                </div>
                {/* right values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {rightValues}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Values;
const values = [
    {
        id:1,
        title:'Trust',
        para:`It is a long established fact that a reader will be distracted by the readable.`,
        icons:<FaHeart />
    },
    {
        id:2,
        title:'Always Fresh',
        para:`It is a long established fact that a reader will be distracted by the readable.`,
        icons:<FaLeaf />
    },
    {
        id:3,
        title:'Food Safety',
        para:`It is a long established fact that a reader will be distracted by the readable.`,
        icons:<FaShieldAlt />
    },
    {
        id:4,
        title:'100% Organic',
        para:`It is a long established fact that a reader will be distracted by the readable.`,
        icons:<FaSeedling />
    },
]
