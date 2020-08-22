import { device } from "../styled/device"
import styled from "styled-components"

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

const SidebarItem = styled.div`
  width: 100%;
  padding: 2px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ccc;
`

const SidebarItemBody = styled.div`
  p {
    margin-top: 0;
    font-size: 0.8rem;
    line-height: 1.3;
  }
`

const PostSidebar = (props) => {
  return (
    <Sidebar>
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
    </Sidebar>
  )
}

export default PostSidebar
