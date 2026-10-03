import React from 'react'
import arrow from '@/assets/images/arrow.svg'
import { Highlighter } from '@/components/ui/highlighter'

const HomeAbout = () => {
  return (
    <div className='xl:flex-6/12 2xl:flex-8/12'>
      <div className='flex gap-1 items-start flex-col'><div className='md:text-4xl text-2xl tracking-tighter font-bold mb-2 highlighted-text'>so, who is Hitesh ?</div>
      <p className='2xl:text-3xl md:text-2xl text-xl font-medium tracking-tighter text-justify'>
        I'm Hitesh, a software developer and AI engineer with three years in the field. <Highlighter color='#ff0000' action='underline'><span className='highlighted-text font-bold'>all of it self-taught.</span> </Highlighter> I came into tech from a B.Com degree, with no roadmap and no one to hand me one, just a stubborn curiosity about how software actually gets built. So I worked through it myself: the MERN stack first, then React Native, then AI and automation once I saw how much of a product's repetitive work could simply be handed to a machine. Today I build software full-time, and alongside that I've delivered projects for <Highlighter color='#ff0000' action='underline'><span className='highlighted-text font-bold'>more than ten clients.</span> </Highlighter> building sites from scratch, shipping features, and untangling codebases that had stopped making sense to the people who owned them. What I bring that most developers don't is design sense. I work in Figma and Framer, I understand UI and UX rather than just implementing someone else's version of it, and I can carry an idea from a first rough conversation to a designed, animated, deployed product <Highlighter color='#ff0000' action='underline'><span className='highlighted-text font-bold'>without handing you off to three other people in between.</span> </Highlighter> I also run Techbyhitesh on Instagram, where I break down tech tips, free AI tools, and the kind of thing that's easier to show than explain. so if you need content that sells your product as well as code that runs it, that's covered too. The honest reason I'm good at this is that I like it enough to keep learning on my own time. Every project so far has had something in it I'd never done before, and I've worked it out each time. Yours will be the same.
      </p>
      </div>
    </div>
  )
}

export default HomeAbout
