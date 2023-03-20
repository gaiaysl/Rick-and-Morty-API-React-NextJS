
import Layout from "../../components/Layout/layout";
import Link from "next/link";

import { AiOutlineArrowLeft } from 'react-icons/ai';
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
    <Layout>
    <div className="flex  flex-col bg-character  ">


      <main className="my-20 w-80 sm:w-92  px-6 py-2 mx-auto border-2 opacity-100 backdrop-blur-2xl shadow-2xl   rounded-xl ">
        

        <div className="mx-6 " >
        <div className="flex flex-col justify-center items-center  text-slate-800  my-3 ">
        <h1 className="font-semibold mb-3" >{name}</h1>
        <div className="sm:h-72 sm:w-80 w-36 rounded-lg">
        <img src={image} alt={name} className="border-4 border-regal-green h-full w-full rounded-2xl" />
        </div>
               
          
                </div>
                
                <ul className="flex flex-col justify-center mx-auto mt-2 text-slate-800 break-all w-80 ml-3">
                    <li><strong>Name:</strong> {name}</li>
                    <li><strong>Status:</strong> {status}</li>
                    <li><strong>Gender:</strong> {gender}</li>
                    <li><strong>Species:</strong> {species}</li>
                    <li><strong>Location:</strong> {location?.name}</li>
                    <li><strong>Originally From:</strong> {origin?.name}</li>
                </ul>
            </div>
       
        <Link href="/" >
         <div  className="border-1 flex flex-row justify-center items-center cursor-pointer mt-3 mb-2 hover:transition-all hover:duration-75  hover:text-regal-green "><AiOutlineArrowLeft/> Home to Back</div>
        </Link>
      </main>
    </div>
    </Layout>
  );
}
