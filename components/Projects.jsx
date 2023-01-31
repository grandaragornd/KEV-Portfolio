import React from 'react'
import backg from '../public/images/backg.jpg'
import dashboard from '../public/images/dashboard.png'
import Image from 'next/image'

function Projects() {
  return (
    <div>
        <div className='text-center text-white w-auto py-[30px]'>
            <h1 className='text-4xl py-3'>Work</h1>
            <h1 className='text-2xl py-3'>Check out my projects!</h1>
        </div>
            <div className='p-[50px]'>
                
                <br />
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10 text-white">
                <div className="flex flex-col hover:bg-[#424242] bg-[#212121] justify-between rounded-lg shadow-md hover:scale-110 ease-in duration-500 transform-none">
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
                        </div>
                    </div>
                    
                    <div className="flex flex-col bg-[#212121] hover:bg-[#424242] justify-between rounded-lg shadow-md hover:scale-110 ease-in duration-500 transform-none">
                        <a href='https://kev-dashboard.netlify.app/' target='_blank' className='border-[-10px]"' rel="noreferrer">
                            <Image 
                            src={dashboard}
                            alt='dashboard thumbnail'                           
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3">Dashboard</h5>
                            <p className="mb-3 text-xl">Sales Overview</p>
                            <p className='mb-3 font-normal'>Single web app with a display of sales information, customers and settings.</p>
                        </div>
                    </div>
                    {/* 
                    <div className="flex flex-col bg-[#212121] hover:bg-[#424242] justify-between rounded-lg shadow-md hover:scale-110 ease-in duration-500 transform-none">
                        <a href='#' target='_blank' className='border-[-10px]"'>
                            <Image 
                            src={dariaart}
                            alt='daria art cover tumbnail'
                            height='415px'
                            width='415px'
                            layout='responsive'
                            />
                        </a>
                        <div className='p-4'>
                            <h5 className="mb-2 text-3xl py-3"></h5>
                            <p className="mb-3 text-xl"></p>
                            <p className='mb-3 font-normal'></p>
                        </div>
                    </div>
                    */}
                </div>

            </div>
    </div>
        
  )
}

export default Projects