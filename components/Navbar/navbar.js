
import Image from "next/image"
import logo from "../../public/pm-logo.png"
import Link from "next/link"
import DarkMode from "../DarkMode"

export default function Navbar() {

  return (
    <div className='  dark:bg-gradient-to-tr dark:from-neutral-600 dark:via-slate-800  bg-gradient-to-tr from-blue-300 via-slate-400 opacity-90 backdrop-blur-2xl shadow-2xl  w-full flex flex-row sticky top-0 z-10 backdrop-filter   '>
     
      <div className=" max-w-4xl mx-auto flex flex-row  justify-between w-full">
      <div className="flex flex-row  font-bold items-center  ">
        
        <Link  href="/"  >
          <Image
         className="hover:cursor-pointer "
           src={logo} alt="logo" height={60} width={70}   />
         
        </Link>
        <a href="/" className="py-6 mx-1 font-semibold text-md sm:visible invisible"> Rick and Morty</a>
       
      </div>
      <div className="  flex flex-row py-6  ">
      <p className="dark:text-white flex flex-row gap-x-3 sm:visible invisible  text-md font-semibold">
            <a   href="/"> Characters </a> | 
      </p>
     
      <DarkMode/>
     
     
      </div>
     
      </div>
      </div>
    
  )
}


