import React from 'react'
import PFPKEVINcrop from '../public/images/PFPKEVINcrop.jpeg'
import marcainstitut from '../public/images/marcainstitut.jpg'
import codingschool from '../public/images/codingschool.png'
import flowdigital from '../public/images/flowdigital.png'
import pfp3 from '../public/images/pfp3.jpg'
import cfp from '../public/images/cfp.jpg'
import tsys from '../public/images/tsys.jpg'
import Image from 'next/image'
import {IoIosSchool, IoIosDesktop, IoIosBriefcase, IoIosTime, IoIosBookmarks, IoMdAttach, IoIosListBox} from 'react-icons/io'

function AboutMe() {
  return (
    <>
    <main className='flex justify-center items-center sm:pt-[200px] sm:p-[40px] p-2 pt-[80px]'>
        <div className='items-center w-full rounded-lg shadow-lg shadow-black sm:aboutflex justify-center'>
        <div className='drop-shadow-2xl w-auto'>
                <Image 
                className='rounded-full sm:rounded-xl'
                src={pfp3}
                alt='picture of kevin'
                priority
                />
            </div>
            <div className='px-[20px] sm:wflex-[50%] sm:w-[50%] sm:mx-[50px] w-full text-white'>
                <h2 className='text-4xl py-4 font-bold animate__animated animate__slideInUp'>About Me</h2>
                <p className='text-xl animate__animated animate__slideInUp'>
                I’m a 24-year-old full-stack developer, raised in Barcelona and currently based in Hamburg, Germany. With strong skills in JavaScript, HTML, and CSS, I create efficient, user-friendly web solutions. My background in IT support has sharpened my problem-solving abilities, attention to detail, and communication skills, allowing me to collaborate effectively and deliver high-quality results.
                </p>
            </div>
        </div>
    </main>


    <div className='text-white m-5'>

        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex-col items-center'>
                <div className='flex justify-center py-[30px]'>
                    <IoIosSchool size={40}/>
                    <h2 className='text-3xl pl-4'>Education</h2>  
                </div>
                <div className='grid boxflex grid-cols-1 gap-[30px] items-start py-[30px]'>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                <a target='_blank' rel='noreferrer' href='https://agora.xtec.cat/iesbernatmetge'>
                    <Image
                        src={marcainstitut}
                        height='200'
                        width='200'
                        className='rounded-lg'
                    />
                    </a>
                    <div className='text-left'>
                        <div>
                        <h3 className='text-3xl font-bold'>IES Bernat Metge</h3>
                        <p className='py-1 text-xl font-bold'>Secondary School Diploma</p>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold text-lg'>Science and Tecnhology</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold text-lg'>2016-2018</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoMdAttach size={20} /><a href='https://agora.xtec.cat/iesbernatmetge/' target='_blank' rel='noreferrer'> <span className='hover:ease-in duration-200 transform-none hoverbutton font-bold rounded-lg font-semibold p-2 text-lg'>Website</span></a>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                <a target='_blank' rel='noreferrer' href='https://www.wbscodingschool.com/'>
                <Image
                        src={codingschool}
                        height='200'
                        width='200'
                        className='rounded-xl'
                    />
                    </a>
                    <div className='text-left'>
                        <h3 className='text-3xl font-bold'>WBS Coding School</h3>
                        <p className='py-1 text-xl font-bold'>Frontend & Backend Programming</p>
                        <div className='flex items-center py-2'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold text-lg'>Fullstack Web & App</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold text-lg'>2022</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoMdAttach size={20} /><a href='https://www.wbscodingschool.com/' target='_blank' rel='noreferrer'> <span className='hover:ease-in duration-200 transform-none hoverbutton font-bold rounded-lg font-semibold p-2 text-lg'>Website</span></a>
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
                <div className='grid boxflex grid-cols-1 gap-[30px] items-start py-[30px]'>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                    <a target='_blank' rel='noreferrer' href='https://www.flow-consult.de/'>
                    <Image
                        src={flowdigital}
                        height='200'
                        width='200'
                        className='rounded-lg'
                    />
                    </a>
                    <div className='text-left'>
                            <h3 className='text-3xl font-bold'>Flow Digital</h3>
                        <div className='flex items-center py-3'>
                            <IoIosBookmarks size={25} /><span className='pl-2 font-bold text-lg'>Software Developer</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoIosTime size={25} /><span className='pl-2 font-semibold text-lg'>02/2023 - 04/2023</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoIosListBox size={25} /><a href='https://drive.google.com/file/d/1ePgwqYuVk091YIPyuXIPslwrXV1dJP7-/view?usp=sharing' target='_blank' rel='noreferrer'><span className='p-2 font-semibold hover:ease-in duration-200 transform-none hoverbutton font-bold text-lg'>Resume | Zeugniss</span></a>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoMdAttach size={25} /><a href='https://www.flow-consult.de/' target='_blank' rel='noreferrer'> <span className='hover:ease-in duration-200 transform-none hoverbutton font-bold rounded-lg font-semibold p-2 text-lg'>Website</span></a>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg flex-col flex items-center justify-center gap-5 max-w-[40rem]'>
                <a target='_blank' rel='noreferrer' href='https://www.tsys.com/'>
                    <Image
                        src={tsys}
                        height='200'
                        width='200'
                        className='rounded-xl'
                    />
                    </a>
                    <div className='text-left'> 
                            <h3 className='text-3xl font-bold'>TSYS EMEA</h3>
                        <div className='flex items-center py-2'>
                            <IoIosBookmarks size={20} /><span className='pl-2 font-semibold text-lg'>Dispute and Chargeback Specialist</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoIosTime size={20} /><span className='pl-2 font-semibold text-lg'>2024 - current</span>
                        </div>
                        <div className='flex items-center py-2'>
                            <IoMdAttach size={20} /><a href='https://www.tsys.com/' target='_blank' rel='noreferrer'> <span className='hover:ease-in duration-200 transform-none hoverbutton font-bold rounded-lg font-semibold p-2 text-lg'>Website</span></a>
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