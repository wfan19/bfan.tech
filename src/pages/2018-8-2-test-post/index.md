---
path: "/gatsby-test"
date: "2018-8-2"
title: "Testing the Limits of GatsbyJS MD"
---

I made this post to play around with some things with GatsbyJS, along with test out making another page, and how ordering on the blog page works. As for the testing: <!-- end -->

*italicizied* **bold** ***bold and italics*** ~~strikethru~~ __underline__ 

[Hyperlinks!](https://en.wikipedia.org/wiki/Hyperlink)

Image and block quoting:
>![alt-text](https://i.imgur.com/EBaOezC.png)
>This is an image of the blog page.

>This is a quote

`inline code`

``` javascript
//blocked code with syntax highlighting
import React from 'react'
import Link, { push } from 'gatsby-link'
import {Grid, Cell} from 'styled-css-grid'

import './menu.css'

const Menu = () => 
    <div style = {{
        background: 'rgb(0, 59, 126)'
    }}>
        <div className = "wrapper">
            <Grid>
```

### List:
- Number 1:
- Number 2:
    - Number 2.5:
        - Number 2.75:


That's all the torture-testing I'll do for now. I know that I shouldn't test things like MathJax and stuff right now, as I actually haven't implemented them yet. In fact, I'm not even sure if the syntax highlightin and the picture would work. I guess we'll find out!

-Bill

Edit: it seems like everything but syntax highlighting and (surprisingly) quotes are now working properly. I know what to do for the syntax highlighting: install a plugin and configure the color. I'm at a loss for how to fix the quotes though. I'll have to look into that a bit more.