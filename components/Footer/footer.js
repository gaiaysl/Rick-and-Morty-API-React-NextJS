import styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftFooter}>
        <p>Design by Gaye Y. @ 2022</p>
        <p>
          My Github Profile:{" "}
          <a target="_blank" href="https://github.com/gaiaysl">
            github.com/gaiaysl
          </a>
        </p>
      </div>
      <div className={styles.rightFooter}>
        <p>Powered by Next.js - React</p>
        <p>
          API Documentation:{" "}
          <a target="_blank" href="https://rickandmortyapi.com/">
            Rick and Morty API
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
