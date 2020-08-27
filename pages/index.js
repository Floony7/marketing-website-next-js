// import Head from "next/head"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Wrapper from "../styled/Wrapper"
import InnerDiv from "../styled/InnerDiv"
import Grid from "../components/Grid"
import styles from "../styles/Home.module.css"
import styled from "styled-components"
import { device } from "../styled/device"
import { SidebarItem, SidebarItemBody } from "../styled/Blogroll"
import fs from "fs"

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

export default function Home(props) {
  console.log(props.posts)
  return (
    <>
      <Layout title="Best Web Themes | Home">
        <Hero />
        <Grid>
          <Main>
            <InnerDiv>
              <Block>
                <h1>Finding the best website WordPress theme made easy</h1>
                <p className="lead">Finding a WordPress theme that works for your site can take time. Let us help!</p>
                <p>Ecommerce, blogging, studio, agency, magazine... There are a multitude of website design needs in 2020. Most of us aren't developers and want to be able to customise our sites in ways that sells our vision and identity. </p>
                <p>So off to a theme store you go, only to find the selection is so large that you don't have time to go through 100s of themes to find the best one for you.</p>
                <p>That's where we come in! Take advantage of our experience as both WordPress developers and users to find the themes in each category that are the best and easiest to use.</p>
                <p>Not a WordPress user? Great! We have also hand picked HTML templates from across the web that you can slot into your site and get it running fast.</p>
              </Block>
            </InnerDiv>
          </Main>
          <Sidebar>
            <InnerDiv>
              <Block>
                <h3>Lorem rulz yo</h3>
                {props.posts.map((post) => (
                  <SidebarItem>
                    <SidebarItemBody>
                      <h4>{post.name}</h4>
                      <p>{post.description}</p>
                    </SidebarItemBody>
                  </SidebarItem>
                ))}
              </Block>
            </InnerDiv>
          </Sidebar>
        </Grid>
      </Layout>
    </>
  )
}

export function getStaticProps() {
  const data = fs.readFileSync(`${process.cwd()}/data/blogroll.json`)
  const posts = JSON.parse(data)

  return {
    props: {
      posts: posts,
    },
  }
}
