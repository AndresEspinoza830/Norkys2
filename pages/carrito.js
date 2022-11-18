import { useEffect, useState } from 'react'
import Link from 'next/link'       //Primero importar cosas de react, next,componentes,estilos
import NavMenu from '../components/NavMenu';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto, setCarrito }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.price), 0)
        setTotal(calculoTotal);

    }, [carrito])

    const handleEliminar = () => {
        setCarrito([])
    }

    return (
        <>
            <NavMenu />

            <main className='max-w-[1320px] px-2 md:px-10 py-8 mx-auto space-y-4'>
                {carrito.length ? (
                    <h2 className='text-xl font-bold '>Productos</h2>
                ) : ''
                }

                <div className='flex items-start'>
                    {carrito.length === 0 ? <h2 className='font-bold'>Carrito Vacio</h2> : (
                        <div className='w-3/4'>
                            <table className='w-full text-center'>
                                <thead>
                                    <tr className=''>
                                        <th className='text-start '>Dish</th>
                                        <th >Producto</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {carrito.map(producto => (
                                        <tr key={producto.id} className="">
                                            <td className=''>
                                                <img src={producto.image} width={160} height={140} alt={producto.name} />
                                            </td>
                                            <td >
                                                <h3>{producto.name}</h3>
                                            </td>
                                            <td>
                                                <select
                                                    className='w-24 text-center'
                                                    onChange={e => actualizarCantidad({
                                                        id: producto.id,
                                                        cantidad: e.target.value
                                                    })}
                                                    value={producto.cantidad}
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </td>
                                            <td>
                                                <h3>{producto.price}</h3>
                                            </td>
                                            <td>
                                                <svg
                                                    className='cursor-pointer m-auto hover:fill-red-600 hover:scale-110'
                                                    width={23}
                                                    viewBox="0 0 1024 1024"
                                                    onClick={() => eliminarProducto(producto.id)}
                                                    version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M478.817 289.946c0-20.188 16.543-36.451 36.45-36.451l0 0c19.907 0 36.452 16.542 36.452 36.451l0 552.932c0 20.187-16.545 36.451-36.452 36.451l0 0c-20.188 0-36.45-16.544-36.45-36.451L478.817 289.946 478.817 289.946zM306.938 289.946c0-20.188 16.263-36.451 36.451-36.451l0 0c20.188 0 36.45 16.542 36.45 36.451l0 552.932c0 20.187-16.542 36.451-36.45 36.451l0 0c-20.188 0-36.451-16.544-36.451-36.451L306.938 289.946 306.938 289.946zM650.417 289.946c0-20.188 16.543-36.451 36.45-36.451l0 0c20.189 0 36.451 16.542 36.451 36.451l0 552.932c0 20.187-16.544 36.451-36.451 36.451l0 0c-19.907 0-36.45-16.544-36.45-36.451L650.417 289.946 650.417 289.946zM952.68 110.776 809.118 110.776l-52.433 0L756.685 64.791c0-35.609-31.965-63.648-72.901-63.648L346.473 1.143c-40.938 0-72.901 28.039-72.901 63.648l0 45.705-52.434 0L71.688 110.496c-20.188 0-36.45 16.262-36.45 36.451s16.263 36.451 36.45 36.451l76.828 0L148.516 952.23c0 39.254 32.806 71.22 72.901 71.22l587.981 0c40.096 0 72.901-31.966 72.901-71.22L882.299 183.678l70.379 0c20.187 0 36.449-16.263 36.449-36.451C989.129 127.038 972.866 110.776 952.68 110.776L952.68 110.776zM346.473 74.324l337.311 0 0 36.452L346.473 110.776 346.473 74.324 346.473 74.324zM770.704 950.827c0 0-471.617 1.684-511.713 1.684s-37.853-41.218-37.853-41.218L221.138 218.727c0-42.06 35.609-35.049 35.609-35.049l89.726 0 337.311 0 82.436 0c0 0 42.899-2.524 42.899 35.049 0 37.572 0.561 660.882 0.561 696.212C809.679 949.987 770.704 950.827 770.704 950.827L770.704 950.827z" /></svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>)}

                    {carrito.length ? (
                        <div className='w-1/4 border-[1px] px-4 py-4 rounded-md'>
                            <h2 className='text-md mb-4'>RESUMEN DEL PEDIDO</h2>
                            <p className='mb-4 font-bold border-y-[1px] py-4'>Total a pagar: ${total}</p>
                            <Link href="/menu">
                                <a className='bg-[#00833e] text-center hover:bg-[#009244] mb-2 transition duration-300 w-full block rounded-md py-3 text-white'>Seguir comprando</a>
                            </Link>
                            <button className='bg-[#ed174a] hover:bg-[#fa305f] transition duration-300 w-full rounded-md py-3 text-white'>Proceed to checkout</button>
                        </div>
                    ) : ''}



                </div>

                {carrito.length ? (
                    <button
                        type='button'
                        className='bg-indigo-700 text-white py-3 px-10 rounded-md'
                        onClick={handleEliminar}
                    >
                        Remove all
                    </button>
                ) : ''}



            </main>

        </>

    )
}

export default Carrito