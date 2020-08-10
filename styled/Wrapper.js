import styled from "styled-components"
import { device } from "./device"

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 60vw;
  }
`

export default Wrapper
