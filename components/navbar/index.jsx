import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/logo.svg";
import { Search } from "./components/search";

export const NavBar = () => {
  return (
    <>
      <div className="p-[0_2rem] neon absolute top-10 left-16 flex flex-row justify-between items-center px-8 py-3 bg-[rgba(5,_124,_160,_0.79)] rounded-[20px] mx-auto container">
        <div>
          <Image
            src={logo}
            alt="Fintrust Wallet Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <div>
          <ul className="text-white font-sora-light flex flex-row gap-4">
            <li>
              <Link href="/donations">Donations</Link>
            </li>
            <li>
              <Link href="/create/campaigns">Create Campaigns</Link>
            </li>
            <li>
              <Link href="/portfolio">My Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-6 justify-between items-center">
          <Search w="42" h="42" />
          <div>
            <button className="w-[221px] h-[57px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn">
              3FZbQsad*****Zc5
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
