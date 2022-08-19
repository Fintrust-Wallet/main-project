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

export const NavBar = () => {
  const [userAccount, setUserAccount] = useState("");
  const [web3Modal, setWeb3Modal] = useState({});
  const [openWalletOptions, setOpenWalletOptions] = useState(false);

  const [openRaiseCampaignModal, setOpenRaiseCampaignModal] = useState(false)
  const [openSuccessForm, setOpenSuccessForm] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const [connected, setConnected] = useState(false)

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
        network: "testnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

  const connect = async () => {
    try {
      setShowAlert(!showAlert)
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      setUserAccount(accounts[0]);
      // console.log(signer);
    } catch (err) {
      setShowAlert(!showAlert)

      console.error(err);
      alert("There is an error");
    }
  };

  // provider.on("connect", (info) => {
  //   Setaddress(info);
  // });

  return (
    <>

    <AlertModal showAlert={showAlert} setShowAlert={setShowAlert}  connectStatus={showAlert} />
    <ConnectWallet open={openWalletOptions} onClose={() => setOpenWalletOptions(false)} onConnect={connect} />
    <RaiseCampaign open={openRaiseCampaignModal} onClose={()=> setOpenRaiseCampaignModal(!openRaiseCampaignModal)}setOpenSuccessForm={setOpenSuccessForm}/>
    <SuccessForm open={openSuccessForm} onClose={()=> setOpenSuccessForm(!openSuccessForm)} setOpenSuccessForm={setOpenSuccessForm}/>
      <div className="neon absolute top-10 max-w-6xl left-3 flex flex-row items-center px-8 py-3 bg-[rgba(5,_124,_160,_0.79)] rounded-[20px] mx-auto container z-50">
        <ConnectWallet
          open={openWalletOptions}
          onClose={() => setOpenWalletOptions(false)}
          onConnect={connect}
        />


        <div>
          <Image
            src={logo}
            alt="Fintrust Wallet Logo"
            className="md:w-20 w-12 md:h-20 h-12 object-contain"
          />
        </div>
        <div className="hidden px-10 md:flex md:flex-row justify-start items-center">
          <div>
            <ul>
              {connected ? (
                <div className="text-white text-lg md:text-xl font-sora-light flex flex-row gap-4">
                  <li>
                    <Link href="/">Campaigns</Link>
                  </li>
                  <li>
                    <Link href="/about">My Portfolio</Link>
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
                <div className="flex flex-row justify-between items-center">
                  <button
                    onClick={() => setOpenWalletOptions(true)}
                    className="w-[221px] h-[57px] text-white bg-primary-100 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
                  >
                    Create Campaigns
                  </button>
                  <button
                    onClick={() => setOpenWalletOptions(true)}
                    className="w-[221px] h-[57px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
                  >
                    {userAccount ? (
                      userAccount.substring(0, 10) +
                      "..." +
                      userAccount.substring(35, 40)
                    ) : (
                      <div className="flex flex-row gap-4">
                        <span className="text-sm">Connect Wallet</span>
                        <Image src={wallet_icon} alt="wallet" />
                      </div>
                    )}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setOpenWalletOptions(true)}
                    className="w-[221px] h-[57px] text-white bg-primary-900 p-[17px_31px] flex flex-row justify-center items-center gap-[10px] rounded-[10px] connected-btn"
                  >
                    {userAccount ? (
                      userAccount.substring(0, 10) +
                      "..." +
                      userAccount.substring(35, 40)
                    ) : (
                      <div className="flex flex-row gap-4">
                        <span className="text-sm">Connect Wallet</span>
                        <Image src={wallet_icon} alt="wallet" />
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

