import styled from "styled-components"
import Inner from "../styled/Inner"

const Colophon = styled.footer`
  min-height: 10vh;
  color: #fff;
  margin-top: auto;
  background-image: repeating-linear-gradient(67.5deg, hsla(127, 0%, 46%, 0.2) 0px, hsla(127, 0%, 46%, 0.2) 0px, transparent 0px, transparent 1px, hsla(127, 0%, 46%, 0.2) 1px, hsla(127, 0%, 46%, 0.2) 3px, transparent 3px, transparent 4px, hsla(127, 0%, 46%, 0.2) 4px, hsla(127, 0%, 46%, 0.2) 6px), repeating-linear-gradient(0deg, hsla(127, 0%, 46%, 0.2) 0px, hsla(127, 0%, 46%, 0.2) 0px, transparent 0px, transparent 1px, hsla(127, 0%, 46%, 0.2) 1px, hsla(127, 0%, 46%, 0.2) 3px, transparent 3px, transparent 4px, hsla(127, 0%, 46%, 0.2) 4px, hsla(127, 0%, 46%, 0.2) 6px), linear-gradient(90deg, rgb(23, 23, 23), rgb(23, 23, 23));
`

const Footer = (props) => {
  return (
    <Colophon>
      <Inner>
        <p className="align-center">&copy; Celestial Publishing {new Date().getFullYear()}</p>
      </Inner>
    </Colophon>
  )
}

export default Footer
