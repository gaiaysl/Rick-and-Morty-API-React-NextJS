import Head from "next/head";
import { useEffect, useState } from "react";
import Link from 'next/link'


const defaultEndOPoint = "https://rickandmortyapi.com/api/character";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndOPoint}/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const {name, image, gender, location, origin, species, status } = data

  return (
    <div className="flex  flex-col items-center justify-center h-screen   ">
      <Head>
      <title>{name}</title>
        <meta name="description" content="The Rick and Morty all character" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" max-w-7xl my-24 mx-auto">
        

        <div >
        <h1 >{name}</h1>
                <img src={image} alt={name} className="" />
          
          
                <h2>Character Details</h2>
                <ul>
                    <li><strong>Name:</strong> {name}</li>
                    <li><strong>Status:</strong> {status}</li>
                    <li><strong>Gender:</strong> {gender}</li>
                    <li><strong>Species:</strong> {species}</li>
                    <li><strong>Location:</strong> {location?.name}</li>
                    <li><strong>Originally From:</strong> {origin?.name}</li>
                </ul>
            </div>
       
        <p >
          <Link href="/">
            <a> Back to HomePage</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
