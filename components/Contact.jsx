

export const Contact = () => {
    return (
        <div className="w-full px-3 lg:px-16 bg-slate-900 border-b-4 border-yellow-400">
            <div className="max-w-[1320px] bg-red-900 px-3 md:px-10 lg:px-10 2xl:20 py-10 mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <h3 className="text-white font-normal italic text-xl">We Are Here To Assist You</h3>
                    <h2 className="text-white font-extrabold italic text-4xl">CONTACT US TODAY</h2>
                </div>
                <form action="" className="space-x-4">
                    <input className="bg-transparent border outline-offset-0 text-white px-8 py-3 focus:outline-none" type="text" placeholder="Name" />
                    <input className="bg-transparent border outline-offset-0 text-white px-8 py-3 focus:outline-none" type="text" placeholder="Phone" />
                    <input className="bg-yellow-400 px-20 py-3 text-red-900 italic font-extrabold text-lg cursor-pointer" type="submit" value="Send" />
                </form>
            </div>
            <h4 className="text-white italic text-sm mt-8 text-center mx-auto pb-14">© 2020 All Rights Reserved To Norkys2.Com | Wesite Designed By: <span className="text-yellow-400">Miller Uriol</span> </h4>
        </div>
    )
}
