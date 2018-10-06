import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'gatsby-link'

export default class menu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state

    return(
        <Menu pointing secondary
            style={{
                marginBottom: '2rem',
                marginTop: '0.25rem'
                }}>

            <Menu.Item
            as = { Link }
            name = 'Home'
            to = '/' 
            active={activeItem === 'Home'}
            onClick = {this.handleItemClick} />

            <Menu.Item
            as = { Link }
            name = 'Blog'
            to = '/blog' 
            active={activeItem === 'Blog'}
            onClick = {this.handleItemClick} />

            <Menu.Item
            as = { Link }
            name = 'Projects'
            to = '/projects' 
            active={activeItem === 'Projects'}
            onClick = {this.handleItemClick} />

        </Menu>
        )
    }
}