import React from 'react'
import Img from 'gatsby-image'

import styles from './client.module.css'

export default ({ client }) => (
  <div className={styles.logoContainer}>
    <Img
      className={styles.clientLogo}
      href={client.website}
      alt={client.name}
      sizes={client.logo.sizes}
    />
  </div>
)
