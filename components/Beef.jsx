import Image from 'next/future/image'
import datos from '../api/datos'
console.log(datos);

const Beef = () => {
    return (
        <div>
            <Image />
            <div>
                <h2>{ }</h2>
                <p>{ }</p>
                <h3>{ }</h3>
                <button>Comprar</button>
            </div>
        </div>
    )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
    const data = await {} // your fetch function here 

    return {
        props: {

        }
    }
}

getStaticProps();

export default Beef