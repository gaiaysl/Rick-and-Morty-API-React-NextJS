
import Image from "next/image"
import logo from "../../public/pm-logo.png"
import Link from "next/link"
import DarkMode from "../DarkMode"

export default function Navbar() {

  return (
    <div className='dark:bg-gradient-to-tr dark:from-neutral-600 dark:via-slate-800  bg-gradient-to-tr from-blue-300 via-slate-400 opacity-90 backdrop-blur-2xl shadow-2xl  w-full flex flex-row sticky top-0 z-10 backdrop-filter   '>
     
      
      <div className="flex flex-row mx-auto font-bold items-center justify-center ">
        
        <Link  href="/"  >
          <Image
         className="hover:cursor-pointer "
           src={logo} alt="logo" height={60} width={70}   />
         
        </Link>
        <a href="/" className="py-6 mx-1 font-semibold text-md sm:visible invisible"> Ricky and Morty</a>
       
      </div>
      <div className=" mx-auto flex flex-row py-6  ">
      <p className="dark:text-white flex flex-row gap-x-3 mx-auto sm:visible invisible  text-md font-semibold">
            <a   href="/"> Characters </a> | 
      </p>
      <div className=" mx-2">
      <DarkMode/>
      </div>
     
      </div>
     
       
      </div>
    
  )
}


