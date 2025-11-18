import { graphql, Link } from "gatsby";
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../Styles/index.module.css';
import { StaticImage } from "gatsby-plugin-image";
//import Img from 'gatsby-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Home({ data }) {
  const principios = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section>
        <div className={styles.heroCont}>
          <StaticImage
            className={styles.hero}
            src="../assets/vista frente.jpg"
            alt="Hero"
          />
        </div>

        <div className={styles.principios}>
          {principios.map(item => {
            const image = getImage(item.frontmatter.imagen);

            return (
              <Link
                to={`/principios/${item.frontmatter.slug}`}
                key={item.id}
              >
                <div>
                  <GatsbyImage
                    image={image}
                    alt={item.frontmatter.title}
                  />
                  <h3>{item.frontmatter.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query PrincipiosPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          title
          imagen {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
