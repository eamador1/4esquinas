import * as React from "react"
import {useState}  from "react";
import { graphql} from "gatsby";
import Layout from "../components/Layout"
import * as styles from '../Styles/index.module.css';
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Modal from "../components/Modal"


export default function Home({ data }) {
  const [openItem, setOpenItem] = useState(null)
  const principios = data.allMarkdownRemark.nodes
  
  const handleOpen = (item) => {
      setOpenItem({ slug: item.frontmatter.slug,
                    title: item.frontmatter.title,
                    featuredImg: item.frontmatter.featuredImg,
                    html: item.html });
    }

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
          {principios.map((item) => {
  if (!item || !item.frontmatter) return null; // safeguard

  const image = getImage(item.frontmatter.imagen);

            return (
              <div 
                key={item.id} 
                className={styles.principios}
                onClick={() => handleOpen(item)}
                onKeyDown={(e) => e.key === "Enter" && handleOpen(item.frontmatter.slug)}
                role="button"
                tabIndex="0"
              >
                <GatsbyImage image={image} alt={item.frontmatter.title} />
               
              </div>
            );
          })}
        </div>
        {openItem && (
          <Modal 
          featuredImg={openItem.featuredImg}
          title={openItem.title} 
          contentHtml={openItem.html}
          onClose={() => setOpenItem(null)} />
        )}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query PrincipiosPage {
    allMarkdownRemark {
      nodes {
        id
        html
        frontmatter {
          slug
          title
          imagen {
            childImageSharp {
              gatsbyImageData
            }
          }
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
