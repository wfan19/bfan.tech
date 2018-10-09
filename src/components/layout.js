import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Men from './menu'
import '../styles/layout.scss'
import 'semantic-ui-css/semantic.min.css';

require("prismjs/themes/prism-okaidia.css");

const Layout = ({ children, page}) => (
  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="grid-container">
          <div/>
          <div>
            <Men page = {page}/>
            {children}
          </div>
          <div/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
