import React from 'react'
import Link from 'gatsby-link'
import {Button} from 'semantic-ui-react'


export default function Template({data}){
    const post = data.markdownRemark

    return (
        <div>
            <Button as = {Link} to = "/blog" color = 'blue'>Back</Button>
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title   
        date
      }
    }
  }
`