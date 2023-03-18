
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
  
  function handleonSubmit(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");

    const value = fieldQuery.value || "";
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;
   

    updatePage({
      current: endpoint,
    });
  }

  return (
    <Layout>
    <div className=" bg-king  "  >
    <form  onSubmit={handleonSubmit}className="flex flex-col  ">
          <input
            type="search"
            name="query"
           placeholder="Search for a character"
            required
            className="mt-4 shadow-2xl rounded-lg p-1 px-3 mx-auto  font-small opacity-90 backdrop-blur-2xl bg-gradient-to-tr from-blue-200 via-slate-200 dark:bg-slate-800 dark:from-neutral-600 dark:via-slate-800   "
          />
        
        </form>
        <div className="  mx-auto max-w-4xl grid grid-cols-4 " >
  
          {results?.map((result) => {
            const { id, name, image, status, location } = result;
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={id} className="relative my-4 mx-1 " >
                <Link href="/character/[id]" as={`/character/${id}`}>
                  
                  <div className= "py-3 hover:scale-105 transition-all ease-in duration-400  dark:bg-gradient-to-tr dark:from-neutral-600 dark:via-slate-800  bg-gradient-to-tr from-blue-300 via-slate-300 opacity-90 backdrop-blur-2xl shadow-2xl px-6   h-80 rounded-xl flex flex-col items-center  ">
                    <img
                    className=' my-6 border-4 border-regal-green rounded-full  h-40 w-40' src={image} alt={`${name} Thumb`} />
                
                    <p className="ml-3 py-2" >
                      Last location: {location?.name}
                    </p>
                  </div>
                  
                </Link>
                {(() => {
            if (status === "Dead") {
              return (
                <div
                  className="bg-red-500 rounded-lg  px-3  font-medium absolute top-0 left-0  "
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className="bg-green-500 rounded-lg  px-3  font-medium   absolute  top-0 left-0 "
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className="bg-gray-500 rounded-lg px-1  absolute font-medium top-0 left-0 "
                >
                  {status}
                </div>
              );
            }
          })()}
   
              </div>
              
            );
          })}

                   <p className="mb-4 ">
                   
          <button className=" mx-2 px-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-green500 hover:to-gray-200 text-white font-semibold  py-2 rounded " onClick={handleLoadMore} >
            Load More
          </button>
          </p>
        </div>
    
        </div>
     
      </Layout>
      
  );
}