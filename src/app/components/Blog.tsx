"use client"; 
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Image from "next/image";
import im1 from "../images/Im1.png"
import im2 from "../images/Im2.png"
import im3 from "../images/Im4.png"
import im4 from "../images/Im5.png"
import im5 from "../images/Im6.png"
import im6 from "../images/Im7.png"
import im7 from "../images/img_cuisine_bg.png"
import im8 from "../images/rb_11444.png"
import Button from './Button';

const Blog = () => {

    const  Product=([
        {
            id:1,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im1,
            description:"Description",
            pprice:200,
        },
        {
            id:2,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im2,
            description:"Description",
            pprice:200,
        },
        {
            id:3,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im3,
            description:"Description",
            pprice:200,
        },
        {
            id:4,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im4,
            description:"Description",
            pprice:200,
        },
        {
            id:5,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im5,
            description:"Description",
            pprice:200,
        },
        {
            id:6,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im6,
            description:"Description",
            pprice:200,
        },
        {
            id:7,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im7,
            description:"Description",
            pprice:200,
        },
        {
            id:8,
            icon1:<Heart />,
            icon2: <ShoppingCart />,
            imgs:im8,
            description:"Description",
            pprice:200,
        },

    ])

  return (
    <div id='product' className='container md:p-6 flex flex-col gap-2 pt-6'>
        <div className="text-center font-bold">futured products</div>
        <div className="pb-6 text-justify md:text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quam dolores, 
            tempora quia suscipit quae iste laborum inventore pariatur nam molestiae, 
            dolorem voluptatem provident unde, temporibus ipsam consequatur quis qui.
            </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-justify ">
            
        {Product.map((prod) => (
                <div className="border-2 border-green-200 p-3 rounded-2xl flex flex-1 flex-col gap-2
                 hover:bg-green-400 duration-500 hover:text-white" 
                key={prod.id}>
                    <div className="flex justify-end">
                        <section className='flex gap-2 cursor-pointer'>
                        <span className='p-1'>{prod.icon2}</span>
                        <span className='border-2 border-green-200 rounded-full p-1 '>{prod.icon1}</span>
                        
                        </section>
                        
                    </div>
                    <div className="">
                    <Image
                        src={prod.imgs}
                        alt="Description de l'image"
                        width={200}
                        height={100}
                        />
                    </div>
                    <div className="">{prod.description}</div>
                    <div className="">{prod.pprice} fcfa</div>
                </div>
            ))}
        </div>
        <div className="text-center pt-4">
            <Button label="see all products"/>
        </div>
    </div>
  )
}

export default Blog
