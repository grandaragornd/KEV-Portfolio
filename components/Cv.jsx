import Image from "next/image";
import bwpfp from '../public/images/bwpfp.jpeg'

const Cv = () => {
  return (
    <div className='w-full inline-block h-screen'>
        <div className='h-[10vh]'></div>
        <div className="flex justify-center w-full">
        <Image 
                src={bwpfp}
                alt='picture of kevin'
                height='200px'
                width='200px'
            />
        </div>
        <div className='p-[50px] text-white'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <h2>Kevin Perea</h2>
                </div>

                <div>
                    <h2>Work Experience</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cv;