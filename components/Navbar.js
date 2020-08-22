import Link from "next/link"
import { device } from "../styled/device"
import styled from "styled-components"
import { useRouter } from "next/router"

const Nav = styled.nav`
  width: 90%;
  display: flex;
  /* flex-basis: 100%; */
  justify-content: space-evenly;
  @media ${device.mobileL} {
    width: 40%;
  }
`

const SiteLogo = styled.span`
  width: 90%;
  cursor: pointer;
  /* flex-basis: 100%;
  font-size: 1.5rem;
  font-weight: 700;*/
  margin-top: 0;
  margin-bottom: 0;
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
  const router = useRouter()
  const { pathname } = router

  return (
    <NavbarInner>
      <SiteLogo>
        <Link href="/">
          <img src="/static/logo.png" alt="Best Web Themes site logo. " />
        </Link>
      </SiteLogo>
      <Nav>
        <Link href="/">
          <a className={`nice-link ${pathname === "/" ? "active" : ""}`}>Home</a>
        </Link>
        <Link href="/about">
          <a className={`nice-link ${pathname === "/about" ? "active" : ""}`}>About</a>
        </Link>
        <Link href="/premium">
          <a className={`nice-link ${pathname === "/premium" ? "active" : ""}`}>Premium themes</a>
        </Link>
        <Link href="/blog">
          <a className={`nice-link ${pathname === "/blog" ? "active" : ""}`}>Blog</a>
        </Link>
      </Nav>
    </NavbarInner>
  )
}

export default Navbar
