
import profile_image from '@/assets/images/profile_image.jpeg'
import { Highlighter } from '@/components/ui/highlighter'
import SideBarMenu from './SideBarMenu'

const HomeHeader = () => {
  return (
    <div className=''>
      <div className='flex justify-between md:items-center flex-col md:flex-row items-start'>
        <div className='flex flex-col gap-3 md:gap-5'>
        <div className='flex gap-2 md:gap-4'>
            <div className='profile-image-container md:h-20 md:w-20 h-16 w-16 overflow-hidden rounded-md'>
                <img src={profile_image} className='w-full h-full object-cover object-center'/>
            </div>
            <div className='name-designation mt-1'>
                <div className='md:text-4xl text-3xl font-bold  tracking-tight'>Hi, I'm Hitesh</div>
                <div className='text-xl md:text-3xl font-bold tracking-tight highlighted-text'>AI Integrated Fullstack Developer</div>
            </div>
        </div>

        <div>
            <div className='md:text-3xl sm:text-2xl text-xl font-bold tracking-tighter'>Your idea doesn’t need to fit my skills <br />
                <span className='highlighted-text'>I’ll make my skills fit your idea.</span>
            </div>
        </div>
        
        </div>
        <div className='lg:flex flex-col gap-5 items-end hidden'>
            <Highlighter color='#ff0000' action='box' padding={5} ><div className='highlighted-text text-3xl font-bold'>let's connect </div></Highlighter>
        <div className='flex gap-3'>
            {/* <div className='social-icon-container bg-highlight-red p-2 rounded-lg'>
                <img src={instagram} className='h-6 w-6'/>
            </div>
            <div className='social-icon-container bg-highlight-red p-2 rounded-lg'>
                <img src={linkedin} className='h-6 w-6 '/>
            </div>
            <div className='social-icon-container bg-highlight-red p-2 rounded-lg'>
                <img src={github} className='h-6 w-6 '/>
            </div>
            <div className='social-icon-container bg-highlight-red p-2 rounded-lg'>
                <img src={whatsapp} className='h-6 w-6 '/>
            </div>
            <div className='social-icon-container bg-highlight-red p-2 rounded-lg'>
                <img src={facebook} className='h-6 w-6 '/>
            </div>
            <div className='social-icon-container bg-highlight-red p-2 rounded-lg'>
                <img src={youtube} className='h-6 w-6 '/>
            </div> */}
            <SideBarMenu/>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default HomeHeader
