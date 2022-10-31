import img from '../public/logo.webp'
import Image from 'next/image'

export const Video = () => {
    return (
        <div className="w-full h-screen relative text-center">
            <video src="/norkys.mp4" className="w-full h-full object-cover" autoPlay loop muted />
            <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
                <Image src={img} width={500} height={120} objectfit="contain" alt='Video' />
                <h1 className="text-8xl font-extrabold italic text-center mt-10">POLLOS A LA <br /> BRASA </h1>
                <button className=" bg-yellow-400 text-red-900 hover:bg-red-900 hover:text-yellow-400 duration-500 transition text-lg italic font-extrabold mt-16 py-3 px-8 rounded-sm">Order Online</button>
            </div>
        </div>
    )
}
