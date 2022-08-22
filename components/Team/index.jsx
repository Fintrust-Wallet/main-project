import Image from "next/image";
import Behance from "../../public/behance.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/Linkedin.svg";
import Dribble from "../../public/Dribble.svg";
import Prince from "../../public/prince.png";
import OpacityPrince from "../../public/opacity-prince.png";
import { useEffect, useState } from "react";
import styles from "./team.module.css"
import { alex, endee, githubIcon, prince2, salam, tobi, wisdom } from "../../public/images";
export const Team = () => {
  const [isHover, setIsHover] = useState(0);
  const tabData = [
    {
      name: "Prince",
      image: prince2,
      subText: "Product Designer and UX writer",
      paragraph:
        "I am a User Experience Designer passionate about building easy-to-use, user-friendly, and profitable digital products while solving users’ needs. I have expertise spanning across graphic designs, website developement and content writing. ",
      social: [
        {
          name: "Behance",
          image: Behance,
          link: "http://behance.net/princechijioke",
        },
        {
          name: "Twitter",
          image: Twitter,
          link: "https://twitter.com/princechijioke0",
        },
        {
          name: "Linkedin",
          image: Linkedin,
          link: "https://www.linkedin.com/in/princeugbuta",
        },
      ],
    },
     {
      name: "Alex ",
      image: alex,
      subText: "Backend / Smart Contract Engineer",
      paragraph:
        " I am a software/blockchain developer proficient in building Web2-based and Web3-based (smart contracts and dApps) applications on the frontend and backend.",
      social: [
        {
          name: "github",
          image: githubIcon,
          link: "https://github.com/king-Alex-d-great",
        },
        {
          name: "Twitter",
          image: Twitter,
          link: "https://twitter.com/OgubuikeAlex",
        },
        {
          name: "Linkedin",
          image: Linkedin,
          link: "https://www.linkedin.com/in/ogubuike-alex/",
        },
      ],
    },
    {
      name: "Salam",
      image: salam,
      subText: "Product Designer and Digital Illustrator",
      paragraph:
        "LExperienced Product Designer with a demonstrated history of working accross various industries. Skilled in Product Design, User Experience (UX), Digital Illustrations with strong arts and design professional with certifications from Google, Udemy and co. ",
      social: [
        {
          name: "Behance",
          image: Behance,
          link: "http://behance.net/smartolayemi",
        },
        {
          name: "Twitter",
          image: Twitter,
          link: "https://twitter.com/salamolayemi11",
        },
        {
          name: "Linkedin",
          image: Linkedin,
          link: "linkedin.com/in/salam-moshood-16a02920a/",
        },
      ],
    },
    {
      name: "Wisdom",
      image: Prince,
      subText: "Brand Identity Designer",
      paragraph:"I'm a brand designer who loves helping businesses and brands promote themselves effectively with well-represented visuals that connect emotionally with their target market, become irreplaceable, and create lifelong relationships.",
      social: [
        {
          name: "Behance",
          image: Behance,
          link: "Behance: https://www.behance.net/wisssterstudio",
        },
        {
          name: "Twitter",
          image: Twitter,
          link: "Twitter: https://twitter.com/wisdomjohnsonn",
        },
        {
          name: "Linkedin",
          image: Linkedin,
          link: "Linkedin: https://linkedin.com/in/wisdomjohnsonnn",
        },
      ],
    },
    {
      name: "Tobi",
      image: Prince,
      subText: "Frontend Developer",
      paragraph:"I'm an entrepreneur and a Software developer from Nigeria. I'm a frontend developer at Fintrust.I'm working with some other startups to bring their ideas to life. I write codes to change the tech ecosystem in africa..",
      social: [
        {
          name: "github",
          image: githubIcon,
          link: " https://github.com/tobithedev",
        },
        {
          name: "Twitter",
          image: Twitter,
          link: "https://twitter.com/thetobithealpha",
        },
        {
          name: "Linkedin",
          image: Linkedin,
          link: "https://linkedin.com/in/tobithealpha",
        },
      ],
    },
    {
      name: "Christopher",
      image: Prince,
      subText: "Frontend Engineer",
      paragraph:
        "I help businesses realize their full potentials by aligning their vision and mission with their online platform, I build pixel perfect user interfaces with high performing functionalities.",
      social: [
        {
          name: "github",
          image: githubIcon,
          link: "https://github.com/mad-max-fury",
        },
        {
          name: "Twitter",
          image: Twitter,
          link: "https://twitter.com/Endee__codes",
        },
        {
          name: "Linkedin",
          image: Linkedin,
          link: "https://www.linkedin.com/in/prince-kumar-8b9b8b172/",
        },
      ],
    },
  ];
  const tabHeaders = [prince2, alex, salam, wisdom, tobi,endee].map((image, index) => {
    return <Image
              src={image}
              alt="Prince"
              className= {index === isHover ? `${styles.hover} md:w-100 md:h-100 w-[22px] h-[22px] object-contain rounded-full` : `${styles.notHover} md:w-100 md:h-100 w-[22px] h-[22px] object-contain rounded-full `}
              onMouseOver={() => setIsHover(index)}
              
     />
  });
  const tabContent = tabData.map((item, index) => {
    return (
      <span className={index === isHover ? "flex flex-col gap-y-4 text-left mt-20 md:mt-0 transition-all duration-500 ease-in-out opacity-100 w-fit overflow-unset": "flex flex-col gap-y-4 text-left mt-20 md:mt-0 transition-all duration-500 ease-in-out opacity-0 w-0 overflow-hidden"}>
        <span className="font-sora-regular font-[600] text-[24px] leading-[179.9%]">
          {item.name}
        </span>
        <span className="font-sora-light font-[600] text-[12px] leading-[179.9%]">
          {item.subText}
        </span>
        <p className="font-sora-light font-[400] h-[120px] text-[16px] md:w-[589px] w-[323px] leading-[179.9%]">
          {item.paragraph}
        </p>
        <div className="flex flex-row gap-4">
          {item.social.map((social, index) => {
            return (
              <a
                href={social.link}
                className="flex flex-col items-center justify-center"

              >
                <Image
                  src={social?.image}
                  alt="Behance"
                  className="w-20 h-20 object-contain rounded-full"
                />
              </a>
            );
          })}
        </div>
      </span>
    );
  });

  return (
    <>
      <div className="team md:px-[4.5rem] px-[0.99rem] mt-10 text-center text-white grid place-items-center border-[1.3px] border-[#fff] !relative">
        <div>
          <span className="font-[400] text-green-100 leading-[179.9%] md:text-[20px] text-[16px]">
            We serve humanity
          </span>
          <h1 className="w-[600px] h-[56px] whitespace-nowrap font-monument font-[400] md:text-[33px] text-[27px] leading-[115.9%]">
            Meet our Team
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-10">
          <div className="flex flex-col gap-y-4 text-left mt-20 md:mt-0">
            {tabContent[isHover]}
          </div>
          <div className="grid place-items-center grid-cols-3 gap-x-4 gap-y-6">
            {tabHeaders}
          </div>
        </div>
      </div>
    </>
  );
};
