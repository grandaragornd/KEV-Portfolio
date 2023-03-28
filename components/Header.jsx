import React from 'react'

function Header() {
  return (
    <>
    <div className='w-full text-center backgroundcontact bg-cover bg-fixed'>
    <div className='py-[200px] flex-col place-content-center text-white animate__animated animate__slideInUp'>
        <h1 className='text-4xl py-3 textclear'>I&apos;m Kevin Perea Enriquez</h1>
        <h1 className='text-5xl py-5 hvr-float cursor-pointer textclear'>Fullstack Developer</h1>
        <h1 className='text-4xl py-3 textclear'>Front-End & Back-End</h1>
        <h1 className='text-xl py-3 textclear'>📍Based in Hamburg, Germany</h1>
      </div>
    </div>
    </>
  )
}

export default Header