import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineFacebook, AiFillGithub } from 'react-icons/ai'


function ContactMe() {
  return (
    <>
    <main className='inline-block bg-[#0e1111]'>
      <div className="pt-[150px] m-auto text-center text-white">
        <h1 className="text-4xl py-3 textclear font-bold">Contact Form</h1>
        <p className="text-2xl py-2 textclear font-semibold">Send me a message!</p>
      </div>
      <div className="flex justify-center ">
          <div className="grid grid-cols-4 gap-4 text-white items-center pt-[40px]">
            <Link href='https://www.instagram.com/saintkevinst/' target='_blank' rel="noreferrer">
              <AiOutlineInstagram size={40} className='cursor-pointer hvr-float insta'/>
              </Link>
            <Link href='https://www.linkedin.com/in/kevin-perea-enriquez/' target='_blank' >
            <AiFillLinkedin size={40} className='cursor-pointer hvr-float linkedin'/>
              </Link>
            <Link href='https://github.com/grandaragornd' target='_blank' rel="noreferrer" >
            <AiFillGithub size={40} className='cursor-pointer hvr-float github' />
              </Link>
              <Link href='https://www.facebook.com/grandaragornd/' target='_blank' rel="noreferrer" >
            <AiOutlineFacebook size={40} className='cursor-pointer hvr-float facebook' />
              </Link>
          
          
          </div>
      </div>
      
      {/*contact card*/}
      <div className="flex items-center justify-center w-screen text-white my-[50px] m-[30px]">
      <form action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18" method="POST" className="hvr-float">      
        <input name="name" type="text" className="feedback-input" placeholder="Name*" required/>
        <input name="subject" type="text" className="feedback-input" placeholder="Subject" />    
        <input name="email" type="text" className="feedback-input" placeholder="Email | Contact*" required/>
        <textarea name="text" className="feedback-input" placeholder="Message*" required></textarea>
        <div className="pb-5 text-center">
        <input type='checkbox' className="cursor-pointer" required></input><span className="pl-4">I accept the <a href="https://getform.io/legal/privacy-policy" target='_blank' rel="noreferrer" className="hover:text-green-500">GetForm.io</a> Privacy Policy.</span>
        </div>
        <input type="submit" value="SUBMIT" className="hvr-float py-3 bg-white text-black sm:bg-[#0e1111] sm:text-white" />
        <input type="reset" value="CLEAR" className="hvr-float text-center py-3"/>
      </form>
      </div>
      </main>
    </>
  );
}

export default ContactMe;
