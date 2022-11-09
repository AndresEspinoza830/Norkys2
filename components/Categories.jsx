import Image from 'next/future/image';
import image from '../public/de1.webp'

export const Categories = () => {
    return (
        <div className="w-full px-3 lg:px-20 bg-slate-900 pt-[500px] pb-20 ">
            <div className="max-w-[1320px] w-full mx-auto">
                <h2 className="text-yellow-400 italic font-semibold text-2xl">Dishes By</h2>
                <h3 className="text-white font-extrabold text-5xl italic">CATEGORIES</h3>
            </div>
            <div className='max-w-[1320px]  w-full mx-auto flex justify-between py-10'>
                <div className='bg-red-900 w-[22%] text-center p-2 h-20 '>
                    <h2 className='text-yellow-400 font-extrabold italic text-xl'>Appetizers</h2>
                    <h3 className='text-yellow-400 font-normal italic '>Entradas</h3>
                </div>
                <div className='bg-red-900 w-[22%]  text-center p-2 h-20 mt-10'>
                    <h2 className='text-yellow-400 font-extrabold italic text-xl'>Fish & Seafood</h2>
                    <h3 className='text-yellow-400 font-normal italic '>Pescados y Mariscos</h3>
                </div>
                <div className='w-[22%]'>

                    <Image src={image} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-2000" alt='categoria' />
                    <div className="bg-red-900 mb-14 text-center">
                        <h3 className="text-xl text-yellow-400 font-extrabold italic text-center py-2 ">Lomo Saltado</h3>
                        <h3 className='text-yellow-400 font-normal italic py-1 '>Pescados y Mariscos</h3>
                    </div>
                </div>
                <div className='w-[22%] mt-10'>
                    <Image src={image} className="w-full h-auto hover:scale-125 hover:opacity-40 transform transition duration-2000" alt='categoria' />
                    <div className="bg-red-900 mb-14 text-center ">
                        <h3 className="text-xl text-yellow-400 font-extrabold italic text-center py-2 ">Lomo Saltado</h3>
                        <h3 className='text-yellow-400 font-normal italic py-1 '>Pescados y Mariscos</h3>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='bg-yellow-400 text-red-900 font-extrabold italic px-7 py-3 hover:text-yellow-400 hover:bg-red-900 transition duration-500'>Menu</button>

            </div>

        </div>

    )
}
