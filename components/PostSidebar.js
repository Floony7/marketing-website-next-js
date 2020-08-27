import { device } from "../styled/device"
import styled from "styled-components"
import { SidebarItem, SidebarItemBody } from "../styled/Blogroll"

const Sidebar = styled.aside`
  grid-column: 1 / span 13;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.5em;
  margin-top: 0.5em;

  @media ${device.mobileL} {
    grid-column: 9 / span 4;
  }

  h3 {
    font-weight: 500;
    background-color: rgba(50, 205, 50, 1); /* Limegreen */
    padding: 7px;
    color: #fff;
  }

  h4 {
    margin-bottom: 5px;
    margin-top: 0;
    font-weight: 400;
    text-transform: none;
  }
`

const PostSidebar = (props) => {
  console.log(props)
  return (
    <Sidebar>
      <h3>Recent Posts</h3>
      {props.posts.map((post) => (
        <SidebarItem>
          <SidebarItemBody>
            <h4>{post.name}</h4>
            <p>{post.description}</p>
          </SidebarItemBody>
        </SidebarItem>
      ))}
    </Sidebar>
  )
}

export default PostSidebar
