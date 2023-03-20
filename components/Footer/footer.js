

export default function Footer() {
  return (
    <div className=" h-32   mx-auto sm:px-24 px-2 dark:bg-gradient-to-tr dark:from-neutral-600 dark:via-slate-800  bg-gradient-to-tr from-blue-300 via-slate-400 opacity-90 backdrop-blur-2xl shadow-2xl  w-full  sticky top-0 z-10 backdrop-filter flex flex-row  justify-center items-center  ">
      <div className="sm:mb-3 sm:mt-3  flex flex-col mx-auto sm:px-7  h-full justify-center items-center  py-2 gap-2  text-xs sm:text-sm  ">
        <p>Design by Gaye Y. @ 2022</p>
        <p className="font-semibold mx-4 "> My Github Profile:{" "}
          <a target="_blank" href="https://github.com/gaiaysl">
            github.com/gaiaysl
          </a>
        </p>
      </div>

      <div className="sm:mb-3 sm:mt-3 mx-auto flex flex-col justify-center items-center text-xs sm:text-sm py-2 gap-2   ">
        <p>Powered by Next.js - React</p>
        <p className="font-semibold mx-5 sm:mx-3 ">API Documentation:{" "}
          <a target="_blank" href="https://rickandmortyapi.com/">
            Rick and Morty API
          </a>
        </p>
      </div>

    </div>
  )
}


