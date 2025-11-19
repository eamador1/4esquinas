import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../../Styles/principios-details.module.css'

export default function PrincipiosDetails({ pageContext }) {
  const { featuredImg, html } = pageContext

  return (
    <div className={styles.details}>
      <div className={styles.feature}>
        {featuredImg && <GatsbyImage image={featuredImg} alt="Principio" />}
      </div>

      <div
        className={styles.info}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

