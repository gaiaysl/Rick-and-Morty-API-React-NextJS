import Head from "next/head"
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/footer"
import favicon from "../../public/favicon.ico"
import Image from "next/image"

function Layout({ children }) {
  return (
    <div>
      <Head>
      <link rel="shortcut icon"  src={favicon} />
                <title>Ricky and Morty</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
