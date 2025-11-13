import * as React from "react"
import Layout from "../components/Layout"
import hero from '../assets/vista frente.jpg';

export default function Home() {
  return (
    <Layout>
      <section>
        <img className="hero" src={hero} alt="Hero"/>
   
      </section>
    </Layout>
  )
}
