import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

export default function Template({data}){
    const post = data.markdownRemark

    return (
    <Layout>
        <div>
            <Link to = "/blog">Back to posts</Link>
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
    </Layout>
  )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path}}){
            html
            frontmatter{
                path
                title
                date
            }
        }
    }
`