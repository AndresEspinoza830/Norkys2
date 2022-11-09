import { useState } from 'react';
import Beef from "../components/Beef";
import MainMenu from "../components/MainMenu"
import NavMenu from "../components/NavMenu"
import Car from '../components/Car'

const menu = ({ image, title, description, price }) => {


    return (
        <div className="bg-[#FAFAFA] relative">
            <Car />
            <NavMenu />
            <MainMenu />
            <main className='max-w-[1320px] px-10 2xl:px-20 py-4 mx-auto flex flex-wrap justify-between'>
                <Beef image={image} title={title} description={description} price={price} />
            </main>
        </div>

    )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return {
        props:
        {
            id: "1",
            image: "https://norkys2.com/wp-content/uploads/2020/05/Lomo-Saltado-norkys-peruvian-restaurant-3.jpg",
            title: "COMBO LIMONADA",
            description: "1 POLLO A LA BRASA + PAPAS FRITAS + ENSALADA CLÁSICA + LIMONADA 2L + SALSAS",
            price: "74.90"
        }
    }
}

export default menu