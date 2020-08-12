import styled from "styled-components"

const StyledTitle = styled.h1`
  /* background-color: rgba(50, 205, 50, 1); */
  text-align: center;
`

const PageTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default PageTitle
