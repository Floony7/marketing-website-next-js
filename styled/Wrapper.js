import styled from "styled-components"
import { device } from "./device"

const Wrapper = styled.div`
  width: 95vw;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 70vw;
  }
`

export default Wrapper
