import Image from 'next/image';
import imgs from '../images/C1.png'
import Button from './Button';


const Videos = () => {
  
  return (
    <div id='about' className="grid grid-rows-1 md:grid-cols-2 gap-4 md:p-6 mt-3">
      <div className=" border-l-2 border-l-green-400 pl-2 rounded-l-full">
        <Image src={imgs}
        className='rounded-full bg-green-400'
        width={500} 
        height={300}
        alt='vidéo de cuisine'/>
      </div>
      <div className='flex gap-2 flex-col justify-center'>
        <section className='text-xl '>Abut Us</section>
        <section className='text-xl font-serif'>Cuisine Moderne</section>
        <section className='text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum
           dolores quidem fugit molestias maiores fugiat quam rerum eaque sed? Officiis iste 
          suscipit est! Molestiae illum id necessitatibus velit expedita!</section>
        <section>
          <Button label='Learn me'/>
        </section>
      </div>
    </div>
  )
}

export default Videos
