import Link from "next/link"
import { device } from "../styled/device"
import styled from "styled-components"

const Nav = styled.nav`
  width: 90%;
  display: flex;
  /* flex-basis: 100%; */
  justify-content: space-evenly;
  @media ${device.mobileL} {
    width: 40%;
  }
`

const SiteLogo = styled.h1`
  width: 90%;
  /* flex-basis: 100%; */
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto;
  @media ${device.mobileL} {
    width: 40%;
  }
`

const NavbarInner = styled.div`
  display: flex;
  padding: 5px;
  width: 90vw;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.mobileL} {
    justify-content: space-between;
    align-items: center;
  }
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
