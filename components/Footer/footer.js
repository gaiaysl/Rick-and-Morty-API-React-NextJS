

export default function Footer() {
  return (
    <div className="  flex flex-row justify-center items-center max-w-4xl  mx-auto  ">
      <div className=" w-full flex flex-col   ">
        <p>Design by Gaye Y. @ 2022</p>
        <p> My Github Profile:{" "}
          <a target="_blank" href="https://github.com/gaiaysl">
            github.com/gaiaysl
          </a>
        </p>
      </div>

      <div className="w-full h-full  ">
        <p>Powered by Next.js - React</p>
        <p>API Documentation:{" "}
          <a target="_blank" href="https://rickandmortyapi.com/">
            Rick and Morty API
          </a>
        </p>
      </div>

    </div>
  )
}


