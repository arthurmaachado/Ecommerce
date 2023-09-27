import ProductCard from "./ProductCard";

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
  // Create a star handler function that will take in the star clicked and set the state of the rating to that star
  // for now the filter is not necessary

  const handleRating = (e: any) => {
    console.log(e.target.value);
  };

  const handleCheckBox = (index: number) => {
    console.log(index);
  };

  return (
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
    </div>
  );
}
