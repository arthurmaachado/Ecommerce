"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "./components/Banner";

export default function Home() {
  // const [beerList, setbeerList] = useState<any>(null);
  // const [randombeer, setRandombeer] = useState<any>(null);

  // useEffect(() => {
  //   axios
  //     .get("https://api.punkapi.com/v2/beers?per_page=25")
  //     .then((res) => {
  //       setbeerList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const getRandombeerList = () => {
  //   if (beerList) {
  //     const randombeer = beerList[Math.floor(Math.random() * beerList.length)];
  //     setRandombeer(randombeer);
  //   } else {
  //     axios.get("https://api.punkapi.com/v2/beers/random").then((res) => {
  //       setRandombeer(res.data[0]);
  //     });
  //   }
  // };

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <button
    //       onClick={() => {
    //         getRandombeerList();
    //       }}
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Random beerList{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         {randombeer?.name}
    //       </p>
    //     </button>
    //   </div>
    // </main>
    <div className="bg-gray-100">
      <Head>
        <title>Beer E-commerce</title>
      </Head>
      <main className="mx-auto max-w-screen-2xl">
        <Banner />
        <p>ALOOOO</p>
      </main>
    </div>
  );
}
