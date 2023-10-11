"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  srm: number;
  rating: number;
}

interface BeerURL {
  params: {
    beerID: number;
  };
}

export default function BeerPage(props: BeerURL) {
  const beerID = props.params.beerID;
  const [beer, setBeer] = useState<Beer>({
    id: 0,
    name: "",
    description: "",
    image_url: "",
    srm: 0,
    rating: 0,
  });
  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${beerID}`)
      .then((res) => {
        console.log(res.data[0]);
        const beerWithRating = res.data[0];
        beerWithRating.rating = Math.floor(Math.random() * 5) + 1;
        setBeer(beerWithRating);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerID]);

  return (
    <ul>
      <li>{beer.name}</li>
      <li>{beer.description}</li>
      <li>{beer.image_url}</li>
      <li>{beer.srm}</li>
      <li>{beer.rating}</li>
    </ul>
  );
}
