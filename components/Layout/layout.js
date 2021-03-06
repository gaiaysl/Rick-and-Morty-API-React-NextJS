import Head from "next/head"
import Yonlendir from "../Navbar/yonlendir"
import Footer from "../Footer/footer"

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Gaye'nin websitesi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Yonlendir />

      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
