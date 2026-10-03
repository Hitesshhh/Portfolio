import image_1 from '@/assets/images/image_1.jpeg'
import image_2 from '@/assets/images/image_2.jpeg'
import image_3 from '@/assets/images/image_3.jpeg'
import image_4 from '@/assets/images/image_4.jpeg'
import image_5 from '@/assets/images/image_5.jpeg'
import { Highlighter } from '@/components/ui/highlighter'

const HomeGallery = () => {


  return (
    <div className='xl:flex-6/12 2xl:flex-4/12'>
        <div className='flex flex-col gap-2'><div className='md:text-4xl text-2xl tracking-tighter font-bold mb-4 highlighted-text text-right'><Highlighter padding={5} action='box' color='#ff0000'>beyond the screen</Highlighter></div>
<div className="grid grid-cols-3 grid-rows-10 gap-4 h-143.75 xl:h-190 2xl:h-145">
    <div className="md:row-span-6 row-span-3 rounded-md overflow-hidden"><img src={image_2} className='h-full w-full object-cover'/></div>
    <div className="row-span-3 rounded-md overflow-hidden"><img src={image_3}  className='h-full w-full object-cover'/></div>
    <div className="row-span-3 rounded-md overflow-hidden"><img src={image_4}  className='h-full w-full object-cover'/></div>
    <div className="md:col-span-2 col-span-3 row-span-3 md:col-start-2 col-start-1 row-start-4 rounded-md overflow-hidden bg-red-600 flex flex-col">
        <div className='flex text-center justify-center items-center text-white font-bold font-accent italic text-xl h-full mt-5'>
        Your idea doesn’t need <br /> another developer. It needs someone <br /> who can build the whole thing.
        </div>
        <div className='sign text-center font-accent text-white italic text-lg m-3 font-bold'>"Hitesh"</div>
    </div>
    <div className="col-span-2 md:row-span-4 row-span-3 row-start-7 rounded-md overflow-hidden"><img src={image_1}  className='h-full w-full object-cover object-center'/></div>
    <div className="md:row-span-4 row-span-3 col-start-3 row-start-7 rounded-md overflow-hidden"><img src={image_5}  className='h-full w-full object-cover'/></div>
</div>
</div>
    
    </div>
  )
}

export default HomeGallery
