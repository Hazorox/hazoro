import { type ReactElement } from "react";
import { FaDiscord, FaGithub, FaMarkdown } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";
import { IoMdOpen } from "react-icons/io";
import { IoGlobeOutline, IoLogoJavascript } from "react-icons/io5";
import { SiAnaconda, SiGodotengine } from "react-icons/si";
import { TbBrandCpp, TbBrandMinecraft } from "react-icons/tb";

import { Rating } from "react-simple-star-rating";
const Stats = () => {
  const skills: [string, ReactElement | string, number][] = [
    ["Full Stack", <IoGlobeOutline />, 4],
    ["JavaScript & Typescript ", <IoLogoJavascript />, 4],
    ["Discord Bots", <FaDiscord />, 4],
    ["Data Science", <SiAnaconda />, 3],
    ["Linux (ARCH OFC)", <GrArchlinux />, 3],
    ["Markup & Markdown Langs", <FaMarkdown />, 5],
    ["Minecraft Modding", <TbBrandMinecraft />, 2],
    ["Problem Solving", <TbBrandCpp />, 2],
    ["Game Dev", <SiGodotengine />, 1],
  ];
  const projects = [
    [
      "Kaizen",
      "Japanese Immersion Platform",
      "https://kaizen.appwrite.network",
      "https://github.com/hazorox/kaizen",
      "/kaizen.png",
    ],
    [
      "Biomaker",
      "Linktree, but better",
      "https://biomaker.netlify.app",
      "https://github.com/hazorox/biomaker",
      "/biomaker.png",
    ],
    [
      "DECI Project",
      "A data analysis project in DECI scholarship",
      "",
      "https://github.com/Hazorox/WranglingDeciL3",
      "/deci.png",
    ],
    [
      "Mado",
      "A simple game about procrastination (WIP)",
      "https://itch.io/idk",
      "https://github.com/Hazorox/mado",
      "/mado.png",
    ],
  ];
  return (
    <div className="flex flex-col overflow-y-auto scrollable items-center p-1 md:p-8 w-full h-full overflow-x-clip">
      {/* Skills */}
      <div className="w-full text-3xl flex flex-col gap-4">
        {skills.map(([name, icon, rate]) => {
          return (
            <div key={name} className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-2 lg:px-16">
              <span className="flex text-center w-full justify-start items-center md:justify-start md:w-1/2 gap-8">
                <span>{icon}</span>
                <span>{name}</span>
              </span>
              <span className="w-full md:w-1/2 flex justify-center items-center md:justify-end">
                <Rating
                  readonly
                  initialValue={rate}
                  fillIcon={
                    <img
                      src="/heartRed.svg"
                      alt=""
                      style={{ display: "inline-block", width: 48, height: 36 }}
                    />
                  }
                  emptyIcon={
                    <img
                      src="/grayHeart.svg"
                      alt=""
                      style={{ width: 48, height: 36, display: "inline-block" }}
                    />
                  }
                  iconsCount={5}
                />
              </span>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 p-2 md:p-12 justify-around">
        {projects.map(([name, text, demo, github, pic]) => (
          <div className="border-2 h-fit lg:max-h-fit pb-8 p-2 flex-col border-[#fffbe6]">
            <img src={pic} className="w-full h-2/3" />
            <span className="text-4xl w-full text-center justify-center flex my-2">
              {name}
            </span>
            <span className="flex w-full justify-between">
              <span className="text-2xl">{text}</span>
              <span className="flex md:flex-row flex-col gap-8 mr-2">
                {demo&&<a href={demo} className="hover:text-orange" target="_blank">
                  <IoMdOpen size={32} />
                </a>}
                <a href={github} className="hover:text-orange" target="_blank">
                  <FaGithub size={32} />
                </a>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
