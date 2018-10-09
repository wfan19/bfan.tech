import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'gatsby-link'

const Men = ({page}) => (
    <Menu secondary pointing
        size = 'huge'
        style={{
            marginBottom: '2rem',
            marginTop: '0.2rem'
            }}>

        <Menu.Item
        as = { Link }
        name = 'Home'
        to = '/' 
        active={page === 'Home'}
        color = 'blue'/>

        <Menu.Item
        as = { Link }
        name = 'Blog'
        to = '/blog' 
        active={page === 'Blog'}
        color = 'blue'/>

        <Menu.Item
        as = { Link }
        name = 'Projects'
        to = '/projects' 
        active={page === 'Projects'}
        color = 'blue'/>

    </Menu>
)

export default Men