
export const Deliver = () => {
    return (
        <div className="bg-fixed bg-center w-full bg-[url('/pollo.webp')] h-[70vh] relative ">
            <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white px-4">
                <p className="text-yellow-400 italic font-medium text-2xl">The Most Delicious Rotisserie Chicken In Town</p>
                <h2 className="text-white italic uppercase font-extrabold text-7xl">WE DELIVER</h2>
            </div>
            <div className="bg-red-900 absolute w-full sm:w-full left-0 md:w-[80%] lg:w-[60%] 2xl:w-[40%] 2xl:left-[30%] md:left-[10%] lg:left-[20%] bottom-[-320px] text-center md:p-10 lg:p-20">
                <h3 className="text-yellow-400 italic text-xl font-medium">Our Clients Believe In Us</h3>
                <h2 className="text-white italic font-extrabold text-4xl mb-5">HERE IS WHAT <br />THEY ARE SAYING</h2>
                <p className="text-white italic">“Best roasted chicken in town hands down! Like"
                    Alex Rodz
                    Customer
                    “Wow what can I say for a local restaurant. It's super clean. New plates not sone mismatch stuff. Clean cloth. Clean cups. Wow made a stop from a road trip to here I'm coming back again!!!!!......(only problem is front desk service."
                    Lozo Toni
                    Customer
                    "</p>
                <h4 className="text-yellow-400 text-lg font-semibold">Lozo Tori</h4>
            </div>
        </div>
    )
}
