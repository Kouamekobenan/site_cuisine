import React from 'react'
import Image from 'next/image';
import imgs from "../images/rb_11444.png"
import Button from './Button';
const Banniere = () => {
  return (
    <div className='container md:p-6 flex  flex-col-reverse md:grid grid-rows-1 md:grid-cols-2  gap-10 mb-4'>

        <div className="flex flex-col gap-3 justify-center">
            <section className='text-2xl '>
                smart c<span className='text-green-400 '>oo</span>kers
            </section>
            <section className=' font-serif font-bold'>BEST COOKING TOOLS</section>
            <section className='fonts font-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, eum. 
                Blanditiis ad eaque laborum id repellat voluptates explicabo 
                deserunt aliquam porro est nobis maxime ut aut earum, laboriosam culpa nam.</section>
            <section >
               <Button label="Explorez Us"/>
            </section>
        </div>
        <div className="bg-green-400 rounded-full">
            <Image 
            src={imgs}
            width={500}
            height={300}
            alt=''/>
        </div>
      
    </div>
  )
}

export default Banniere
