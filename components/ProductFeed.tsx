import ProductCard from "./ProductCard";

export default function ProductFeed(props: any) {
  return (
    <div className="mx-auto grid grid-flow-row-dense gap-7 md:grid-cols-2 md:pl-6 lg:grid-cols-3 lg:pl-12">
      {Object.values(props).map((beer: any) => (
        <ProductCard
          id={beer.id}
          key={beer.id}
          name={beer.name}
          description={beer.description}
          image={beer.image_url}
          price={beer.srm}
        />
      ))}
    </div>
  );
}
