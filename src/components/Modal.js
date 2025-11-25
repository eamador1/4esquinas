import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../Styles/principios-details.module.css'


export default function Modal({ slug, contentHtml, title, featuredImg, onClose }) {
  return (
    <div className={styles.modalOverlay} 
    onClick={onClose} 
    role="button" 
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClose()}
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className={styles.cerrar}>CERRAR</button>
        {featuredImg && <GatsbyImage image={getImage(featuredImg) } className={styles.featuredImg} alt={title} />}
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      
    </div>
    </div>
  );
}