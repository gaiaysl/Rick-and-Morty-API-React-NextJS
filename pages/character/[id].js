import Layout from "../../components/Layout/layout"
import Head from "next/head"
import slug from "slug"
import styles from "../character/slug.module.css"

export default function CharacterDetail({ character }) {
  console.log("karakter göster",character)
  return (
    <Layout>
      <Head>
        <title>{character.name} Details..</title>
      </Head>
      <main>
        <div  className={styles.deneme}>
        <div className={styles.container}>
          <div className={styles.containerOne}>
            <h1 className={styles.titleOne}>{character.name}</h1>
            <figure>
              <img src={character.image} alt={character.name} />
            </figure>
          </div>

          <div className={styles.containerThree}>
            <div className={styles.underline}>
              <div className={styles.line}></div>
              <div className={styles.or}>FEATURES;</div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.containerFour}>
              <p  key={character.id}>
                <span>ID:</span> {character.id}
              </p>
              <p>
                <span>Gender:</span> {character.gender}
              </p>
              <p>
                <span>Species:</span> {character.species}
              </p>
              <p>
                <span>Status:</span> {character.status}
              </p>
              <p>
                <span>Location:</span> {character.location.name}
              </p>
              <p>
                <span>Origin:</span> {character.origin.name}
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context){
 
  const{params}=context
  const {id}=params
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
 const character = await res.json()
 return{
  props:{
    character,
    
  }
  
 }

}

/*export async function getStaticPaths() {
  const data = await fetch("https://rickandmortyapi.com/api/character/")

  const characters = await data.json()

  return {
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false 
  }
}

export async function getStaticProps({ params }) {
  //dataları çekiyoruz.

  const id = params.slug.split("-").slice(-1)[0]
  const data = await fetch("" + id)

  const character = await data.json()
  return {
    props: {
      character
    }
  }
}
*/

