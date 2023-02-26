import Head from "next/head";
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
    <div className="bg-slate-800">
        <form  onSubmit={handleonSubmit}>
          <input
            type="search"
            name="query"
           
            required
          />
          <button type="submit">
            Search
          </button>
        </form>

        <div className="  mx-auto max-w-6xl grid grid-cols-4 " >
          {results.map((result) => {
            const { id, name, image, status, location } = result;
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={id} className="relative my-4 mx-2 " >
                <Link href="/character/[id]" as={`/character/${id}`}>
                  
                  <div className= "  opacity-90 backdrop-blur-md shadow-2xl  h-80  rounded-xl flex flex-col items-center  ">
                    <img
                    className='my-6 border-4 border-regal-green rounded-full  h-40 w-40' src={image} alt={`${name} Thumb`} />
                    <h2 className="text-white">
                      {name} <span >{status}</span>
                    </h2>
                    <p >
                      Last location: {location?.name}
                    </p>
                  </div>
                  
                </Link>
                {(() => {
            if (status === "Dead") {
              return (
                <div
                  className="bg-red-500 rounded-lg  px-3  font-medium absolute top-0 left-0 "
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
        </div>
        <p>
          <button onClick={handleLoadMore} >
            Load More
          </button>
        </p>
        </div>
      </Layout>
  );
}