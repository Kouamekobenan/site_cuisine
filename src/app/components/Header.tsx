
import React from 'react'
import { ChefHat } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div  className='container w-full flex flex-col md:flex-row justify-between md:p-6'>
        <div className="font-serif flex gap-1 text-2xl">
            <span className=''>smart </span>
            <span className='text-green-400 text-5xl'>
            <ChefHat />
            </span>
            <span className=''> cookink</span>
        </div>
        <div className="family flex text-center flex-col justify-center md:flex-row gap-6  ">
          
            <Link href="#" className='lien_hover'>Home</Link>
            <Link href='#about' className='lien_hover'>About</Link>
            <Link href="#product" className='lien_hover'>products</Link>
            <Link href='#review'  className='lien_hover'>Review</Link>
            <span className='lien_hover'>Faq</span>
            <Link href='../contact' className='lien_hover'>contact</Link>
        </div>
        <div className="md:hidden">X</div>
    </div>
  )
}

export default Header
