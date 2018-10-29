import React from 'react'
import Img from 'gatsby-image'

import styles from './client.module.css'

export default ({ engagement }) => (
  <div>
    <p>{engagement.blurb}</p>
    <Img
      className={styles.clientLogo}
      href={engagement.website}
      sizes={engagement.client.whiteLogo.sizes}
    />
  </div>
)
