import React from 'react'
import Link from 'gatsby-link'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#071b70',
    }}
  >
    <div className = 'container'>
      <div/>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              paddingLeft: '2rem'
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div/>
    </div>
  </div>
)

export default Header
