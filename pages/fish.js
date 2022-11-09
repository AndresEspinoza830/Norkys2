import { Layout } from "../components/Layout"
import Fish from "../components/Fish"

const fish = ({ image, title, description, price }) => {
    return (
        <Layout>
            <Fish image={image} title={title} description={description} price={price} />
        </Layout>
    )
}


export default fish

