import React from 'react'
import bwpfp from '../public/images/bwpfp.jpeg'
import marcainstitut from '../public/images/marcainstitut.jpg'
import codingschool from '../public/images/codingschool.png'
import Image from 'next/image'

function AboutMe() {
  return (
    <>
        <div className='pt-[160px] pb-[50px] flex gap-11 flex-col aboutflex mx-[50px] items-center text-white rounded-lg shadow-lg shadow-black p-7 bg-black'>   
            <div className='drop-shadow-2xl w-auto'>
                <Image 
                className='rounded-full grayscale'
                src={bwpfp}
                alt='picture of kevin'
                priority
                height='500px'
                width='500px'
                
                />
            </div>
            <div className='w-full '>
                <h1 className='text-3xl py-4'>About Me</h1>
                <p className='text-xl'>
                I&apos;m a 21-year-old born in Cali, Colombia, raised in Barcelona, Spain and based in Hamburg, Germany focused on Web Development and Programming, creating Landing Pages, Web Apps and Ecommerce Webpages.<br /> <br />My passion for programming began in 2016 in high school, when I was creating Android Apps with App Inventor and experimenting with electronics using Arduino.
                In 2022, I studied at WBS Coding School, located in Berlin, Germany, where I mastered my web-development, programming and design skills.
                </p>
            </div>
        </div>
        
        <div className='py-[50px] text-white'>
            <div className='text-center'>
                <h1 className='text-4xl py-[50px]'>Education</h1>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 m-[50px]'>
                <div className='flex gap-5 bg-black hover:bg-[#212121] rounded-xl shadow-lg shadow-black hover:ease-in duration-500 transform-none cursor-pointer w-auto p-5 '>
                    <a href='https://agora.xtec.cat/iesbernatmetge/' target='_blank' rel="noreferrer" className='hvr-float'>
                        <Image 
                        src={marcainstitut}
                        height='150px'
                        width='150px'
                        alt='bernat metge thumbnail'
                        />
                    </a>
                    <div>
                        <h1 className='text-3xl'>Bernat Metge</h1>
                        <h2 className='text-xl'>Secondary School</h2>
                        <h2 className='text-xl'>Sciences and Technologies</h2>
                        <p>2016-2018, Barcelona, Spain</p>
                    </div>
                    
                </div>
                <div className='flex bg-black gap-5 hover:bg-[#212121] rounded-xl shadow-lg shadow-black hover:ease-in duration-500 transform-none cursor-pointer w-auto p-5'>
                    <a href='https://www.wbscodingschool.com/' target='_blank' rel="noreferrer" className='hvr-float'>
                        <Image 
                        src={codingschool}
                        height='150px'
                        width='150px'
                        alt='bernat metge thumbnail'
                        />
                    </a>
                    <div>
                        <h1 className='text-3xl'>WBS Coding School</h1>
                        <h2 className='text-xl'>Full Stack Web and App Development</h2>
                        <h2 className='text-md'>Certification of web design, development and deployment.</h2>
                        <p>2022, Hamburg, Germany</p>
                        <p></p>
                    </div>
                </div>        
            </div>

        </div>
    </>
  )
}

export default AboutMe