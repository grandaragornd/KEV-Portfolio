import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiFillFile, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React, { useState } from 'react';



    const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(prev => !prev);
      };

    return <>
        <div className='fixed w-full h-20 bg-stone-900/40 z-[100] text-white'>
            <div className='flex justify-between items-center w-full h-full px-2xl:px-16'>
                <Link href='./'><h1 className='ml-10 text-4xl tracking-tighter hover:tracking-wide' id='logo'>KEV</h1></Link>
            <div>
            
                <ul className='mr-10 hidden md:flex'>
                    <Link href='./'><li className='ml-10 text-md hover:scale-75 ease-in duration-200 transform-none"'>HOME</li></Link>
                    <Link href='./about'><li className='ml-10 text-md hover:scale-75 ease-in duration-200 transform-none"'>ABOUT</li></Link>
                    <Link href='./contact'><li className='ml-10 text-md hover:scale-75 ease-in duration-200 transform-none"'>CONTACT</li></Link>
                </ul>
                
                <div onClick={handleNav} className='md:hidden cursor-pointer px-4'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
            
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black ease-in duration-500'
                                         : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='p-10 flex w-full items-center justify-between bg-stone-900/40'>
                            <h1 className='text-4xl tracking-tighter hover:tracking-wide'>KEV</h1>
                            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
                            <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col bg-stone-900/40'>
                            <ul className='uppercase'>
                            <Link href='./'><li className='ml-10 text-xl py-4' onClick={handleNav}>Home</li></Link>
                            <Link href='./about'><li className='ml-10 text-xl py-4' onClick={handleNav}>About</li></Link>
                            <Link href='./contact'><li className='ml-10 text-xl py-4' onClick={handleNav}>Contact</li></Link>
                            </ul>
                        </div>
                        <div className='flex items-center justify-around my-4 w-full sm:w-[80%] bg-stone-900/40'>
                            <div className='rounded-full shadow-lg p-3 cursor-pointer'>
                            <AiFillFile size={25}/>
                            </div>
                            <div className='rounded-full shadow-lg p-3 cursor-pointer'>
                            <AiFillLinkedin size={25}/>
                            </div>
                            <div className='rounded-full shadow-lg p-3 cursor-pointer'>
                                <AiFillGithub size={25}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavBar;