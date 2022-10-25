import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Video } from '../components/Video'
import { Dishes } from '../components/Dishes'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact'
import { Breakfast } from '../components/Breakfast'
import { Deliver } from '../components/Deliver'
import { Categories } from '../components/Categories'
import { Pay } from '../components/Pay'
import { Phone } from '../components/Phone'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Norkys2</title>
        <meta name="description" content="Polleria Norkys" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Video />

      <Dishes />
      <Breakfast />

      <Deliver />
      <Categories />
      <Pay />
      <Phone />
      <Footer />

      <Contact />




    </div>
  )
}
