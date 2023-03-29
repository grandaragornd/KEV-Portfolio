import React from 'react'
import backg from '../public/images/backg.jpg'
import dashboard from '../public/images/dashboard.png'
import bk from '../public/images/bk.png'
import tajam from '../public/images/tajam.png'
import sopago from '../public/images/sopago.png'
import b2b from '../public/images/b2b.png'
import mastermindlogin from '../public/images/mastermindlogin.png'
import Image from 'next/image'
import {AiOutlineFieldTime, AiOutlineSliders} from 'react-icons/ai'

function Projects() {
  return (
    <div>
        <div className='text-center text-white w-auto py-[30px]'>
            <h1 className='text-4xl py-3'>Work</h1>
            <h1 className='text-2xl py-3'>Personal Projects</h1>
        </div>
            <div className='px-[50px] pb-[50px]'>
                
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-9 text-white">
                <div className="flex flex-col hover:bg-[#424242] bg-[#212121] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://kevin-pictures.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={backg}
                            alt='kevin pictures tumbnail'
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">Kevin&apos;s Pictures</h5>
                            <p className="mb-3 text-xl">Photography Portofolio</p>
                            <p className='mb-3 font-normal'>Collection of photographies taken, edited and displayed by me.</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>3 weeks</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px]'>TailwindCSS | NextJS</p>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="flex flex-col bg-[#212121] hover:bg-[#424242] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://kev-dashboard.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={dashboard}
                            alt='dashboard thumbnail'
                            height='1000'
                            width='1000'                           
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">Dashboard</h5>
                            <p className="mb-3 text-xl">Sales Overview</p>
                            <p className='mb-3 font-normal'>Single web app with a display of sales information, customers and settings.</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>1 month</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px] w-full'>TailwindCSS | NextJS | ChartJS</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-col bg-[#212121] hover:bg-[#424242] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://bkinnenfassadengmbh.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={bk}
                            height='1000'
                            width='1000'
                            alt='bkinnen thumbnail'                           
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">BK Innenputz Fassaden GmbH</h5>
                            <p className="mb-3 text-xl">Construction services overview</p>
                            <p className='mb-3 font-normal'>Form, services list and kontakt information.</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>2 months</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px] w-full'>TailwindCSS | NextJS | GetForm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#212121] hover:bg-[#424242] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://master--b2bproduct.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={b2b}
                            alt='bkinnen thumbnail'                           
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">B2B Landing Page</h5>
                            <p className="mb-3 text-xl">Product idea presentation with filters and comparison data MockUp</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>2 weeks</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px] w-full'>PicoCSS | Angular 15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#212121] hover:bg-[#424242] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://mastermindlogin.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={mastermindlogin}
                            alt='bkinnen thumbnail'                           
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">MasterMind Login</h5>
                            <p className="mb-3 text-xl">Login Security formular for a game.</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>1 week</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px] w-full'>HTML5 | JavaScript</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='text-center text-white w-auto py-[50px]'>
                <h1 className='text-3xl py-3'>Group Projects | Shared Projects</h1>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-9 text-white">
            <div className="flex flex-col hover:bg-[#424242] bg-[#212121] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://www.sopago.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={sopago}
                            alt='sopago'
                            height='500'
                            width='1000'
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">SOPAGO</h5>
                            <p className="mb-3 text-xl">Cloud-based platform</p>
                            <p className='mb-3 font-normal'>A digital tool that helps hotels and guests connect.</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>In development</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px]'>Typescript | Anguar | PHP</p>
                                </div>
                            </div>
                        </div>
                </div> 
            <div className="flex flex-col hover:bg-[#424242] bg-[#212121] justify-between rounded-lg shadow-md hvr-float">
                        <a href='https://psd-to-html-groupproject.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={tajam}
                            alt='tajam'
                            height='500'
                            width='1000'
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">Landing Page MockUp</h5>
                            <p className="mb-3 text-xl">Agency Tajam</p>
                            <p className='mb-3 font-normal'>Basic landing page layout.</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 flex py-2 gap-3'>
                                <div className='flex items-center'>
                                    <AiOutlineFieldTime size={20}/>
                                    <p className='font-bold pl-[4px]'>3 days</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineSliders size={20}/>
                                    <p className='font-bold pl-[4px]'>CSS | HTML</p>
                                </div>
                            </div>
                        </div>
                </div>  
            </div>
            </div>
    </div>
        
  )
}

export default Projects;