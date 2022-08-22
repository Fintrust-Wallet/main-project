import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import wallet_icon from "../../public/wallet-check.svg";
import { Search } from "./components/search";
import { ConnectWallet } from "../modals/connectwalletmodal";
import { RaiseCampaign } from "../modals/raisecampaign";
import { SuccessForm } from "../modals/raisecampaign/successForm";
import { AlertModal } from "../modals/alertmodal";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";

export const NavBar = () => {
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  const { address, connector, isConnected } = useAccount();
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [openWalletOptions, setOpenWalletOptions] = useState(false);
  const [openRaiseCampaignModal, setOpenRaiseCampaignModal] = useState(false);
  const [openSuccessForm, setOpenSuccessForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setConnected(isConnected);
      setUserAccount(address);
      // Cookies.set("userAccount", address);
    } else {
      disconnect();
      setUserAccount("");
    }
  }, [address, disconnect, isConnected]);

  const handleConnect = async (connector) => {
    try {
      setShowAlert(!showAlert);
      connect({ connector });
      setConnected(isConnected);
      setUserAccount(address);
      // Cookies.set("userAccount", address);
      router.push("/campaigns");
    } catch (err) {
      setShowAlert(!showAlert);

      console.error(err);
      alert("There is an error");
    }
  };

  // provider.on("connect", (info) => {
  //   Setaddress(info);
  // });

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
        onConnect={handleConnect}
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
        <div>
          <Link href={"/"} className="cursor pointer">
            <a>
              <Image
                src={logo}
                alt="Fintrust Wallet Logo"
                className="md:w-20 w-12 md:h-20 h-12 object-contain"
              />
            </a>
          </Link>
        </div>
        <div className="hidden px-10 md:flex md:flex-row justify-start items-center">
          <div>
            <ul>
              {connected ? (
                <div className="text-white text-[1rem] font-sora-light flex flex-row gap-4">
                  <li>
                    <Link href="/campaigns">Campaigns</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">My Portfolio</Link>
                  </li>
                </div>
              ) : (
                <div className="text-white text-[1rem] font-sora-light flex flex-row gap-4">
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
