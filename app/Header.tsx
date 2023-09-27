import Image from "next/image";
import CompanyLogo from "../public/CompanyLogo.png";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center bg-EbonyClay p-1 py-2">
        <Link href="/">
          <div className="mt-2 flex flex-grow items-center px-2 sm:flex-grow-0">
            <Image
              src={CompanyLogo}
              priority={true}
              width={80}
              height={30}
              alt="Beer E-Commerce Logo"
              className="cursor-pointer"
            />
          </div>
        </Link>
        <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-Tacao-light hover:bg-Tacao-dark sm:flex">
          <input
            type="text"
            className="h-full w-6 flex-shrink flex-grow rounded-l-md p-2 px-4 focus:outline-none"
          ></input>
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-white">
          <div className="cursor-pointer hover:underline">
            <p>Hello Arthur Machado</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline">
            <div>Returns</div>
            <div className="font-extrabold md:text-sm">& Orders</div>
          </div>
          <div className="relative flex cursor-pointer items-center hover:underline">
            <span className="absolute -right-2 top-0 h-4 w-4 rounded-full bg-Tacao-light text-center font-bold text-black md:right-6">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="mt-1 hidden font-extrabold md:inline md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
