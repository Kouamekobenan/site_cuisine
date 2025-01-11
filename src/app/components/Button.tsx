import React from 'react'
import { ChevronRight } from 'lucide-react';

const Button = ({label}:{label:string}) => {
  return (
    <div>
       <button className='border-2 border-green-400 rounded-3xl h-10 px-2 font-serif
                hover:bg-green-200 duration-500 md:text-xl'>
                    <span className='flex gap-2 justify-center'>
                        <small>{label}</small> 
                        <small className='flex flex-col justify-center
                        icon bg-green-400 rounded-full'> <ChevronRight/></small>
                    </span>
                </button>
    </div>
  )
}

export default Button
