import Image from "next/image";
import CompanyLogo from "../../public/CompanyLogo.png";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
      <div className="bg-EbonyClay flex flex-grow items-center p-1 py-2">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            src={CompanyLogo}
            width={90}
            height={20}
            objectFit="contain"
            alt="Beer E-Commerce Logo"
            className="cursor-pointer"
          />
        </div>

        <div>
          <input type="text"></input>
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
      </div>
    </header>
  );
}
