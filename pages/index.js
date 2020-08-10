import Head from "next/head"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Wrapper from "../styled/Wrapper"
import InnerDiv from "../styled/InnerDiv"
import Grid from "../components/Grid"
import styles from "../styles/Home.module.css"
import styled from "styled-components"
import { device } from "../styled/device"

const Main = styled.main`
  grid-column: 1 / 13;
  min-height: 200px;
  padding: 5px;

  @media ${device.mobileL} {
    grid-column: 1 / 9;
  }
`

const Sidebar = styled.aside`
  grid-column: 1 / 13;
  min-height: 200px;
  background-color: rgba(147, 112, 219, 0.7); /* mediumpurple*/
  padding: 1em;

  @media ${device.mobileL} {
    grid-column: 9 / 13;
  }
`

const Block = styled.div`
  padding: 0.5em;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Website Themes</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Home page">
        <Hero />

        <Grid>
          <Main>
            <InnerDiv>
              <Block>
                <h1>Finding the best website WordPress theme made easy</h1>
                <p className="lead">Finding a WordPress theme that works for your site can take time. Let us help!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam totam, vitae nulla autem nemo consequatur corrupti asperiores earum numquam inventore ab maxime, nihil qui aliquam consectetur! Quas, at voluptates.Impedit, omnis. Amet ullam mollitia ipsum aperiam, aliquid, debitis quidem id eos explicabo sapiente possimus molestias. Similique magnam debitis maiores beatae optio? Illo, non sequi modi error dolore ipsam a.</p>
              </Block>
            </InnerDiv>
          </Main>
          <Sidebar>
            <InnerDiv>
              <Block>
                <h3>Lorem rulz yo</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae porro rem eius quisquam, sit labore dicta, iste cupiditate at non earum ullam itaque autem, libero quidem quibusdam nemo dolorem corrupti?</p>
              </Block>
            </InnerDiv>
          </Sidebar>
        </Grid>
      </Layout>
    </>
  )
}
