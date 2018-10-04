import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'semantic-ui-react'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button as = {Link} to = '/page-2/' color = 'blue'>Go to page 2</Button>
  </div>
)

export default IndexPage
