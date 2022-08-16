import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/logo.svg";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Search } from "./components/search";

export const NavBar = () => {
  const [userAccount, setUserAccount] = useState("");
  const [web3Modal, setWeb3Modal] = useState({});

  const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          // infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
        },
      },
    };

  // let web3Modal;
  // if (typeof window != "undefined") {
  //   web3Modal = new Web3Modal({
  //     network: "mainnet", // optional
  //     cacheProvider: true, // optional
  //     providerOptions, // required
  //   });
  // }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const web3modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

  const connect = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      setUserAccount(accounts[0]);
      console.log(signer)
    } catch (err) {
      console.error(err);
      alert("There is an error")
    }
  };

  // provider.on("connect", (info) => {
  //   Setaddress(info);
  // });

  return (
    <>
      <div className="p-[0_2rem] neon absolute top-10 max-w-6xl md:left-16 flex flex-row justify-between items-center px-8 py-3 bg-[rgba(5,_124,_160,_0.79)] rounded-[20px] md:mx-auto md:container">
        <div>
          <Image
            src={logo}
            alt="Fintrust Wallet Logo"
            className="md:w-20 w-12 md:h-20 h-12 object-contain"
          />
        </div>
        <div className="hidden md:flex md:flex-row gap-5 justify-between items-center">
          <div>
            <ul className="text-white text-lg md:text-xl font-sora-light flex flex-row gap-4">
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
              <button
                onClick={connect}
                className="w-[221px] h-[57px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
              >
                {userAccount
                  ? userAccount.substring(0, 10) +
                    "..." +
                    userAccount.substring(35, 40)
                  : "Connect Wallet"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
