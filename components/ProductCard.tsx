import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

export default function ProductCard(props: ProductCardProps) {
  // If any of the props are undefined, return data from a different product
  // This is a workaround for a bug in the Punk API since some beers com with price as null
  if (
    !props.id ||
    !props.name ||
    !props.description ||
    !props.image ||
    !props.price
  ) {
    return null;
  }

  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<span className="text-EbonyClay">★</span>);
  }

  return (
    <Link href={`/beers/${props.id}/`}>
      <div
        key={props.id}
        className="card card-compact w-80 transform bg-base-100 text-black shadow-xl duration-300 hover:scale-105 hover:cursor-pointer"
      >
        <figure>
          <Image alt="" width={40} height={20} src={props.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.name}
            <div className="badge badge-primary mt-1">{stars}</div>
          </h2>
          <p>{props.description.split(".")[0] + "."}</p>
          <div className="card-actions items-center justify-end">
            <p className="text-xl font-semibold underline-offset-4 hover:underline">
              {props.price
                .toLocaleString("en-US", { style: "currency", currency: "USD" })
                .replace(".00", ",0")}
            </p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
