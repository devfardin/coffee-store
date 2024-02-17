import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Coffee from './Coffee'

const Home = () => {
    const coffeeDatas= useLoaderData()
    const [coffees, setcoffees]=useState(coffeeDatas)
  return (
    <div>
        <section className='container mx-auto px-6'>
            <h1 className='text-5xl font-bold mt-4 text-gray-700 text-center'>Our Popular Products</h1>
            <Link to='/add-coffee' className='flex justify-center my-6'> <button className='py-3 px-6 text-center text-lg font-medium bg-gray-400 rounded-lg mx-auto'>Add Coffee</button></Link>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee=> <Coffee key={coffee._id} coffees={coffees} setcoffees={setcoffees} coffee={coffee}> </Coffee>)
                }
            </div>

        </section>
    
    </div>
  )
}

export default Home