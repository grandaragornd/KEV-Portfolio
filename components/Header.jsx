import React from 'react'
import bwpfp from '../public/images/bwpfp.jpeg'
import Image from 'next/image'
import { Link } from 'react-scroll'

function Header() {
  return (
    <>
    <div className='w-full text-center intro'>
    <div className='py-[200px] flex-col place-content-center text-white animate__animated animate__slideInUp'>
        <Image src={bwpfp} height='250' width='250' className='rounded-full' />
        <h1 className='sm:text-4xl text-3xl py-3 textclear font-semibold'>Kevin Perea Enriquez</h1>
        <h1 className='smLtext-5xl text-4xl py-5 textclear font-bold'>Fullstack Developer</h1>
        <Link to='work' spy={true} smooth={true} offset={50} duration={500} activeClass='active'>
        <div className='slider-wrapper'>
            <div className='slider text-4xl text-white hover:ease-in duration-200 transform-none'>
              <div className='slider-text1'>Portfolios</div>
              <div className='slider-text2'>Landing Pages</div>
              <div className='slider-text3'>Websites</div>
              <div className='slider-text4'>Forms</div>
              <div className='slider-text4'>Web Apps</div>
            </div>
          </div>
          </Link>
        <h1 className='text-2xl py-3 textclear font-bold'>Based in Hamburg, Germany</h1>
      </div>
    </div>
    </>
  )
}

export default Header