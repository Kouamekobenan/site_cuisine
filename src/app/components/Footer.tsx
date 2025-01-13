import React from 'react'
import { Mail } from 'lucide-react';
import { Facebook } from 'lucide-react'
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div id='footer' className='container grid grid-cols-1 gap-4 md:grid-cols-4 border-y-2 py-4 border-t-green-400'>
        <div className="flex flex-col gap-3 justify-center">
            <div className="text-bold text-xl font-serif">contact Us</div>
            <div className="">
                <p>SMART COOKERS</p>
                <p>Street name, omuk state</p>
                <p>12334, Smuk area</p>
                <p>Côte d&#39;ivoire </p>
            </div>
            <div className="">
                <span className='flex gap-2 '>
                    <Mail/>
                    <span>kouamenelson47@gmail.com</span> 
                    </span>
            </div>
        </div>
        <div className="flex flex-col gap-3 ">
        <div className=" text-bold text-xl font-serif">Pages</div>
            <div className="">
                <p>About </p>
                <p>Contact</p>
                <p>Galery</p>
                <p>Contact</p>
            </div>
        </div>
        <div className="flex flex-col gap-3 ">
            <div className="text-bold text-xl font-serif">Help info</div>
            <div className="">
                <p>Faq</p>
                <p>Terms and condition</p>
                <p>return policy</p>
                <p>return and exchange </p>
                <p>return center</p>
            </div>
            
        </div>
        <div className="flex flex-col gap-3 ">
            <div className=" text-bold text-xl font-serif"><h1>Follow us</h1></div>
            <div className="">We are available, in social media</div>
            <div className="flex gap-3">
                <span className='text-blue-500 cursor-pointer hover:bg-green-200'><Facebook /></span>
                <span className='cursor-pointer text-blue-300 hover:bg-green-200'><Twitter/></span>
                <span className='cursor-pointer text-orange-400 hover:bg-green-200'><Instagram/></span>
                <span className='cursor-pointer text-red-500 hover:bg-green-200'><Youtube/></span>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
