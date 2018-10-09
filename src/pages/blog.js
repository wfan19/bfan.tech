import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';

import '../styles/blog.scss';
import 'semantic-ui-css/semantic.min.css';


const blog = ({data}) => {
  return (
    <Layout>
      <div>
          <h1>My Blog</h1>
          <p>Where I post updates on my various projects, and my life in general.</p>
          {data.allMarkdownRemark.edges.map(post => (
              <div key = {post.node.id}>
                  <p className = "post-title">{post.node.frontmatter.title}</p>
                  <small >{post.node.frontmatter.date}</small>
                  <br />
                  <br />
                  <p>{post.node.excerpt}</p>
                  <Link to = {post.node.frontmatter.path} className = "page-link"> Read more </Link>
                  <br />
                  <hr />
              </div>
          ))}
      </div>
    </Layout>
  )
}

/*
const blog = ({data}) => {
  return (
    <Layout>
      <div>
          <h1>My Blog</h1>
          <p>Where I post updates on my various projects, and my life in general.</p>
          {data.allMarkdownRemark.edges.map(post => (
              <div key = {post.node.id}>
                  <h3 className = "post-title">{post.node.frontmatter.title}</h3>
                  <small >{post.node.frontmatter.date}</small>
                  <br />
                  <br />
                  <Link to = {post.node.frontmatter.path} className = "page-link"> Read more </Link>
                  <br />
                  <br />
                  <hr />
              </div>
          ))}
      </div>
    </Layout>
  )
}
*/
export const pageQuery = graphql`
    query BlogIndexQuery  {
        allMarkdownRemark(
          sort:{fields:[frontmatter___date], order: DESC}
        ){
            edges{
              node{
                frontmatter{
                  path
                  title
                  date
                }
                id
                excerpt (pruneLength: 300)
              }
            }
          }
    }
`

export default blog;