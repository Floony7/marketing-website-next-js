import Footer from "../components/Footer"
import Header from "../components/Header"
import Wrapper from "../styled/Wrapper"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = (url) => {
  console.log(url)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
