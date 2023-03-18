
import Image from "next/image"
import logo from "../../public/pm-logo.png"
import Link from "next/link"

import DarkMode from "../DarkMode"

export default function Yonlendir() {

  return (
    <div className=' flex flex-row  shadow-2xl max-w-5xl w-full  py-4 h-20'>
     
      
      <div className="flex flex-row justify-center w-full   font-bold h-full gap-4">
        <div>
        <Link href="/" >
          <Image src={logo} alt="logo" height={60} width={60}   />
        </Link>
      
        </div>
        <h1 className="dark:text-white py-4">Rick and Morty</h1>
       
      </div>
      <ul className="dark:text-white flex flex-row py-4 gap-x-6 mx-4 text-md font-semibold">
            <li>HOME</li>
          
            <li>CHARACTERS</li>
        
            <li href="/blog">BLOG</li>
      </ul>
      <div className="max-w-4xl  mx-auto sm:mt-4">
      <DarkMode/>
      </div>
     
       
      </div>
    
  )
}


