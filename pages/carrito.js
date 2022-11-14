import { useEffect, useState } from 'react'          //Primero importar coasa de react, next,componentes,estilos
import NavMenu from '../components/NavMenu';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.price), 0)
        setTotal(calculoTotal);

    }, [carrito])

    return (
        <>
            <NavMenu />
            <main className='w-full max-w-[1320px] px-2 md:px-10'>

                <h2 className='text-xl font-bold '>Articulos</h2>

                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito.map(producto => (
                        <div key={producto.id} className="mb-6">
                            <div>
                                <img width={250} height={240} src={producto.image} alt={producto.name} />
                            </div>
                            <div>
                                <p>{producto.name}</p>
                                <div>
                                    <p>Cantidad:</p>
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
                                </div>
                                <span>${producto.price}</span>
                                <p>Subtotal: $ <span>{producto.cantidad * producto.price}</span></p>
                                {/* <button
                                    className='text-red-600 cursor-pointer'
                                    type='button'
                                    onClick={eliminarProducto(producto.id)}
                                >
                                    X

                                </button> */}
                            </div>

                        </div>
                    ))
                )}

                <aside>
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: ${total}</p>
                </aside>
            </main>
        </>

    )
}

export default Carrito