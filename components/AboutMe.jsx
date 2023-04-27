import React from 'react'
import bwpfp from '../public/images/bwpfp.jpeg'
import marcainstitut from '../public/images/marcainstitut.jpg'
import codingschool from '../public/images/codingschool.png'
import flowdigital from '../public/images/flowdigital.png'
import cfp from '../public/images/cfp.jpg'
import Image from 'next/image'
import {IoIosSchool, IoIosDesktop, IoIosBriefcase, IoIosTime, IoIosBookmarks, IoMdAttach} from 'react-icons/io'

function AboutMe() {
  return (
    <>
    <main className='flex justify-center items-center sm:pt-[200px] sm:p-[40px] p-2 pt-[80px]'>
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
                I&apos;m a 22-year-old born in Cali, Colombia, raised in Barcelona, Spain and based in Hamburg, Germany focused on Web Development and Programming, creating Landing Pages, Web Apps and Ecommerce Webpages.<br /> <br />
                In 2022, I studied at <a href='https://www.wbscodingschool.com/' target='_blank' rel='noreferrer' className='hover:text-[#0A66C2] cursor-pointer'>WBS Coding School</a>, located in Germany, where I improved my web-development, programming and design skills.
                </p>
            </div>
        </div>
    </main>


    <div className='text-white m-5'>

        <div className='grid grid-cols-1 sm:grid-cols-2 animate__animated animate__slideInUp'>
            <div className='flex-col items-center'>
                <div className='flex justify-center py-[30px]'>
                    <IoIosSchool size={40}/>
                    <h2 className='text-3xl pl-4'>Education</h2>  
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-[30px] items-start py-[30px]'>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                    <Image
                        src={marcainstitut}
                        height='200'
                        width='200'
                        className='rounded-xl'
                    />
                    <div>
                        <h3 className='text-2xl'>IES Bernat Metge</h3>
                        <p className='py-1'>Secondary School Diploma</p>
                        <div className='flex items-center py-1'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold'>Science and Tecnhology</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold'>2016-2018</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoMdAttach size={20} /><a href='https://agora.xtec.cat/iesbernatmetge/' target='_blank' rel='noreferrer'> <span className='pl-2 hover:text-[red] rounded-lg font-semibold'>Website</span></a>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                <Image
                        src={codingschool}
                        height='200'
                        width='200'
                        className='rounded-xl'
                    />
                    <div>
                        <h3 className='text-2xl'>WBS Coding School</h3>
                        <p className='py-1'>Frontend and Backend Programming</p>
                        <div className='flex items-center py-1'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold'>Fullstack Web & App Development</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold'>2022</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoMdAttach size={20} /><a href='https://www.wbscodingschool.com/' target='_blank' rel='noreferrer'> <span className='pl-2 hover:text-[#007398] rounded-lg font-semibold'>Website</span></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>



            <div className='flex-col items-center'>
                <div className='flex justify-center py-[30px]'>
                    <IoIosBriefcase size={40}/>
                    <h2 className='text-3xl pl-4'>Work Experience</h2>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-[30px] items-start py-[30px]'>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                    <Image
                        src={flowdigital}
                        height='200'
                        width='200'
                        className='rounded-xl'
                    />
                    <div className=''>
                        <h3 className='text-2xl'>Flow Digital</h3>
                        <p className='py-1'>Fullstack Developer</p>
                        <div className='flex items-center py-1'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold'>Software Developer</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold'>2023 - Present</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoMdAttach size={20} /><a href='https://www.flow-consult.de/' target='_blank' rel='noreferrer'> <span className='pl-2 hover:text-[#007398] rounded-lg font-semibold'>Website</span></a>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                    <Image
                        src={cfp}
                        height='200'
                        width='200'
                        className='rounded-xl'
                    />
                    <div className=''>
                        <h3 className='text-2xl'>Corona FreePass</h3>
                        <p className='py-1'>Tester</p>
                        <div className='flex items-center py-1'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold'>Rapid Antigen & PCR tester</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold'>2021 - 2022</span>
                        </div>
                        <div className='flex items-center py-1'>
                            <IoMdAttach size={20} /><a href='https://www.coronafreepass.de/' target='_blank' rel='noreferrer'> <span className='pl-2 hover:text-[#b20aff] rounded-lg font-semibold'>Website</span></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default AboutMe