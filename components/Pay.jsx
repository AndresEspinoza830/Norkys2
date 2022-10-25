import Image from 'next/image'
import ig from '../public/ul1.jpg'

export const Pay = () => {
    return (

        <div className='w-full px-3 lg:px-20 bg-red-900 py-20'>
            <div className='max-w-[1320px] w-full mx-auto'>
                <h3 className='text-yellow-400 italic text-2xl'>Pague en línea o despues del delivery</h3>
                <h2 className='text-white font-extrabold italic text-6xl'>PAY ON DELIVERY</h2>
                <h2 className='text-yellow-400 font-extrabold italic text-6xl'>PAY ONLINE</h2>
                <button className='bg-yellow-400 text-red-900 py-2 px-3 italic font-extrabold text-xl mt-10'>Order For Delivery, Now</button>
            </div>

        </div>
    )
}
