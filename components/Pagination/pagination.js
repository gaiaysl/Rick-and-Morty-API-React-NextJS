
import { useState } from "react"
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

export default function Pagination({updatePage,page,info}){

   function arti()
   {
    updatePage(++page)
   }

   function geri()
   {
    page>1 && updatePage(--page)
   }
    
let [curr,setCurr]=useState(1)
const pages = Array.from({ length: info }, (v, k) => k + 1);
    return(
       
<div className="flex bg-white rounded-lg font-[Poppins]">

<button onClick={geri}
        className="h-12 border-2 border-r-0 border-indigo-600 w-12 
       px-3 rounded-l-lg hover:bg-indigo-700 hover:text-white"><GrFormPrevious/></button>
 {
    pages.map((pg,i)=>(
        <button key={i}
        onClick={()=>setCurr(pg.page)}
        className={`h-12 border-2 border-r-0 border-indigo-600 w-12 ${info === pg.page && 'bg-indigo-500 text-white'}`}>{pg.page}</button>
    ))
 }
 <button onClick={arti}
        className="h-12 border-2 border-r-0 border-indigo-600 w-12 
       px-3 rounded-r-lg hover:bg-indigo-700 hover:text-white"><GrFormNext/></button>
</div>
       
    )
}