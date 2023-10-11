"use client";
import ProductCard from "./ProductCard";
import { SetStateAction, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const categories = [
  "IPA",
  "Lager",
  "Pilsner",
  "Stout",
  "Pale Ale",
  "Sour",
  "Porter",
  "Wheat",
  "Belgian",
  "Brown Ale",
  "Amber",
  "Saison",
];

export default function ProductFeed(props: any) {
  const handleRating = (e: any) => {
    console.log(e.target.value);
  };

  const handleCheckBox = (index: number) => {
    console.log(index);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBeer = currentPage * props.itemsPerPage;
  const indexOfFirstBeer = indexOfLastBeer - props.itemsPerPage;
  const currentBeers = Object.values(props).slice(
    indexOfFirstBeer,
    indexOfLastBeer,
  );
  const totalPages = Math.ceil(
    Object.values(props).length / props.itemsPerPage,
  );
  const handlePageChange = (newPage: SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="flex flex-row">
        <div>
          <h1 className="mb-2 font-extrabold">Filter By Ratings</h1>
          <div className="flex flex-col">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-9"
                className="rating-hidden"
                onClick={(e) => handleRating(e)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={(e) => handleRating(e)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={(e) => handleRating(e)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={(e) => handleRating(e)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={(e) => handleRating(e)}
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                onClick={(e) => handleRating(e)}
              />
            </div>
          </div>
          <h1 className="mb-1 mt-4 font-extrabold">Filter By Category</h1>
          {categories.map((category, index) => (
            <form key={index} className="flex flex-row items-center">
              <input
                type="checkbox"
                className="checkbox-primary checkbox checkbox-sm rounded-sm"
                onChange={() => handleCheckBox(index)}
              ></input>
              <label className="px-2 font-semibold">{category}</label>
            </form>
          ))}
          <h1 className="mb-1 mt-4 font-extrabold">Price</h1>
          <h2 className="cursor-pointer font-semibold hover:underline">
            Under $10
          </h2>
          <h2 className="cursor-pointer font-semibold hover:underline">
            $10 to $25
          </h2>
          <h2 className="cursor-pointer font-semibold hover:underline">
            $25 to $50
          </h2>
          <h2 className="cursor-pointer font-semibold hover:underline">
            $100 to $200
          </h2>
          <h2 className="cursor-pointer font-semibold hover:underline">
            $200 & Above
          </h2>
        </div>
        <div
          id={props.id}
          className="mx-auto grid grid-flow-row-dense gap-7 md:grid-cols-2 md:pl-6 lg:grid-cols-3 lg:pl-12"
        >
          {currentBeers.map((beer: any) => (
            <ProductCard
              id={beer.id}
              key={beer.id}
              name={beer.name}
              description={beer.description}
              image={beer.image_url}
              price={beer.srm}
              rating={beer.rating}
            />
          ))}
        </div>
      </div>
      <div className="my-6 flex items-center justify-center">
        <ChevronLeftIcon
          onClick={
            currentPage === 1
              ? () => handlePageChange(totalPages)
              : () => handlePageChange(currentPage - 1)
          }
          className="mx-1 mt-2 h-12 cursor-pointer rounded-full border-2 p-4 shadow-md transition duration-150 ease-in-out"
        />
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`ease-in-out" mx-1 mt-2 flex h-12 w-12 items-center justify-center rounded-full p-0 text-sm text-white shadow-md transition duration-150 ${
              currentPage === i + 1 ? "bg-Orange" : "bg-Tacao-light"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <ChevronRightIcon
          onClick={
            currentPage === totalPages
              ? () => handlePageChange(1)
              : () => handlePageChange(currentPage + 1)
          }
          className="mx-1 mt-2 h-12 cursor-pointer rounded-full border-2 p-4 shadow-md transition duration-150 ease-in-out"
        />
      </div>
    </>
  );
}
