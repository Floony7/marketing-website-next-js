import styled from "styled-components"

const StyledTitle = styled.h1`
  background-color: rgba(50, 205, 50, 1);
  padding: 1em 1.5em;
  max-width: 30vw;
`

const PageTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default PageTitle
