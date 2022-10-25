import Image from "next/future/image"
import logo from '../public/logo2.png'

const NavMenu = () => {
    return (
        <div className="w-full px-12 2xl:px-28 py-3 ">
            <Image src={logo} objecfit="contain" />
        </div>
    )
}

export default NavMenu