import React from 'react'
import imgs from '../images/contact.png'
import Image from 'next/image'
import Button from '../components/Button'

const page = () => {
  return (
    <div className='container flex flex-col md:flex-row items-center p-6 bg-green-800'>
      <div className="mt-[100px] flex-1">

        <div className="flex flex-col">
          <section><h1 className='text-2xl font-serif text-white'>Contactez nous </h1></section>
          <form action="" className='flex flex-col gap-4 py-4 '>
            <input type="text" placeholder='enter your name' className='inputs '/>
            <input type="text" placeholder='enter your email' className='inputs'/>
            <input type="number" placeholder='enter your number' className='inputs'/>
            <textarea name='' id=' ' cols={10} rows={10} className='border-2 text-justify pl-2 rounded-lg'
              placeholder='dit pourquoi vous voulez nous conacter'>
            </textarea>
            <span className='text-white hover:text-black'>
              <Button label='Envoyez'/>
            </span>
          </form>
        </div>
      </div>

      <div className="flex-1">
        <Image src={imgs}
          width={500}
          height={300}
          alt='mon image contact'
        />
      </div>      
    </div>
  )
}

export default page
