import Image from "next/image";
interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
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
  return (
    <div
      key={props.id}
      className="card card-compact w-80 transform bg-base-100 text-black shadow-xl duration-300 hover:scale-105 hover:cursor-pointer"
    >
      <figure>
        <Image alt="" width={40} height={20} src={props.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.description.split(".")[0] + "."}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
