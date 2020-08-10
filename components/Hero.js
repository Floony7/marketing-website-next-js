import styled from "styled-components"

const HeroContainer = styled.div`
  background-image: url("/static/code-img.jpg");
  /* background-color: grey; */
  background-size: cover;
  background-position: 300px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroInner = styled.div`
  padding: 0.5rem;
  /* background-color: #cbe56c; */
`

const Hero = (props) => {
  return (
    <HeroContainer>
      <HeroInner>
        <div className="headline__background">
          <h2 className="headline">Tried and tested WordPress themes</h2>
        </div>
      </HeroInner>
    </HeroContainer>
  )
}

export default Hero
