import Image from 'next/image'

export const Footer = () => {
    return (
        <div>
            <div className=" bg-slate-900 text-center py-24 pt-20">
                <div className="container mx-auto">
                    <div className="text-center flex justify-center mb-8">
                        <Image src='/logo.webp' width={200} height={50} alt="Descripcion" />
                    </div>

                    <h3 className="text-white italic">Norkys2 Restaurant and Pollos a la Brasa Is a Family based company </h3>
                    <h2 className="text-yellow-400 text-2xl font-medium my-8">Perth Amboy</h2>
                    <div className="w-6/12 container mx-auto p-6 border-y-2 border-yellow-400">
                        <ul className="flex justify-around">
                            <li className="text-yellow-400 italic text-lg">(732) 442-1383 </li>
                            <li className="text-yellow-400 text-center italic text-lg">475 New Brunswick Ave,<br />
                                Perth Amboy, NJ 08861</li>
                            <li className="text-yellow-400 italic text-lg">Open: 10:00 AM <br />
                                Close: 10:00 PM </li>
                        </ul>
                    </div>

                    <h2 className="text-white text-2xl my-8">Manville</h2>
                    <div className="w-6/12 container mx-auto  p-6 border-y-2 border-white">
                        <ul className="flex justify-around mt-8">
                            <li className="text-white italic text-lg">(732) 442-1383 </li>
                            <li className="text-white italic text-lg">244 South Main st <br />
                                Manville NJ 08835</li>
                            <li className="text-white italic text-lg">Open: 10:00 AM<br />
                                Close: 10:00 PM </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
