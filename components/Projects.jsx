import React from 'react'
import backg from '../public/images/backg.jpg'
import covidportal from '../public/images/covidportal.jpg'
import dariaart from '../public/images/dariaart.jpeg'
import Image from 'next/image'

function Projects() {
  return (
    <div>
        <div className='text-center text-white'>
            <h1 className='text-4xl py-3'>Work</h1>
            <h1 className='text-xl py-3'>Check out my projects and webpages!</h1>
        </div>
            <div className='p-[50px]'>
                
                <br />
            <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10 text-white">
                <div class="flex flex-col bg-[#424242] justify-between rounded-lg shadow-md hover:scale-110 ease-in duration-500 transform-none">
                        <a href='https://kevinspictures.netlify.app/' target='_blank' className='border-[-10px]"'>
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
                    <div class="flex flex-col bg-[#424242] justify-between rounded-lg shadow-md hover:scale-110 ease-in duration-500 transform-none">
                        <a href='#' target='_blank' className='border-[-10px]"'>
                            <Image 
                            src={covidportal}
                            alt='covidportal page tumbnail'
                            height='415px'
                            width='415px'
                            layout='responsive'
                            />
                        </a>
                        <div className='p-4'>
                            <h5 class="mb-2 text-2xl py-3">CovidPortal</h5>
                            <p class="mb-3 text-xl">Covid19 Testing Booking App</p>
                            <p class='mb-3 font-normal'>Choose between the avaliable options and book an appointment!</p>
                        </div>
                    </div>
                    <div class="flex flex-col bg-[#424242] justify-between rounded-lg shadow-md hover:scale-110 ease-in duration-500 transform-none">
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
                            <h5 class="mb-2 text-2xl py-3">Daria's Paintings</h5>
                            <p class="mb-3 text-xl">Collection of Art</p>
                            <p class='mb-3 font-normal'>Handrawing and painttings made by Daria Paach</p>
                        </div>
                    </div>
                </div>

            </div>
    </div>
        
  )
}

export default Projects