import img from '../public/plato2.webp'
import Image from 'next/future/image'

export const Dishes = () => {
    return (
        <div className="w-full h-auto bg-slate-900 px-3 lg:px-20 pt-40">
            <div className="max-w-[1320px] w-full mx-auto py-10 text-center lg:text-start mb-10">
                <h3 className='text-yellow-400 italic text-2xl font-normal'>Popular Dishes</h3>
                <h2 className='text-white italic text-5xl font-extrabold'>PERUVIAN DISHES</h2>
            </div>
            <div className=" max-w-[1320px] w-full mx-auto flex flex-col lg:flex-row flex-wrap justify-between  items-center">
                <div className="w-7/12 lg:w-[30%]">
                    <div className="overflow-hidden">
                        <Image src={img} className="w-full m-0 h-auto hover:scale-125 hover:opacity-40 transform transition duration-1000" alt='Plato' />
                    </div>
                    <div className="bg-red-900 mb-14 ">
                        <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
                    </div>
                </div>
                <div className="w-6/12 lg:w-[30%]">
                    <div className="overflow-hidden">
                        <Image src={img} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-1000" objectfit="cover" alt='Plato' />
                    </div>
                    <div className="bg-red-900 mb-14 ">
                        <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
                    </div>
                </div>
                <div className="w-6/12 lg:w-[30%]">
                    <div className="overflow-hidden">
                        <Image src={img} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-1000" objectfit="cover" alt='Plato' />
                    </div>
                    <div className="bg-red-900 mb-14 ">
                        <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
                    </div>
                </div>
                <div className="w-6/12 lg:w-[30%]">
                    <div className="overflow-hidden">
                        <Image src={img} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-1000" objectfit="cover" alt='Plato' />
                    </div>
                    <div className="bg-red-900 mb-14 ">
                        <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
                    </div>
                </div>
                <div className="w-6/12 lg:w-[30%]">
                    <div className="overflow-hidden">
                        <Image src={img} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-1000" objectfit="cover" alt='Plato' />
                    </div>
                    <div className="bg-red-900 mb-14 ">
                        <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
                    </div>
                </div>
                <div className="w-6/12 lg:w-[30%]">
                    <div className="overflow-hidden">
                        <Image src={img} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-1000" objectfit="cover" alt='Plato' />
                    </div>
                    <div className="bg-red-900 mb-14 ">
                        <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
