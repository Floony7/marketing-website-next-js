import Layout from "../components/Layout"
import Post from "../components/Post"
import PostSidebar from "../components/PostSidebar"
import Grid from "../components/Grid"
import Wrapper from "../styled/Wrapper"
import { device } from "../styled/device"
import styled from "styled-components"
import fs from "fs"

const Main = styled.section`
  grid-column: 1 / span 13;

  @media ${device.mobileL} {
    grid-column: 1 / span 8;
  }
`

const ArticleSummary = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: 0.2em;
  margin-bottom: 0.5em;
`
const Inner = styled.div`
  padding: 0 0.5em;
`

const Blog = (props) => {
  return (
    <Layout title="Articles">
      <Wrapper>
        <Grid>
          <Main>
            <Inner>
              <h1>Articles</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo quia incidunt voluptate tempore aliquam blanditiis, aspernatur illo cumque odio architecto dignissimos et officia eaque unde culpa rem necessitatibus nobis.</p>
            </Inner>
            <ArticleSummary>
              <Inner>
                <h2>story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo quia incidunt voluptate tempore aliquam blanditiis, aspernatur illo cumque odio architecto dignissimos et officia eaque unde culpa rem necessitatibus nobis.</p>
              </Inner>
            </ArticleSummary>
            <ArticleSummary>
              <Inner>
                <h2>New article that is awesome</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo quia incidunt voluptate tempore aliquam blanditiis, aspernatur illo cumque odio architecto dignissimos et officia eaque unde culpa rem necessitatibus nobis.</p>
              </Inner>
            </ArticleSummary>
            <ArticleSummary>
              <Inner>
                <h2>New article that is awesome</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo quia incidunt voluptate tempore aliquam blanditiis, aspernatur illo cumque odio architecto dignissimos et officia eaque unde culpa rem necessitatibus nobis.</p>
              </Inner>
            </ArticleSummary>
          </Main>
          <PostSidebar posts={props.posts} />
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default Blog

export function getStaticProps() {
  const data = fs.readFileSync(`${process.cwd()}/data/blogroll.json`)
  const posts = JSON.parse(data)

  return {
    props: {
      posts: posts,
    },
  }
}
