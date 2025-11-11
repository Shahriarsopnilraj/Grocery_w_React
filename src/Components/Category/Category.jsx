import React from 'react';
import Heading from '../Heading/Heading';
import Fruits from "../../assets/fruits-and-veggies.png"
import Cat from "../../assets/dairy-and-eggs.png"
import Meat from "../../assets/meat-and-seafood.png"
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Category = () => {
    const renderCards = category.map(card=>{
        return(
            // Card Img
            <div className='flex-1 basis-[300px] mt-20 md:mt-5' >
                <div className=' w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} alt="" className='absolute bottom-0' />
                </div>
                {/* Card Content */}
                <div className='bg-zinc-100 pt-10 p-8 rounded-xl flex flex-col justify-between flex-1'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer'>See All</Link>
                </div>
            </div>
        )
    })
  return (
    <section>
        <div className='py-20 container mx-auto '>
            <Heading highlight="Shop" heading="by Category"/>

            {/* Category Cards */}
            <div className='flex gap-10 flex-wrap mt-15 '>
                {renderCards}
            </div>
        </div>
    </section>
  );
}

export default Category;

const category = [
    {
    id :1,
    title : "Fruits & Veggies",
    description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image:Fruits,
    path:'/fruits'
},
    {
    id :2,
    title : "Dairy & Eggs",
    description:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: Cat,
    path : "/dairy"
},
    {
    id :3,
    title : "Meat & SeaFood",
    description:"High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: Meat,
    path: "/seafood"
},
]
