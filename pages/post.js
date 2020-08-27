// import matter from "gray-matter"
// import ReactMarkdown from "react-markdown"
// const glob = require("glob")

const Post = (props) => {
  return (
    <>
      <h1>Things</h1>
      <p>Post details</p>
    </>
  )
}

export default Post

// export async function getStaticProps({ ...context }) {
//   const { slug } = context.params
//   const content = await import(`./posts/${slug}.md`)
//   const config = await import(`../data/config.json`)
//   const data = matter(content.default)

//   return {
//     props: {
//       siteTitle: config.title,
//       frontmatter: data.data,
//       markdownBody: data.content,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const blogs = glob.sync("posts/**/*.md")
//   const blogSlugs = blogs.map((file) => file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim())

//   const paths = blogSlugs.map((slug) => `/blog/${slug}`)

//   return {
//     paths,
//     fallback: false,
//   }
// }
