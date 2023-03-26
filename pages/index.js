
import { useEffect, useState } from "react";
import Layout from '../components/Layout/layout'
import Link from 'next/link'



const defaultEndOPoint = "https://rickandmortyapi.com/api/character";



export async function getServerSideProps() {
  const res = await fetch(defaultEndOPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
 
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    ...info,
    current: defaultResults,
  });
 
  const { current } = page;
  
  useEffect(() => {
    if (current === defaultEndOPoint) return;
    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info,
      });
      

      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }
   
      updateResults((prev) => {
        return [...prev, ...nextData.results];
      });
    }
    request();
  }, [current]);



  function handleLoadMore() {
    updatePage((prev) => {
      return {
        ...prev,
        current: prev?.next,
      };
    });
  }
  
  const handleScroll = () => {

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    handleLoadMore();
  }

  useEffect(() => {
    handleLoadMore();
    window.addEventListener("scroll", handleScroll);
  }, []);

 


  function handleInputChange(e) {
    const value = e.target.value;
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

   
    updatePage({
      current: endpoint,
      value
    });
    console.log(value)

  }


  return (
    <Layout>
    <div className=" bg-king  "  >
    <form className="flex flex-col  ">
          <input
            type="search"
           placeholder="Search for a character"
            required
            className="mt-4 shadow-2xl rounded-lg p-1 px-3 mx-auto  font-small opacity-90  backdrop-blur-2xl bg-gradient-to-tr from-blue-200 via-slate-200 dark:bg-slate-800 dark:from-neutral-600 dark:via-slate-800   "
           
            onChange={handleInputChange}
          />
        
         
        </form>
       
        <div className="  mx-auto max-w-4xl  grid sm:grid-cols-4 grid-cols-1 " >
  
          {results?.map((result,index) => {
           
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={index} className="relative my-4 mx-1 " >
                <Link href="/character/[id]" as={`/character/${result.id}`}>
                  
                  <div className= " cursor-pointer py-3 hover:scale-105 transition-all ease-in duration-400  dark:bg-gradient-to-tr dark:from-neutral-600 dark:via-slate-800  bg-gradient-to-tr from-blue-300 via-slate-300 opacity-100 backdrop-blur-2xl shadow-2xl sm:px-6 px-4  sm:h-80 h-92  w-72 mx-auto sm:w-full justify-center rounded-xl flex flex-col items-center  ">
                 
                 
                  {(() => {
                     if (result.status === "Dead") {
              return (
               
                <img
                className=' my-6 border-4 border-red-500 rounded-full  h-40 w-40' src={result.image} alt={`${result.name} Thumb`} />
                
              );
            } else if (result.status === "Alive") {
              return (
             
                <img
                className=' my-6 border-4 border-regal-green rounded-full  h-40 w-40' src={result.image} alt={`${result.name} Thumb`} />
              );
            } else {
              return (
                 
                <img
                className=' my-6 border-4 border-gray-500 rounded-full  h-40 w-40' src={result.image} alt={`${result.name} Thumb`} />
              );
            }})()}
                    
              
                    <p className="text-center -mt-3 text-white font-bold text-xl">{result.name}</p>
                   
                    <p className=" ml-3 py-2 text-slate-600 dark:text-white font-semibold" > Location: <span className="text-white text-sm font-semibold">{result.location?.name}</span>
                    </p> 
                    
                  
                  
                  </div>
                  
                </Link>
                {(() => {
            if (result.status === "Dead") {
              return (
                <div
                  className="bg-red-500 rounded-lg ml-12 sm:ml-0 sm:px-3 px-2 cursor-pointer font-medium absolute top-0 left-0  "
                >
                  {result.status}
                </div>

              );
            } else if (result.status === "Alive") {
              return (
                <div
                  className="bg-green-500 rounded-lg ml-12 sm:ml-0  sm:px-3 px-2 cursor-pointer  font-medium   absolute  top-0 left-0 "
                >
                  {result.status}
                </div>
              );
            } else {
              return (
                <div
                  className="bg-gray-500 rounded-lg sm:px-1 px-0 cursor-pointer  ml-12 sm:ml-0  absolute font-medium top-0 left-0 "
                >
                  {result.status}
                </div>
              );
            }
          })()}
   

        
              </div>
              
            );
          })}
         
    </div>

   
        </div>
     
      </Layout>
      
  );
}