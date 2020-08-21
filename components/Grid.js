import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  margin: 0 auto;
  gap: 0.5em;
`

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>
}

export default Grid
