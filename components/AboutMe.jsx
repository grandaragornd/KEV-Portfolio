import React from 'react'
import bwpfp from '../public/images/bwpfp.jpeg'
import marcainstitut from '../public/images/marcainstitut.jpg'
import codingschool from '../public/images/codingschool.png'
import Image from 'next/image'
import {IoIosSchool, IoIosDesktop, IoIosBriefcase} from 'react-icons/io'

function AboutMe() {
  return (
    <>
    <main className='flex justify-center items-center m-5 sm:pt-[200px] sm:p-[40px] p-2 pt-[80px]'>
        <div className='items-center w-full rounded-lg shadow-lg shadow-black sm:aboutflex justify-center'>
        <div className='drop-shadow-2xl w-auto'>
                <Image 
                className='grayscale rounded-full sm:rounded-xl'
                src={bwpfp}
                alt='picture of kevin'
                priority
                height='500px'
                width='500px'
                />
            </div>
            <div className='px-[20px] sm:wflex-[50%] sm:w-[50%] sm:mx-[50px] w-full text-white'>
                <h2 className='text-4xl py-4 font-bold animate__animated animate__slideInUp'>About Me</h2>
                <h2 className='font-semibold text-xl py-4 animate__animated animate__slideInUp'>I&apos;m Kevin, a Web Developer working as a Software Developer at <a href='https://www.flow-consult.de/' target='_blank' rel='noreferrer' className='hover:text-[#0A66C2] cursor-pointer'>Digital Flow</a> creating solutions (web apps, user interfaces and platforms) with an incredible and experienced team located in Germany.</h2>
                <p className='text-xl animate__animated animate__slideInUp'>
                I&apos;m a 22-year-old born in Cali, Colombia, raised in Barcelona, Spain and based in Hamburg, Germany focused on Web Development and Programming, creating Landing Pages, Web Apps and Ecommerce Webpages.<br /> <br />My passion for programming began in 2016 in high school, when I was creating Android Apps with App Inventor and experimenting with electronics using Arduino.
                In 2022, I studied at <a href='https://www.wbscodingschool.com/' target='_blank' rel='noreferrer' className='hover:text-[#0A66C2] cursor-pointer'>WBS Coding School</a>, located in Berlin, Germany, where I mastered my web-development, programming and design skills.
                </p>
            </div>
        </div>
    </main>
    <div className=' text-white flex-col justify-center items-center m-5 w-full'>
        <div className='py-4 text-center'>
            <h2 className='text-4xl'>Education</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center justify-center'>
                    <IoIosSchool size={40}/>
                    <h2 className='text-3xl pl-4'>IES Bernat Metge</h2>
            </div>
            <div className='flex items-center justify-center'>
                <IoIosDesktop size={40}/>
                <h2 className='text-3xl pl-4'>WBS Coding School</h2>
            </div>
        </div>
    </div>

    <div className=' text-white flex-col justify-center items-center m-5 w-full'>
        <div className='py-4 text-center'>
            <h2 className='text-4xl'>Work Experience</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex items-center justify-center'>
                    <IoIosBriefcase size={40}/>
                    <h2 className='text-3xl pl-4'>Flow Digital Media</h2>
            </div>
        </div>
    </div>

   
    </>
  )
}

export default AboutMe