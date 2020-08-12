import Footer from "../components/Footer"
import Header from "../components/Header"
import Wrapper from "../styled/Wrapper"
import Router from "next/router"
import NProgress from "nprogress"
import Head from "next/head"

Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
