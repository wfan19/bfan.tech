import React from 'react'
import { Link } from 'gatsby'
import {Container, Header} from 'semantic-ui-react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout page = 'Home'>
  <Container style = {{paddingTop: '0rem'}}>
    <Header as = 'h1'>Bill's playground</Header>
    <Header as = 'h3'>Hi everyone.</Header>
    <p>Welcome to my website.</p>
    <p>Here, I (sometimes) post updates on the various projects that I've been working on, such as the Mobile Tackling Dummy project, amongst other things. 
      It also serves as kind of a digital business/contact card, where I can put things like my resume and portfolio.
      It's also just been a fun project to work on all this time, learning front end development and all.</p>
    <Header as = 'h3'>About this website</Header>
    <p>This website was built with the static-site-generator (SSG) GatsbyJS, a fast growing and open source SSG used even by big companies such as Nike and Facebook. It is hosted on Netlify. 
      Much of the UI is done with the UI library Semantic-UI.
      The theming is entirely done by Bill Fan, but feel free to fork me on GitHub if you want to use this.</p>
  </Container>
  </Layout>
)

export default IndexPage
