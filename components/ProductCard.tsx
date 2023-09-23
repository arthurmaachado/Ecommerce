import Image from "next/image";
interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-800">
      <Image
        className="h-48 w-full object-cover object-center"
        src={props.image}
        alt="Product Image"
        width={800}
        height={400}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          {props.name}
        </h2>
        <p className="mb-2 text-base text-gray-700 dark:text-gray-300">
          {props.description.split(".")[0] + "."}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${props.price}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            ${props.price * 1.2}
          </p>
          <p className="ml-auto cursor-pointer text-base font-medium text-Orange hover:underline">
            Add to Cart
          </p>
        </div>
      </div>
    </div>
  );
}
