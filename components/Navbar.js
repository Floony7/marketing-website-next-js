import Link from "next/link"
import styled from "styled-components"

const Nav = styled.nav`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`

const SiteLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0;
`

const NavbarInner = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
`

const Navbar = (props) => {
  return (
    <NavbarInner>
      <SiteLogo>Best Web Themes</SiteLogo>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Nav>
    </NavbarInner>
  )
}

export default Navbar
