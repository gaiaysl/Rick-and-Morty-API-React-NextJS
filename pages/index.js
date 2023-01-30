import Layout from "../components/Layout/layout"
import Head from "next/head"
import Link from "next/link"
import slug from "slug"
import styles from "../pages/index.module.css"


export default function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Rick and Morty | Character List</title>
      </Head>

      <div className={styles.cardContainer}>
  
        {characters.results.map((character) => (
          <div className={styles.card}>
            <div className={styles.absolute}>
              <Link  key={character.id}
                      href={`/character/${character.id}`}>
                <h3 className={styles.name}>{character.name}</h3>
              </Link>
              <Link key={character.id}
                      href={`/character/${character.id}`}>
                <div className={styles.cursor}>
                  <img src={character.image} alt={character.name} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(){

  const data = await fetch("https://rickandmortyapi.com/api/character/")
  const characters = await data.json()
  return{
    props:{
      characters
    }
  }
 
}

