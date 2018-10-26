import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout';
import {Reveal, Header, Container, Image} from 'semantic-ui-react'

import '../styles/projects.scss'

const projects_page = () => (
  <Layout page = 'Projects'>
    <h1>A compilation of the various projects I've worked on throughout the past 2-3 years</h1>
    <div className = 'projects-container'>
        <div>
          <Reveal animated = 'fade'>
            <Reveal.Content visible>
            <Image src='https://lh3.googleusercontent.com/tqRhN0GxmoSqdiI_BKt82iBHkCnbyJt_hzaEP4nQw7kKIhjl8FdZoY9KOqxlIW6Vi5dlnhHcHEMFfqJsjUsjlcc1_Bk0Zak0JO5equD2pZF7NenuXIdo5xawDxPPRnIv4g8tj2JCHPfptdjPfSJHCzsuY-Jgd_Y85LjJcMTMkeWBrnFCBLDv6SBPnXUpKqa6v1y2pg3k-cxl6lBBBXdz3Py3pplFFJ42wat2s1Lhis6RDQRPkuFFWyO16vTqyKBvpcC99_xdkD8GvN3orC-rGPWEbyYqkZpC3MFWXoMsq6v9JnuvJGr-MKQRNrqydtSC2v1KlqwZcGbLLXfhmV-awHP9DQmhdtWqSvMeLIFvgvD_iDS-u_DiX6qER_Pko3KlvJHc9A44SaH_vYR6RpSapHwOwRcM_pNyurdyFwIIJtJWw5mYVkBl4nTLR9UagaijTK3oKGaAu4_fCHC5wiprCDW_iyZ6Hg8iDf2ukkm8XDu50I4U0Yodtu_0OfkLkh59d8Im1yqgXbeWZ5jR36k9W18I5V0ASjqM62VuOE8xCYPgvX2wKyZwCwpjLQQXSf8faQkpH6HhDeWc_-5L7gV9hLYb_HbeVQ7P9yBZa8NNK9D_YBlXkkAHrihds4JZNtM=w351-h309-no' 
            size = 'medium'/>
            </Reveal.Content>
            <Image src='https://i.imgur.com/MtiHTnY.png' 
            size = 'medium'/>
            <Reveal.Content hidden>
              
            </Reveal.Content>
          </Reveal>
        </div>
        
        <div>

        </div>
    </div>
  </Layout>
)


/*
const projects_page = () => (
  <Layout page = 'Projects'>
    <h1>A compilation of the various projects I've worked on throughout the past 2-3 years</h1>
    <div className = 'projects-container'>
        <div>
        <Image src='https://lh3.googleusercontent.com/tqRhN0GxmoSqdiI_BKt82iBHkCnbyJt_hzaEP4nQw7kKIhjl8FdZoY9KOqxlIW6Vi5dlnhHcHEMFfqJsjUsjlcc1_Bk0Zak0JO5equD2pZF7NenuXIdo5xawDxPPRnIv4g8tj2JCHPfptdjPfSJHCzsuY-Jgd_Y85LjJcMTMkeWBrnFCBLDv6SBPnXUpKqa6v1y2pg3k-cxl6lBBBXdz3Py3pplFFJ42wat2s1Lhis6RDQRPkuFFWyO16vTqyKBvpcC99_xdkD8GvN3orC-rGPWEbyYqkZpC3MFWXoMsq6v9JnuvJGr-MKQRNrqydtSC2v1KlqwZcGbLLXfhmV-awHP9DQmhdtWqSvMeLIFvgvD_iDS-u_DiX6qER_Pko3KlvJHc9A44SaH_vYR6RpSapHwOwRcM_pNyurdyFwIIJtJWw5mYVkBl4nTLR9UagaijTK3oKGaAu4_fCHC5wiprCDW_iyZ6Hg8iDf2ukkm8XDu50I4U0Yodtu_0OfkLkh59d8Im1yqgXbeWZ5jR36k9W18I5V0ASjqM62VuOE8xCYPgvX2wKyZwCwpjLQQXSf8faQkpH6HhDeWc_-5L7gV9hLYb_HbeVQ7P9yBZa8NNK9D_YBlXkkAHrihds4JZNtM=w351-h309-no' 
            size = 'medium'/>
        </div>
        <div style ={{justifySelf: 'stretch'}}>
          <Image src='https://i.imgur.com/MtiHTnY.png' size = 'medium'/>
        </div>
        <div>

        </div>
    </div>
  </Layout>
)
*/
export default projects_page

