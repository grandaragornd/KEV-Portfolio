import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiFillFile, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React, {useState, useEffect } from 'react'


    const NavBar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(prev => !prev);
      };

      const [prevScrollPos, setPrevScrollPos] = useState(0);
      const [visible, setVisible] = useState(true)
      
      const handleScroll = () => {
          const currentScrollPos = window.scrollY
          
          if(currentScrollPos > prevScrollPos){
              
              setVisible(false)
          }else{
              setVisible(true)
          } 
      
          if(window.scrollY <= 90){
              setVisible(true)
          }
      
          setPrevScrollPos(currentScrollPos)
      }

     
      
      useEffect( () => {
          window.addEventListener('scroll', handleScroll);
      
          return () => window.removeEventListener('scroll', handleScroll)
      })

    return <>
    <div className='w-full h-20 z-[100] fixed'>
        <nav className={`${visible ? 'shownav navbg' : 'hidenav'}`}>
            <div className='flex justify-between items-center w-full text-white'>
                <Link href='./'><h1 className='ml-3 p-4 text-4xl font-semibold' id='logo'>KEV</h1></Link>
            <div>
                <ul className='mr-10 hidden md:flex text-xl'>
                    <Link href='./'><li className='ml-10 text-md hover:ease-in duration-200 transform-none hoverbutton px-3 py-1'>HOME</li></Link>
                    <Link href='./about'><li className='ml-10 text-md hover:ease-in duration-200 transform-none hoverbutton px-3 py-1'>ABOUT</li></Link>
                    <Link href='./contact'><li className='ml-10 text-md hover:ease-in duration-200 transform-none hoverbutton px-3 py-1'>CONTACT</li></Link>
                    {/*<Link href='./extra'><li className='ml-10 text-md hover:scale-75 ease-in duration-200 transform-none"'>EXTRA</li></Link>*/}
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer px-4'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        </nav>
            
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0e1111] ease-in duration-500'
                                         : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='p-10 flex w-full items-center justify-between text-white'>
                            <h1 className='text-4xl tracking-tighter hover:tracking-wide'>KEV</h1>
                            <div onClick={handleNav} className='rounded-full shadow-lg p-3 cursor-pointer'>
                            <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase text-center text-white'>
                            <Link href='./'><li className='text-xl py-10' onClick={handleNav}>Home</li></Link>
                            <Link href='./about'><li className='text-xl py-10' onClick={handleNav}>About</li></Link>
                            <Link href='./contact'><li className='text-xl py-10' onClick={handleNav}>Contact</li></Link>
                            </ul>
                        </div>
                        <div className='flex items-center justify-around my-4 w-full sm:w-[80%]'>
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