import React, { useState } from 'react'
import { data } from '../data.js'
const Food = () => {
   
    const [food, setFood]= useState(data);
    const filterType=(category)=>{
    setFood(
    data.filter((items)=>{
        return items.category ===category;

    }
    )
 );
   
 };
 const filterPrice=(price)=>{
    setFood(
    data.filter((items)=>{
        return items.price ===price ;

    }
    )
 );
   
 };
    
  return (
<div className='max-w-[1640px] m-auto px-4 py-12'>
     <div className='bg-orange-600/80  hover:bg-orange-600 leaf ml-[20%] mb-3'>
     <h1 className='text-white font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
     </div>
      
      <div className='flex flex-col lg:flex-row justify-between p-3'>
        <div>
<p className='font-bold text-gray-700 pb-2'>Filter Types</p>
<div className='flex gap-2 justify-between flex-wrap'>
<button 
onClick={()=>setFood(data)}
className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
<button
onClick={()=>filterType('pizza')}
className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
<button
onClick={()=>filterType('burger')}
className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
    Burgers</button>
<button 
onClick={()=>filterType('salad')}
className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
    </div>

        </div>
        <div>
        <p className='font-bold text-gray-700 pb-2'>Filter Price</p>
<div className='flex gap-2 justify-between flex-wrap max-w-[390px w-full]' >
<button
onClick={()=>filterPrice('$')}
className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
<button
onClick={()=>filterPrice('$$')}
 className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
<button
onClick={()=>filterPrice('$$$')}
className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
<button
onClick={()=>filterPrice('$$$$')}
className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
    </div>  
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food
