"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Link from "next/link";
import ProductFeed from "@/components/ProductFeed";

export default function Home() {
  const [beerList, setbeerList] = useState<any>(null);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers?per_page=36")
      .then((res) => {
        const beerWithoutFilter = res.data;
        const filteredBeer = beerWithoutFilter.filter(
          (beer: any) =>
            beer.image_url !== "https://images.punkapi.com/v2/keg.png",
        );
        // For each beer add a new property to the object called rating it will be a random number between 1 and 5
        filteredBeer.forEach((beer: any) => {
          beer.rating = Math.floor(Math.random() * 5) + 1;
        });
        setbeerList(filteredBeer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Beer E-commerce</title>
      </Head>
      <main className="mx-auto max-w-screen-2xl">
        <section>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
                Best Beer Selection
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
                Always the best beer selection for you
              </p>
              <Link href="#beer-section">
                <button
                  type="button"
                  className="mt-1.5 inline-block bg-EbonyClay px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Explore Beer Collection
                </button>
              </Link>
            </div>
            <div className="lg:col-span-5 lg:mt-0 lg:flex">
              <Banner />
            </div>
          </div>
        </section>
        {beerList ? (
          <ProductFeed id="beer-section" {...beerList} itemsPerPage={10} />
        ) : null}
      </main>
    </div>
  );
}
