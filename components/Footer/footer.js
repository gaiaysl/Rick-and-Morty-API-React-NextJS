

export default function Footer() {
  return (
    <div className=" mx-auto px-24 dark:bg-gradient-to-tr dark:from-neutral-600 dark:via-slate-800  bg-gradient-to-tr from-blue-300 via-slate-400 opacity-90 backdrop-blur-2xl shadow-2xl  w-full  sticky top-0 z-10 backdrop-filter flex flex-row  justify-center items-center  ">
      <div className="mb-3 mt-3  flex flex-col mx-auto px-7  ">
        <p>Design by Gaye Y. @ 2022</p>
        <p> My Github Profile:{" "}
          <a target="_blank" href="https://github.com/gaiaysl">
            github.com/gaiaysl
          </a>
        </p>
      </div>

      <div className="mb-3 mt-3 mx-auto flex flex-col    ">
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


