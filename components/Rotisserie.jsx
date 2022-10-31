import Image from 'next/future/image'

const Rotisserie = ({ image, title, description, price }) => {
    return (
        <>
            <div className='w-[30%] border-2 rounded-md mb-6 shadow-md'>
                <Image src={image} width="380" height="270" objectfit="contain" className='border-b-2' alt='Pollo' />
                <div className='bg-white p-3'>
                    <h2 className='text-[#00833e] font-abc font-bold text-2xl text-center mb-4'>{title}</h2>
                    <p className='text-[#676767] text-sm font-abc font-normal mb-4'>{description}</p>
                    <h3 className='text-[#00833e] font-abc text-4xl font-extrabold text-center mb-4'>{price}</h3>
                    <button className='text-[#fed925] bg-[#00833e] rounded-full font-abc font-bold text-xl text-center w-full py-2 hover:bg-[#fed925] hover:text-[#00833e] duration-500 hover:scale-105'>Comprar</button>
                </div>
            </div>
            <div className='w-[30%] border-2 rounded-md mb-6'>
                <Image src={image} width="380" height="270" objectfit="contain" className='border-b-2' alt='Pollo' />
                <div className='bg-white p-3'>
                    <h2 className='text-[#00833e] font-abc font-bold text-2xl text-center mb-4'>{title}</h2>
                    <p className='text-[#676767] text-sm font-abc font-normal mb-4'>{description}</p>
                    <h3 className='text-[#00833e] font-abc text-4xl font-extrabold text-center mb-4'>{price}</h3>
                    <button className='text-[#fed925] bg-[#00833e] rounded-full font-abc font-bold text-xl text-center w-full py-2  hover:bg-[#fed925] hover:text-[#00833e] duration-500 hover:scale-105'>Comprar</button>
                </div>
            </div>
            <div className='w-[30%] border-2 rounded-md mb-6'>
                <Image src={image} width="380" height="270" objectfit="contain" className='border-b-2' alt='Pollo' />
                <div className='bg-white p-3'>
                    <h2 className='text-[#00833e] font-abc font-bold text-2xl text-center mb-4'>{title}</h2>
                    <p className='text-[#676767] text-sm font-abc font-normal mb-4'>{description}</p>
                    <h3 className='text-[#00833e] font-abc text-4xl font-extrabold text-center mb-4'>{price}</h3>
                    <button className='text-[#fed925] bg-[#00833e] rounded-full font-abc font-bold text-xl text-center w-full py-2  hover:bg-[#fed925] hover:text-[#00833e] duration-500 hover:scale-105'>Comprar</button>
                </div>
            </div>
            <div className='w-[30%] border-2 rounded-md mb-6'>
                <Image src={image} width="380" height="270" objectfit="contain" className='border-b-2' alt='Pollo' />
                <div className='bg-white p-3'>
                    <h2 className='text-[#00833e] font-abc font-bold text-2xl text-center mb-4'>{title}</h2>
                    <p className='text-[#676767] text-sm font-abc font-normal mb-4'>{description}</p>
                    <h3 className='text-[#00833e] font-abc text-4xl font-extrabold text-center mb-4'>{price}</h3>
                    <button className='text-[#fed925] bg-[#00833e] rounded-full font-abc font-bold text-xl text-center w-full py-2  hover:bg-[#fed925] hover:text-[#00833e] duration-500 hover:scale-105'>Comprar</button>
                </div>
            </div>
            <div className='w-[30%] border-2 rounded-md mb-6'>
                <Image src={image} width="380" height="270" objectfit="contain" className='border-b-2' alt='Pollo' />
                <div className='bg-white p-3'>
                    <h2 className='text-[#00833e] font-abc font-bold text-2xl text-center mb-4'>{title}</h2>
                    <p className='text-[#676767] text-sm font-abc font-normal mb-4'>{description}</p>
                    <h3 className='text-[#00833e] font-abc text-4xl font-extrabold text-center mb-4'>{price}</h3>
                    <button className='text-[#fed925] bg-[#00833e] rounded-full font-abc font-bold text-xl text-center w-full py-2  hover:bg-[#fed925] hover:text-[#00833e] duration-500 hover:scale-105'>Comprar</button>
                </div>
            </div>
            <div className='w-[30%] border-2 rounded-md mb-6'>
                <Image src={image} width="380" height="270" objectfit="contain" className='border-b-2' alt='Pollo' />
                <div className='bg-white p-3'>
                    <h2 className='text-[#00833e] font-abc font-bold text-2xl text-center mb-4'>{title}</h2>
                    <p className='text-[#676767] text-sm font-abc font-normal mb-4'>{description}</p>
                    <h3 className='text-[#00833e] font-abc text-4xl font-extrabold text-center mb-4'>{price}</h3>
                    <button className='text-[#fed925] bg-[#00833e] rounded-full font-abc font-bold text-xl text-center w-full py-2  hover:bg-[#fed925] hover:text-[#00833e] duration-500 hover:scale-105'>Comprar</button>
                </div>
            </div>

        </>
    )
}

export default Rotisserie