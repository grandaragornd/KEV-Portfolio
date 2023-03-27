import React from 'react'

function Header() {
  return (
    <>
    <div className='w-full text-center backgroundheader bg-cover bg-fixed'>
    <div className='py-[200px] flex-col place-content-center text-white animate__animated animate__slideInUp'>
        <h1 className='text-4xl py-3'>I&apos;m Kevin Perea Enriquez</h1>
        <h1 className='text-5xl py-5'>Fullstack Developer</h1>
        <h1 className='text-4xl py-3'>Front-End & Back-End</h1>
        <h1 className='text-xl py-3'>📍Based in Hamburg, Germany</h1>
      </div>
    </div>
    </>
  )
}

export default Header