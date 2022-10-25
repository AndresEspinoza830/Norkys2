import Image from "next/image"
import Link from "next/link"
import img from '../public/logo.webp'
import { BsTelephoneFill } from 'react-icons/bs';



export const Navbar = () => {
    return (
        <div className="w-full h-auto shadow-sm z-[100] ">
            <div className="w-full px-12 2xl:px-28 py-2 flex justify-between items-center bg-yellow-400">
                <h2 className='text-red-900 text-lg italic font-medium  flex items-center'><BsTelephoneFill className="mr-2" /> Call Now</h2>
                <p className='text-red-900 text-lg italic font-extrabold'> Order Online</p>
            </div>
            <div className="w-full h-full px-12 2xl:px-28 py-4 flex justify-between items-center bg-red-900 ">
                <Image src={img} width='200' height='50' objectFit="contain" alt="Logo Norkys2" />
                <div>
                    <ul className="md:flex">
                        <Link href='/'>
                            <li className="text-yellow-400 text-lg italic font-extrabold ml-10 cursor-pointer">Home</li>
                        </Link>
                        <Link href='/menu'>
                            <li className="text-white text-lg italic font-extrabold ml-10 cursor-pointer ">Menu</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
