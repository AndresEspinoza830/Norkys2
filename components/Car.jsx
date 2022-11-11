import { useState, useEffect } from 'react';

const Car = ({ setCar }) => {

    const [platito, setPlatito] = useState([]);

    const handleCerrar = () => {
        setCar(false);
    }

    useEffect(() => {
        const obtenerLS = () => {
            const platosLS = JSON.parse(localStorage.getItem('platos')) ?? [];
            setPlatito(platosLS);
        }
        obtenerLS();
    }, []);

    console.log(platito)


    return (
        <div className="w-[340px] absolute right-0 top-0 shadow-lg shadow-stone-300 border-2  bg-slate-50 h-screen p-4">
            <a className="flex justify-end" onClick={handleCerrar}>
                <svg
                    className="w-6 fill-white stroke-slate-50 stroke-1 cursor-pointer text-white"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M 590.265 511.987 l 305.521 -305.468 c 21.617 -21.589 21.617 -56.636 0.027 -78.252 c -21.616 -21.617 -56.663 -21.617 -78.279 0 L 512.012 433.735 L 206.544 128.213 c -21.617 -21.617 -56.635 -21.617 -78.252 0 c -21.616 21.589 -21.616 56.635 -0.027 78.252 L 433.76 511.987 L 128.211 817.482 c -21.617 21.59 -21.617 56.635 0 78.251 c 10.808 10.81 24.967 16.213 39.125 16.213 c 14.159 0 28.318 -5.403 39.126 -16.213 l 305.522 -305.468 L 817.48 895.788 C 828.289 906.597 842.447 912 856.606 912 s 28.317 -5.403 39.125 -16.212 c 21.618 -21.59 21.618 -56.636 0.028 -78.252 L 590.265 511.987 Z" fill="#333333" /></svg>
            </a>
            <div>
                <h2>hola</h2>
            </div>

        </div>




    )
}

export default Car