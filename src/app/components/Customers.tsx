import React from 'react'
import w1 from '../images/w1.jpg'
import w2 from '../images/w2.jpg'
import w3 from "../images/w3.jpg"
import w4 from '../images/w4.jpg'
import { Star } from 'lucide-react';
import Image from 'next/image'
import Button from './Button'


const Customers = () => {
    const datas=([
        {
            id:1,
            imgs:w1,
            icon :<Star/>,
            desc:" laboriosam tempora laborum cumque placeat cupiditate iusto voluptatibus aut, totam incidunt, earum id quibusdam? Deleniti animi sed veritatis?",
            name:"john doe",
            job:"Developpeuse"
        },
        {
            id:2,
            imgs:w2,
            icon :<Star/>,
            desc:"laboriosam tempora laborum cumque placeat cupiditate iusto voluptatibus aut, totam incidunt, earum id quibusdam? Deleniti animi sed veritatis?",
            name:"Amani",
            job:"Secretaire"
        },
        {
            id:3,
            imgs:w3,
            icon :<Star/>,
            desc:" laboriosam tempora laborum cumque placeat cupiditate iusto voluptatibus aut, totam incidunt, earum id quibusdam? Deleniti animi sed veritatis?",
            name:"Julie",
            job:"Cuisinière"
        },
        {
            id:4,
            imgs:w4,
            icon :<Star/>,
            desc:" laboriosam tempora laborum cumque placeat cupiditate iusto voluptatibus aut, totam incidunt, earum id quibusdam? Deleniti animi sed veritatis?",
            name:"Louise",
            job:"Institutrice"
        }
    ])
  return (
    <div id='review' className='container pt-4 flex flex-col gap-4 pb-4'>
      <div className="flex flex-col gap-2 pb-3 text-center">
        <h1 className='text-2xl font-serif'>What custumer says about us?</h1>
        <h3>105 reviiew start rating</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {
          datas.map((d) =>(
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2" key={d.id}>
              <div className="w-full ">
                <Image className='rounded-full border-2 border-green-400 p-2'
                src={d.imgs}
                  alt=''
                  width={200}
                  height={100}

                 />
              </div>
              <div className="flex flex-col justify-end gap-3">
                <span className='flex text-orange-500'>
                  {d.icon}
                  {d.icon}
                  {d.icon}
                  {d.icon}
                  {d.icon}
                </span>
                <span>{d.desc}</span>
                <span className='font-serif font-bold'>{d.name}</span>
                <span className='font-serif italic'>{d.job}</span>
              </div>
            </div>

          ))
        }
      </div>
      <div className="text-center"><Button label='See all reviews'/>
        </div>
    </div>
  )
}

export default Customers
