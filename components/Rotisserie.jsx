import Link from 'next/link';
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseclient';


const Rotisserie = () => {

    const [fetchError, setFetchError] = useState(null)
    const [smoothies, setSmoothies] = useState(null)

    useEffect(() => {
        const fetchSmoothies = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select()
            if (error) {
                setFetchError('Could not fetch the smoothies')
                setSmoothies(null)
                console.log("error:".error)
            }
            if (data) {
                let temporal = data.filter(dish => {
                    if (dish.Categories == "Rotisserie Chicken") {
                        return dish;
                    }
                })
                setSmoothies(temporal)
                // console.log(data)
                console.log("error2:".error)
            }
        }
        fetchSmoothies()
    }, [])

    // console.log(smoothies);


    return (
        <>
            <div className="max-w-[1320px] my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap w-full">
                    {fetchError && (<p>{fetchError}</p>)}
                    {smoothies && (

                        <>
                            {smoothies.map(smoothie => (
                                // if(smoothie.category== "Fish"){


                                <div className="my-1 px-1 md:w-1/2 lg:px-2 lg:w-1/3 " key={smoothie.ID} >
                                    {/* <div className="flex flex-row "> */}
                                    <div className="flex justify-start w-full  ">
                                        <div className="rounded-lg bg-white max-w-sm relative">
                                            <a href="#!">
                                                <img className="rounded-t-lg" src={smoothie.Images} alt="Dish" />
                                            </a>
                                            <div className="p-6 bottom-[-320px] absolute rounded-xl w-full bg-white border-[1px] border-[#d8d8d8]">
                                                <span className="text-gray-400 mr-3 uppercase text-xs">{smoothie.Categories}</span>
                                                <h2 className="text-[#00833e] min-h-[70px] font-abc text-2xl font-extrabold mb-2 text-center uppercase">{smoothie.Name}</h2>
                                                <p className="text-gray-700 text-base mb-4 my-custom-style">{smoothie.Shortdescription}</p>

                                                <div className='flex items-center'>
                                                    <p className="text-4xl font-abc font-semibold text-[#00833e] cursor-auto my-3">
                                                        ${smoothie.Regular_price}
                                                    </p>
                                                    <h5 className='font-abc text-[#00833e] text-xl font-bold'>.90</h5>
                                                </div>

                                                <Link href={`/component/${smoothie.Name}`}>
                                                    <a type="button" className="inline-block px-6 py-2.5 w-full bg-[#00833e] text-center text-lg leading-tight uppercase rounded shadow-md text-[#fed925] font-extrabold">Comprar</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                // </div>
                            ))}
                        </>)}
                </div>
            </div>

        </>




    )
}

export default Rotisserie;