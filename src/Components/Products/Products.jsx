import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import ProductList from "../ProductList/ProductList"
import Cards from '../Cards/Cards';
import Button from '../Button/Button';

const Products = () => {
    const categrories = ['All', 'Fruits', 'Vegetables', 'Dairy','SeaFood']
    const [activeTag,setActiveTag] = useState('All')
    const finteresItems = activeTag ==="All"?
    ProductList : ProductList.filter(item => item.category === activeTag)
    const renderCards = finteresItems.slice(0,8).map(product => {
        return(
            <Cards image={product.image} title={product.name} price={product.price}/>
        )
    })
  return (

    <section>
        <div className='container mx-auto px-10 py-20'>
             <Heading highlight="Our" heading="Products"/>
             {/* Tabs */}
             <div className='flex gap-3 justify-center items-center mt-10 flex-wrap'>
                {categrories.map(categrories =>{
                    return(
                        <button key={categrories} className={`rounded-lg text-white px-5 py-2 text lg cursor-pointer ${activeTag===categrories?'bg-orange-500':"bg-zinc-500"}`}
                        onClick={()=>setActiveTag(categrories)}>
                            {categrories}
                        </button>
                    )
                })}
             </div>
             {/* Product Listing */}
             <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                {renderCards}
             </div>
             <div className='mt-15 mx-auto w-fit'>
                <Button content={"View All"}/>
             </div>
        </div>
    </section>
  );
}

export default Products;
