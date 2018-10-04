import React from 'react'
import Link from 'gatsby-link'
import { query } from '../layouts';

import '../styles/blog.scss';

const blog = ({data}) => {
  return (
    <div>
        <h1>My Blog</h1>
        <p>Where I post updates on my various projects, and my life in general.</p>
        {data.allMarkdownRemark.edges.map(post => (
            <div>
                {post.node.frontmatter.type === 'blog' &&
                <div key = {post.node.id}>
                    <h3 className = "post-title">{post.node.frontmatter.title}</h3>
                    <small >{post.node.frontmatter.date}</small>
                    <br />
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
}

export const pageQuery = graphql`
    query BlogIndexQuery  {
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

export default blog;