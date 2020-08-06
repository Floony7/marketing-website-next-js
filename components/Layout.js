import Footer from "../components/Footer"
import Header from "../components/Header"
import Wrapper from "../styled/Wrapper"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
