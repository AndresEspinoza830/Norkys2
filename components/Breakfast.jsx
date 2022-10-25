import Image from 'next/image'
import order from '../public/breakfast.webp'

export const Breakfast = () => {
    return (
        <div className="w-full bg-red-900 px-3 lg:px-20 py-20">
            <div className=" max-w-[1320px] mx-auto flex justify-between items-center">
                <Image src={order} className="w-full h-auto" objectfit="cover" />
                <div className="self-end">
                    <h3 className="text-white italic font-medium text-2xl ">Saturday And Sundays</h3>
                    <h2 className="text-white italic font-extrabold text-5xl ">PERUVIAN <br /> BREAKFAST</h2>
                    <button className=" bg-yellow-400 text-red-900 hover:scale-110  duration-600 ease-in-out transition text-lg italic font-extrabold mt-4 py-2 px-8">Order Now</button>
                </div>
                <div className='text-white'>
                    -------------------------------------
                </div>
            </div>
        </div>
    )
}
