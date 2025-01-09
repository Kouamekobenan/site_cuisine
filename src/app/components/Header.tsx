
import React from 'react'
import { ChefHat } from 'lucide-react'

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
            <span className='lien_hover'>Home</span>
            <span className='lien_hover'>About</span>
            <span className='lien_hover'>products</span>
            <span className='lien_hover'>Review</span>
            <span className='lien_hover'>Faq</span>
            <span className='lien_hover'>contact</span>
        </div>
        <div className="md:hidden">X</div>
    </div>
  )
}

export default Header
