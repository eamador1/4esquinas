import React from 'react'
import Navbar from './Navbar'
import * as styles from '../Styles/global.module.css'
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className="content">
            {children}

        </div>
      <footer>
        <div className={styles.logoCont}>
          <StaticImage
            className={styles.logo}
            src="../assets/iafcj.jpeg"
            alt="Logo"
          />
          <p>Iglesia Apostólica de la Fe en Cristo Jesús. Nicaragua. 2025.</p>
        </div>
        
            
        </footer>
    </div>
  )
}
