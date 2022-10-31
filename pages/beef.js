import { Layout } from "../components/Layout"
import Beef from "../components/Fish"
import supabase from "../config/supabaseClient"


const beef = ({ image, title, description, price }) => {
    return (
        <Layout>
            <Beef image={image} title={title} description={description} price={price} />
        </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return {
        props:
        {
            id: "1",
            image: "https://norkys2.com/wp-content/uploads/2020/05/Lomo-Saltado-norkys-peruvian-restaurant-3.jpg",
            title: "LOMO A LO POBRE",
            description: "Grilled sirloin steak, french fries, fried onions, fried egg, fried Plaintain, Hotdog. Served with a side of white rice.",
            price: "34.90"
        }
    }
}

export default beef