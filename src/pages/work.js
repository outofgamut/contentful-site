import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './work.module.css'
import Client from '../components/client'
import EngagementBlurb from '../components/engagement-blurb'

class WorkIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const clients = get(this, 'props.data.allContentfulClient.edges')
    const engagements = get(this, 'props.data.allContentfulEngagement.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>Work</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent Engagements</h2>
          <div>
            We integrate and collaborate closely with some of the world’s
            largest enterprise design and engineering teams to tackle design
            problems and opportunities.
          </div>
          <div>
            {engagements.map(({ node }) => {
              return <EngagementBlurb key={node.name} engagement={node} />
            })}
          </div>
          <h2 className="section-headline">Artifacts</h2>
          <div>
          Most of the work we do is confidential, but here are a few samples from recent projects.
          </div>
          <div>
            {clients.map(({ node }) => {
              return <Client key={node.name} client={node} />
            })}
          </div>
          <h2 className="section-headline">Our Clients</h2>
          <div>
            {clients.map(({ node }) => {
              return <Client key={node.name} client={node} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkIndex

export const pageQuery = graphql`
  query WorkIndexQuery {
    allContentfulClient(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          logo {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
    allContentfulEngagement {
      edges {
        node {
          blurb
          client {
            whiteLogo {
              sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulSizes_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
