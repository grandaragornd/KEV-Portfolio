
import { AiOutlineInstagram, AiFillLinkedin, AiFillFile, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link';

export default function Footer() {
    return <>
    <footer class="p-4 md:px-8 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
        <Link href='./'><h1 className='ml-10 text-4xl tracking-tighter hover:tracking-wide p-10' id='logo'>KEV</h1></Link>
        <ul class="flex flex-wrap px-[50px] gap-5  justify-around text-sm">
            <li>
                <a href="https://www.instagram.com/saintkevinst/" class="mr-4 md:mr-6" target='_blank'><AiOutlineInstagram size={30}/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/kevin-perea-enriquez/" class="mr-4 md:mr-6" target='_blank'><AiFillLinkedin size={30}/></a>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1RX53MPaM7KKXMyJSv3ML7AdSK0zMttZu/view?usp=sharing" class="mr-4 hover:underline md:mr-6 " target='_blank'><AiFillFile size={30}/></a>
            </li>
            <li>
                <a href="https://github.com/grandaragornd" class="hover:underline" target='_blank'><AiFillGithub size={30}/></a>
            </li>
        </ul>
    </div>
    <div className='static border-b border-gray-300 my-4'></div>
    <span class="block text-sm sm:text-center">© 2022 <a href="#" class="hover:underline">KEV Portofolio</a>
    </span>
</footer>
    </>
}