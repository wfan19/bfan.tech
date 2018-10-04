import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'semantic-ui-react'

const ProjectsPage = ({data}) => (
  <div>
    <h1>Past Projects:</h1>
    {data.allMarkdownRemark.edges.map(post => (
            <div>
                {post.node.frontmatter.type === 'project' &&
                <div key = {post.node.id}>
                    <h3 className = "post-title">{post.node.frontmatter.title}</h3>
                    <br />
                    <div><p>{post.node.excerpt}</p></div>
                    <Link to = {post.node.frontmatter.path} className = "page-link"> Read more </Link>
                    <br />
                    <br />
                    <hr />
                </div>
                }
            </div>
        ))}
  </div>
)

export const pageQuery = graphql`
    query ProjectIndexQuery  {
        allMarkdownRemark(
          sort:{fields:[frontmatter___date], order: DESC}
        ){
            edges{
              node{
                    excerpt
                    frontmatter{
                    path
                    title
                    date
                    type
                    }
                    id
                }
            }
        }
    }
`
export default ProjectsPage