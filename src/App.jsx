import React from 'react'
import NavBar from './components/Navbar'
import Landimage from './components/Landimage'
import { Button, Link } from '@nextui-org/react'
import { NavbarItem } from '@nextui-org/react'
import Imagetwo from './components/imagetwo'
const App = () => {
  return (
    <>
    <body class="h-[94.5rem] bacg">
    {/*<div><NavBar/></div>*/}
    <div className='flex flex-row absolute left-11 top-6 z-20'>
      <img src="https://cdn.discordapp.com/attachments/1063907101556092999/1139327291281907844/image-removebg-preview_5.png" width={60} />
      <div>
        <p className='font-bold text-white py-5'>Vetri's Flower Shop</p>        
      </div>
    </div>
    <div className='flex flex-row gap-[9px] absolute right-44 top-11 z-20'>
      <Link href='#' className='text-white font-normal' >Home</Link>
      <p className='text-white'>●</p>
      <Link href='#' className='text-white'>Order</Link>
    </div>
    <div>
      <div>
        <div className='absolute top-[300px] left-28 font-serif text-white font-thin text-7xl antialiased  tracking-wider z-20' >
          <h1>Beautiful, </h1>
          <h1>Intriquate Flowers</h1>
        </div>
        <div>
          <div className='absolute top-[500px] left-28 font-sans text-base antialiased font-normal tracking-tight text-white text-left z-20'>
            <p>Dive into a world where nature's artistry comes alive, with each petal telling a story of evolution,</p><p> resilience, and splendor. Our collection showcases flowers that are not just blooms, but intricate masterpieces; </p><p> a symphony of colors, textures, and scents. Every flower embodies a delicate balance of nature's finest details,</p><p> crafted to perfection over millennia. </p>
          </div>
          <Button radius='full' size='lg' variant='shadow' href="#" className='absolute top-[650px] left-28 z-40'>Order Now</Button>   
        </div>
      </div>

      <div className='absolute right-20 top-[20px]'>
        <Landimage className="z-10"/>
      </div> 
      
    </div>

    <div>
      <body className='bacgt'>
        <div className='bacgt absolute w-[62rem] h-[38rem] top-[770px] right-0 z-20 drop-shadow-md'></div>
      </body>
      <div>
        <div className='absolute top-[900px] right-[180px] font-serif font-thin text-5xl antialiased  tracking-wider z-40 text-center text-zinc-900'>
          <p>Nature's Timeless Beauty</p>
        </div>
        <div className='absolute top-[1000px] right-[40px] font-sans text-normal antialiased tracking-tight z-40 text-left text-zinc-900 z-50'>
          <p>Step into an enchanting realm where each flower stands as a testament to nature's timeless </p><p>grace and sophisticated design. Here, beauty transcends fleeting trends, rooted in the ageless dance of </p><p>sunlight, soil, and rain. Our curated selection invites you to discover the mesmerizing intricacies of each bloom,</p><p> revealing tales of perseverance, transformation, and wonder.</p><div></div><p>Journey with us through gardens of imagination where every blossom harmonizes in nature's grand orchestra.</p><p> With petals that capture the softest whispers of dawn and hues that reflect the twilight's serene embrace,</p><p> each flower sings a unique melody of life, dreams, and deep-rooted passions.</p>
        </div>
        <Button href='#' variant='shadow' className='absolute right-[100px] top-[1200px] text-white z-50 bg-zinc-900'>Read More</Button>
      </div>

      <div className="absolute top-[650px] left-10 drop-shadow-2xl z-30">
      <Imagetwo />
      </div>
      
    </div>
    </body>
    </>
  )
}

export default App