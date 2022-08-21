import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/logo.svg";
import wallet_icon from "../../public/wallet-check.svg";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Search } from "./components/search";
import { ConnectWallet } from "../modals/connectwalletmodal";
import { RaiseCampaign } from "../modals/raisecampaign";
import { SuccessForm } from "../modals/raisecampaign/successForm";
import { AlertModal } from "../modals/alertmodal";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";

export const NavBar = () => {
 const loc = "/"
  const [userAccount, setUserAccount] = useState("");
  const [web3Modal, setWeb3Modal] = useState({});
  const [openWalletOptions, setOpenWalletOptions] = useState(false);

  const [openRaiseCampaignModal, setOpenRaiseCampaignModal] = useState(false);
  const [openSuccessForm, setOpenSuccessForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [connected, setConnected] = useState(false);
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        // infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      },
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const web3modal = new Web3Modal({
        network: "testnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

  const connect = async () => {
    if (connected) return disconnect();
    try {
      // setShowAlert(!showAlert)
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      setUserAccount(accounts[0]);
      setConnected(true);
      // console.log(signer);
      //set cookie
    
    } catch (err) {
      setShowAlert(!showAlert);

      console.error(err);
      alert("There is an error");
    }
  };

  const disconnect = async () => {
    try {
      await web3Modal.clearCachedProvider();
      setUserAccount("");
      setConnected(false);
    } catch (err) {
      console.error(err);
      alert("There is an error");
    }
  };

  return (
    <>
      <AlertModal
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        connectStatus={showAlert}
      />
      <ConnectWallet
        open={openWalletOptions}
        onClose={() => setOpenWalletOptions(false)}
        onConnect={connect}
      />
      <RaiseCampaign
        open={openRaiseCampaignModal}
        onClose={() => setOpenRaiseCampaignModal(!openRaiseCampaignModal)}
        setOpenSuccessForm={setOpenSuccessForm}
      />
      <SuccessForm
        open={openSuccessForm}
        onClose={() => setOpenSuccessForm(!openSuccessForm)}
        setOpenSuccessForm={setOpenSuccessForm}
      />
      <div className="neon left-40  absolute top-10 max-w-6xl  flex flex-row items-center px-8 py-6 bg-[rgba(5,_124,_160,_0.79)] rounded-[20px] mx-auto container z-50">
        <ConnectWallet
          open={openWalletOptions}
          onClose={() => setOpenWalletOptions(false)}
          onConnect={connect}
        />

        <div>
          <Link href={"/"} className="cursor pointer">
          <Image
            src={logo}
            alt="Fintrust Wallet Logo"
            className="md:w-20 w-12 md:h-20 h-12 object-contain"
          />
          </Link>
        </div>
        <div className="hidden px-10 md:flex md:flex-row justify-start items-center">
          <div>
            <ul>
              {connected && !loc.includes("portfolio") ? (
                <div className="text-white text-lg md:text-xl font-sora-light flex flex-row gap-4">
                  <li>
                    <Link href="/campaigns">Campaigns</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">My Portfolio</Link>
                  </li>
                </div>
              ) : (
                <div className="text-white text-lg md:text-xl font-sora-light flex flex-row gap-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/docs">Documentation</Link>
                  </li>
                  <li>
                    <Link href="/#roadmap">Roadmap</Link>
                  </li>
                  <li>
                    <Link href="/community">Our Community</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <div className="flex flex-row gap-6 absolute right-3 justify-end items-center">
            {/* <Search w="42" h="42" /> */}
            <div>
              {connected ? (
                <div className="flex flex-row justify-between gap-4 items-center">
                  <button
                    onClick={() =>
                      setOpenRaiseCampaignModal(!openRaiseCampaignModal)
                    }
                    className="w-[221px] h-[57px] text-white bg-[#06C4B2]  p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] "
                  >
                    Create Campaigns
                  </button>
                <div>
                  {userAccount ? (
                    <button
                      onClick={() => disconnect()}
                      className="w-[221px] h-[57px] text-white bg-primary-100 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
                    >
                      {userAccount.substring(0, 10) +
                        "*****" +
                        userAccount.substring(35, 40)}
                    </button>
                  ) : (
                    <button
                      onClick={() => setOpenWalletOptions(true)}
                      className="w-[221px] h-[57px] text-white bg-[#06C4B2]  p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] "
                    >
                      <div className="flex flex-row gap-4">
                        <span className="text-sm">Connect Wallet</span>
                        <Image src={wallet_icon} alt="wallet" />
                      </div>
                    </button>
                  )}
                </div>
                </div>
              ) : (
                <div>
                  {userAccount ? (
                    <button
                      onClick={() => disconnect()}
                      className="w-[221px] h-[57px] text-white bg-[#06C4B2] p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] "
                    >
                      {userAccount.substring(0, 10) +
                        "..." +
                        userAccount.substring(35, 40)}
                    </button>
                  ) : (
                    <button
                      onClick={() => setOpenWalletOptions(true)}
                      className="w-[221px] h-[57px] text-white bg-[#06C4B2] p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] "
                    >
                      <div className="flex flex-row gap-4">
                        <span className="text-sm">Connect Wallet</span>
                        <Image src={wallet_icon} alt="wallet" />
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
