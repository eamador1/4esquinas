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
        <h3>Nuestras Reuniones</h3>
        <p>Únete a nosotros a adorar a nuestro Señor Jesucristo durante la semana</p>
        <div>
        <div className={styles.serviciosWrapper}>
          <div>
          <h3>CULTO DE</h3> <h3>ORACIÓN</h3>
            <div className={styles.infoCont}>
            <StaticImage
            className={styles.info}
            src="../assets/orar.png"
            alt="libro"
            />
            
            </div>
            <p>Martes 6:00pm</p>
          </div>
        </div>
        <div className={styles.serviciosWrapper}>
          <div>
          <h3>CULTO DE</h3> <h3>FRATERNIDADES</h3>
            <div className={styles.infoCont}>
            <StaticImage
            className={styles.info}
            src="../assets/apreton-de-manos.svg"
            alt="orar"
            />
            </div>
            <p>Jueves 6:00 pm</p>
          </div>
        </div>
        <div className={styles.serviciosWrapper}>
          <div>
          <h3>ESCUELA BÍBLICA</h3>
            <div className={styles.infoCont}>
            <StaticImage
            className={styles.info}
            src="../assets/libro-alt.svg"
            alt="libro"
            />
            </div>
            <p>Domingos 10:00 am</p>
          </div>
        </div>
        <div className={styles.serviciosWrapper}>
          <div>
          <h3>CULTO</h3> <h3>EVANGELÍSTICO</h3>
            <div className={styles.infoCont}>
            <StaticImage
            className={styles.info}
            src="../assets/usuarios-alt.svg"
            alt="usuarios"
            />
            </div>
            <p>Domingos 11:15 am</p>
          </div>
        </div>
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
