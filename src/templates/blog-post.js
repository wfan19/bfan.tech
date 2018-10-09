import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import {Button} from 'semantic-ui-react'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/blog-post.scss';

export default function Template({data}){
    const post = data.markdownRemark

    return (
    <Layout>
        <div>
            <Button as = {Link} to = '/blog/' color = 'blue'>Back to posts</Button>
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