import Image from "next/future/image"
import logo from '../public/logo2.png'
import Link from 'next/link';

const NavMenu = () => {
    return (
        <div className="w-full px-12 2xl:px-28 py-3 bg-white shadow-md ">
            <Link href='/'>
                <Image src={logo} objecfit="contain" alt="logo" className="cursor-pointer" />
            </Link>
        </div>
    )
}

export default NavMenu

