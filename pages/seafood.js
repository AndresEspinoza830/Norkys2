import { Layout } from "../components/Layout"
import Seafood from "../components/Seafood"

const fish = ({ image, title, description, price }) => {
    return (
        <Layout>
            <Seafood image={image} title={title} description={description} price={price} />
        </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return {
        props:
        {
            id: "1",
            image: "https://norkys2.com/wp-content/uploads/2017/07/chaufa-especial-norkys-peruvian-restaurant.jpg",
            title: "ARROZ CON MARISCOS",
            description: "Grilled sirloin steak, french fries, fried onions, fried egg, fried Plaintain, Hotdog. Served with a side of white rice.",
            price: "54.90"
        }
    }
}

export default fish