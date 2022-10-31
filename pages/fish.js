import { Layout } from "../components/Layout"
import Fish from "../components/Fish"

const fish = ({ image, title, description, price }) => {
    return (
        <Layout>
            <Fish image={image} title={title} description={description} price={price} />
        </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return {
        props:
        {
            id: "1",
            image: "https://norkys2.com/wp-content/uploads/2022/04/norkys2-bisteck-a-lo-pobre.png",
            title: "LOMO A LO POBRE",
            description: "Grilled sirloin steak, french fries, fried onions, fried egg, fried Plaintain, Hotdog. Served with a side of white rice.",
            price: "34.90"
        }
    }
}

export default fish

