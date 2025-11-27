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
        {featuredImg && <GatsbyImage image={getImage(featuredImg) } className={styles.featuredImg} alt={title} />}     
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} className={styles.modalInfo} />
        <button onClick={onClose} className={styles.cerrar}>X</button>
      
    </div>
    </div>
  );
}