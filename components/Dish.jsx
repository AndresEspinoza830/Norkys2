import Image from 'react/future/image';

const Dish = () => {
    return (
        <div className='max-w-[1320px] px-10 py-8 mx-auto flex justify-between'>
            <div className=''>
                <h2 className="text-[#00833e] text-3xl font-extrabold mb-6 font-abc">COMBO LIMONADA</h2>
                <h3 className='font-abc font-bold text-xl mb-2'>Descripcion</h3>
                <p className='font-abc text-xl text-[#555555] mb-5'>1 POLLO A LA BRASA + PAPAS FRITAS + ENSALADA CLÁSICA + LIMONADA 2L + SALSAS</p>
                <h3 className='font-abc font-bold text-xl mb-4'>Observaciones del producto</h3>
                <div className='flex flex-col mb-5'>
                    <input type="text" id='mensaje' className='bg-transparent border outline-offset-0 rounded-lg text-black px-8 py-3 focus:outline-none' />
                    <label htmlFor="mensaje" className='font-abc font-light text-sm'>Máximo 30 caracteres</label>
                </div>
                <div className='flex items-center mb-5'>
                    <h3 className='font-abc font-bold text-xl mb-2'>Cantidad</h3>
                    <input type="number" name="" id="" placeholder='0' className='bg-transparent border ml-6 text-center outline-offset-0 rounded-lg text-black p-1 focus:outline-none place-content-center placeholder-zinc-900' />
                </div>
                <div>
                    <h3 className='font-abc font-bold text-xl mb-5'>Opciones:</h3>

                </div>
                <h3 className='font-abc font-extrabold text-4xl mb-8'>S/ 74.90</h3>
                <button className='bg-[#00833e] text-[#fed925] w-full py-3 rounded-lg font-abc text-xl font-bold'>AGREGAR AL CARRITO</button>

            </div>
            <div className='w-5/12'>
                <Image src={img} className="w-full m-0 h-auto" />
            </div>

        </div>
    )
}

export default Dish;