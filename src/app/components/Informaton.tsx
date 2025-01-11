import React from 'react'
import im1 from '../images/Im1.png'
import im2 from '../images/Im2.png'
import im3 from '../images/Im4.png'
import im4 from '../images/Im5.png'
import im5 from '../images/Im6.png'
import im6 from '../images/hearts-flower-plate-cutlery.jpg'
import im7 from '../images/rb_11444.png'
import im8 from '../images/img_cuisine.jpg'
import im9 from '../images/Im7.png'
import im10 from '../images/C1.png'
import Image from 'next/image'

const Informaton = () => {

    const galerie =([
        {
            id:1,
            imgs:im1
        },
        {
            id:2,
            imgs:im2
        },
        {
            id:3,
            imgs:im3
        },
        {
            id:4,
            imgs:im4
        },
        {
            id:5,
            imgs:im5
        },
        {
            id:6,
            imgs:im6
        },
        {
            id:7,
            imgs:im7
        },
        {
            id:8,
            imgs:im8
        },
        {
            id:9,
            imgs:im9
        },
        {
            id:10,
            imgs:im10
        },
        {
            id:11,
            imgs:im1
        },

    ])
  return (
    <div className='container flex flex-col gap-4 text-justify md:text-center pt-4 '>
        <div className="">
            <h1 className='font-bold text-xl font-serif text-center'>helping trought sharing</h1>
        </div>
        <div className="">
            <p> ex magni aliquid totam molestias iste deserunt saepe?</p>
        </div>
        <div className="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorem et? Ipsam reiciendis,
                 eos tempora sint minus odit ab unde vitae! Molestiae
                </p>
        </div>
        <div className="">
            <p>Are you ready to move smart, store smart, COOK SMART ?</p>
        </div>
        <div className="font-serif ">
            <button className='hover:text-green-400 border-2 p-1 rounded-lg'>put your aprons on</button>
        </div>
        <div className="galerie grid grid-cols-3 md:grid-cols-5 gap-3">
  {galerie.map((data, i) => (
    <div
      className="relative rounded-full cursor-pointer group overflow-hidden"
      key={i}
    >
      {/* Image avec animation */}
      <Image
        src={data.imgs}
        className="rounded-3xl duration-500 transform group-hover:scale-105"
        alt=""
        width={300}
        height={200}
      />
      
      {/* Superposition verte avec opacité */}
      <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-30 duration-500 pointer-events-none"></div>
      
      {/* Icône blanche centrée */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Informaton
