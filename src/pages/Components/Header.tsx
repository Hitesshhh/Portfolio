import profilePhoto from '@/assets/images/profile_image.jpeg'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
const Header = () => {
   
  return (
    <>
    <div className='bg-highlight my-5 h-18 rounded-lg flex items-center justify-between p-3'>
      <div className="sm-logo flex items-center select-none pointer-events-auto gap-2.5" aria-label="Logo">
            <div className='h-12 w-12'>
            <img
              src={profilePhoto}
              alt="Logo"
              className="block h-full w-full object-cover rounded-sm"
              draggable={false}
              width={110}
              height={24}
            />
            </div>
            <div className='flex flex-col justify-center'>
            <div className='text-[1.4rem] font-bold tracking-tighter leading-5 text-beige-extra-light'>HITESH MUJWANI</div>
            <div className='text-xl font-bold tracking-tighter highlighted-text text-beige-extra-light!'>Software Developer & AI Engineer</div>
            </div>
      </div>
      <div className='nav-buttons flex items-center gap-3'>
         <div>
                      <AnimatedThemeToggler  className='bg-beige-extra-light! text-highlight p-3 rounded-md '></AnimatedThemeToggler>
                    </div>
                    <div>
                      <button className='flex p-3 text-highlight bg-beige-extra-light rounded-lg font-medium tracking-tighter text-lg'>Download CV </button> </div>
      </div>
    </div>
    </>
  )
}

export default Header
