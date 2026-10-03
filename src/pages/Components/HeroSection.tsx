import ProfilePhoto from '@/assets/images/profile_image.jpeg'
import { Dot } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='flex flex-col items-center gap-3'>
        <div className='relative'>
          <div className='flex items-center font-bold tracking-tighter text-2xl gap-1 bg-highlight text-beige-extra-light p-3 rounded-lg absolute left-[-90%] bottom-5 w-72'>
            <div className='text-center'>And I'm a Software Developer & AI Engineer</div>
          </div>
          <div className='h-64 w-64 rounded-lg overflow-hidden'>
            <img src={ProfilePhoto} className='h-full w-full object-cover' />
          </div>
          <div className='flex items-center font-bold tracking-tighter text-2xl gap-1 bg-highlight text-beige-extra-light p-3 rounded-lg absolute right-[-50%] top-10'>
            <div>Hi, I'm Hitesh</div>
          </div>
        </div>
        <div className='w-5xl text-center'>
          <p className='text-3xl font-bold tracking-tight'><span className='highlighted-text text-4xl'>I design, build, and deploy real products,</span> not just write code and hand it off. I've done this for 10+ clients now, so I know what it actually takes to ship something that works. <span className='highlighted-text text-4xl'>You don't need a whole team for this.</span> You need someone who can just get it done, and that's me.</p>
        </div>
        <div className='flex'>
          <div className='flex items-center'>
            <Dot size={42} className='text-highlight' />
            <div className='text-xl font-medium'>Design</div>
          </div>
          <div className='flex items-center'>
            <Dot size={42} className='text-highlight' />
            <div className='text-xl font-medium'>Development</div>
          </div>
          <div className='flex items-center'>
            <Dot size={42} className='text-highlight' />
            <div className='text-xl font-medium'>AI</div>
          </div>
          <div className='flex items-center'>
            <Dot size={42} className='text-highlight' />
            <div className='text-xl font-medium'>Deployment</div>
          </div>
        </div>
        <div>
          <div className='flex gap-3 w-full'>
            <button className='bg-highlight px-6 py-3 rounded-lg'>
              <span className='font-bold text-white! highlighted-text text-2xl'>Let's Talk</span>
            </button>
            <button className='border-highlight border-2 px-6 py-3 rounded-lg'>
              <span className='font-bold text-highlight highlighted-text text-2xl'>Ask Hitesh AI</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className='absolute left-8 bottom-8 flex flex-col gap-2'>
        <div className='highlighted-text  text-3xl font-bold'>let's connect </div>
        <div className='flex gap-3'>
          <div className='social-icon-container bg-highlight p-2 rounded-lg'>
            <img src={instagram} className='h-6 w-6' />
          </div>
          <div className='social-icon-container bg-highlight p-2 rounded-lg'>
            <img src={linkedin} className='h-6 w-6 ' />
          </div>
          <div className='social-icon-container bg-highlight p-2 rounded-lg'>
            <img src={github} className='h-6 w-6 ' />
          </div>
          <div className='social-icon-container bg-highlight p-2 rounded-lg'>
            <img src={whatsapp} className='h-6 w-6 ' />
          </div>
          <div className='social-icon-container bg-highlight p-2 rounded-lg'>
            <img src={facebook} className='h-6 w-6 ' />
          </div>
          <div className='social-icon-container bg-highlight p-2 rounded-lg'>
            <img src={youtube} className='h-6 w-6 ' />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default HeroSection
