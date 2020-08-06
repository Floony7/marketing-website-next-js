import styled from "styled-components"
import Inner from "../styled/Inner"

const Footer = (props) => {
  return (
    <Inner>
      <p>&copy; Celestial Publishing {new Date().getFullYear()}</p>
    </Inner>
  )
}

export default Footer
