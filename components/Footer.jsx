
import { AiOutlineInstagram, AiFillLinkedin, AiFillFile, AiFillGithub, } from 'react-icons/ai'
import Link from 'next/link';

export default function Footer() {
    return <>
    <footer className="py-3 md:px-8 md:py-4 text-white bg-[#0e1111] inline-block w-full">
    <div className="flex w-full justify-around">
        <Link href='./'><h1 className='ml-10 text-4xl hvr-float cursor-pointer hiddenlogo' id='logo'>KEV</h1></Link>
        <a href="#" className="hover:underline hidden sm:block" rel="noreferrer"><p className="block text-sm pl-[80px] pt-[7px]">© 2022 KEV Portofolio</p></a>
        <ul className="flex gap-5 text-sm">
            <li className='hvr-float'>
                <a href="https://www.instagram.com/saintkevinst/" className="mr-4 md:mr-6" target='_blank' rel="noreferrer"><AiOutlineInstagram size={30} className='insta'/></a>
            </li>
            <li className='hvr-float'>
                <a href="https://www.linkedin.com/in/kevin-perea-enriquez/" className="mr-4 md:mr-6" target='_blank' rel="noreferrer"><AiFillLinkedin size={30} className='linkedin'/></a>
            </li>
            <li className='hvr-float'>
                <a href="https://drive.google.com/file/d/1VyB_28H4yR7V_m9imxYZAQ01L1vts5aj/view?usp=share_link" className="mr-4 hover:underline md:mr-6 " target='_blank' rel="noreferrer"><AiFillFile size={30} className='file'/></a>
            </li>
            <li className='hvr-float'>
                <a href="https://github.com/grandaragornd" className="hover:underline" target='_blank' rel="noreferrer"><AiFillGithub size={30} className='github'/></a>
            </li>
        </ul>
    </div>
    </footer>
    </>
}