import React, {useState}  from "react"
import { graphql} from "gatsby";
import Layout from "../components/Layout"
import * as styles from '../Styles/index.module.css';
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Modal from "../components/Modal";
import Video from "../components/LatestVideo";


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
         <div className={styles.principiosHeader}>
            <h3>Nuestros Principios</h3>
          </div>

        <div className={styles.contPrincipios}>
         
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

       
  
    <div className={styles.videoArea}>
      <h3 className={styles.tituloPredica}>Caracter humilde</h3>
      <p className={styles.fechaPredica}>23 de Noviembre 2025</p>
      <p className={styles.descripcionPredica}>
        El pastor Jonathan Soto explica como la humildad es una característica esencial en un cristiano.
      </p>
        <div className={styles.videoCont}>
          <Video
            videoSrcURL="https://www.facebook.com/somos4troesquinas/videos/24968298472853948" 
          />
        </div>
      </div>

      </section>
      <section className={styles.serviciosSection}>
        <h3>Nuestros Servicios</h3>
        <p>Únete a nosotros a adorar a nuetro Señor Jesucristo durante la semana</p>
        <div className={styles.serviciosWrapper}>
        <div>CULTO DE ORACIÓN
        <div className={styles.libroCont}>
          <StaticImage
            className={styles.libro}
            src="../assets/libro-alt.svg"
            alt="libro"
          />
        </div>
        </div>
        <div>CULTO DE FRATERNIDADES</div>
        <div>ESCUELA BÍBLICA</div>
        <div>CULTO EVANGELÍSTICO</div>
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
