import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../Styles/index.module.css';
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className={styles.heroCont}>
          <StaticImage className={styles.hero} src="../assets/vista frente.jpg" alt="Hero"/>
        </div>
      </section>
    </Layout>
  )
}

