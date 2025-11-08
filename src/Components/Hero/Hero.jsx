import React from 'react';
import Grocery from"../../assets/grocery.png"
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section>
        <div className='max-w-[1400px] min-h-screen mx-auto px-10 flex items-center pt-25'>
            {/* Hero content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality</span>
                <h1 className='text-7xl font-bold mt-5'>Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>veggies</span> <br /> in your city</h1>
                <p className='text-zinc-600 text-lg mt-10 max-w-[530px] mb-10'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
                <Button content = "Shop Now"/>
            </div>
            {/* hero img */}
            <div className='flex-1'>
                <img src={Grocery} alt="" />
            </div>
        </div>
    </section>
  );
}

export default Hero;
