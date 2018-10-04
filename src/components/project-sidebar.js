import React from 'react'
import Link from 'gatsby-link'

const project_sidebar = ({ siteTitle }) => (
    <div
    style={{
    border: '2px solid #e6e6e6',
    maxWidth: 960,
    padding: '0.5rem',
    marginBottom: '25px'
    }}>
        <strong>{props.title}.</strong> {props.description}
    </div>
)

export default project_sidebar
