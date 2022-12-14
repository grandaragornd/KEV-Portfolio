
import { AiOutlineInstagram, AiFillLinkedin, AiFillFile, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link';

export default function Footer() {
    return <>
    <footer className="py-5 md:px-8 md:py-4 text-white bg-[#212121] hover:bg-[#424242] hover:ease-in duration-500 transform-none inline-block w-full">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link href='./'><h1 className='ml-10 text-4xl tracking-tighter hover:tracking-wide hiddenlogo' id='logo'>KEV</h1></Link>
        <a href="#" className="hover:underline hidden sm:block" rel="noreferrer"><p className="block text-sm px-3">© 2022 KEV Portofolio</p></a>
        <ul className="flex flex-wrap px-[50px] gap-5  justify-around text-sm">
            <li className='hover:scale-75 ease-in duration-200 transform-none'>
                <a href="https://www.instagram.com/saintkevinst/" className="mr-4 md:mr-6" target='_blank' rel="noreferrer"><AiOutlineInstagram size={30}/></a>
            </li>
            <li className='hover:scale-75 ease-in duration-200 transform-none'>
                <a href="https://www.linkedin.com/in/kevin-perea-enriquez/" className="mr-4 md:mr-6" target='_blank' rel="noreferrer"><AiFillLinkedin size={30}/></a>
            </li>
            <li className='hover:scale-75 ease-in duration-200 transform-none'>
                <a href="https://drive.google.com/file/d/1VyB_28H4yR7V_m9imxYZAQ01L1vts5aj/view?usp=share_link" className="mr-4 hover:underline md:mr-6 " target='_blank' rel="noreferrer"><AiFillFile size={30}/></a>
            </li>
            <li className='hover:scale-75 ease-in duration-200 transform-none'>
                <a href="https://github.com/grandaragornd" className="hover:underline" target='_blank' rel="noreferrer"><AiFillGithub size={30}/></a>
            </li>
        </ul>
    </div>
    </footer>
    </>
}