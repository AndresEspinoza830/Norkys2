
import { Layout } from '../components/Layout';
import Rotisserie from '../components/Rotisserie';

const rotisserie = ({ image, title, description, price }) => {
    return (
        <Layout>
            <Rotisserie image={image} title={title} description={description} price={price} />
        </Layout>
    )
}

export default rotisserie


export const getStaticProps = async (ctx) => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return {
        props:
        {
            id: "1",
            image: "https://norkys2.com/wp-content/uploads/2020/04/papa-a-la-huancaina-peruana-norkys-1.jpg",
            title: "COMBO LIMONADA",
            description: "1 POLLO A LA BRASA + PAPAS FRITAS + ENSALADA CLÁSICA + LIMONADA 2L + SALSAS",
            price: "74.90"
        }
    }
}
