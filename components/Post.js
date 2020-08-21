import Grid from "../components/Grid"
import PostSidebar from "../components/PostSidebar"
import styled from "styled-components"

const Main = styled.section`
  grid-column: 2 / span 7;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.5em;
` // const Sidebar = styled.aside`
//   grid-column: 9 / span 3;
//   background-color: rgba(255, 255, 255, 0.7);
//   padding: 0.5em;

//   h3 {
//     font-weight: 500;
//     background-color: rgba(50, 205, 50, 1); /* Limegreen */
//     padding: 7px;
//     color: #fff;
//   }

//   h4 {
//     margin-bottom: 5px;
//     margin-top: 0;
//     font-weight: 400;
//     text-transform: none;
//   }
//`
// const SidebarItemBody = styled.div`
//   p {
//     margin-top: 0;
//     font-size: 0.8rem;
//     line-height: 1.3;
//   }
// `

const Post = ({ children }) => {
  return (
    <Grid style={{ marginTop: "1em" }}>
      <Main>{children}</Main>
      {/*  <Sidebar>
        <h3>Recent Posts</h3>
        <SidebarItem>
          <SidebarItemBody>
            <h4>Sidebar item 1</h4>
            <p>Count thy ways in which we can find a premium theme.</p>
          </SidebarItemBody>
        </SidebarItem>
        <SidebarItem>
          <SidebarItemBody>
            <h4>Sidebar item 2</h4>
            <p>Count thy ways in which we can find a premium theme.</p>
          </SidebarItemBody>
        </SidebarItem>
      </Sidebar> */}
      <PostSidebar />
    </Grid>
  )
}

export default Post
