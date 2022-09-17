import React from 'react'
import backg from '../public/images/backg.jpg'
import Image from 'next/image'

function Projects() {
  return (
    <div>
        <div className='text-center'>
            <h1 className='text-4xl py-3'>Work</h1>
            <h1 className='text-xl py-3'>Check out my projects and webpages!</h1>
        </div>
            <div className='p-[50px]'>
                
                <br />
            <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10">
                <div class="flex flex-col bg-white justify-between rounded-lg border shadow-md">
                        <a href='https://kevinspictures.netlify.app/' target='_blank' className='border-[-10px] hover:scale-110 ease-in duration-500 transform-none"'>
                            <Image 
                            src={backg}
                            alt='kevin pictures tumbnail'
                            />
                        </a>
                        <div className='p-4'>
                            <h5 class="mb-2 text-2xl py-3">KEV's Pictures</h5>
                            <p class="mb-3 text-xl">Photography Portofolio</p>
                            <p class='mb-3 font-normal'>Collection of photographies taken, edited and displayed by me.</p>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white justify-between rounded-lg border shadow-md">
                        <a href='#' target='_blank' className='border-[-10px] hover:scale-110 ease-in duration-500 transform-none"'><p>image</p></a>
                        <div className='p-4'>
                            <h5 class="mb-2 text-2xl py-3">CovidPortal</h5>
                            <p class="mb-3 text-xl">Covid19 Testing Booking App</p>
                            <p class='mb-3 font-normal'>Choose between the avaliable options and book an appointment!</p>
                        </div>
                    </div>
                    <div class="flex flex-col bg-white justify-between rounded-lg border shadow-md">
                        <a href='#' target='_blank' className='border-[-10px] hover:scale-110 ease-in duration-500 transform-none"'><p>image</p></a>
                        <div className='p-4'>
                            <h5 class="mb-2 text-2xl py-3">Daria's Paintings</h5>
                            <p class="mb-3 text-xl">text</p>
                            <p class='mb-3 font-normal'>text</p>
                        </div>
                    </div>
                </div>

            </div>
    </div>
        
  )
}

export default Projects