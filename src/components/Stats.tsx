import { type ReactElement } from "react";
import { FaDiscord, FaMarkdown } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";
import { IoGlobeOutline, IoLogoJavascript } from "react-icons/io5";
import { SiAnaconda, SiGodotengine } from "react-icons/si";
import { TbBrandCpp, TbBrandMinecraft } from "react-icons/tb";
import { Rating } from "react-simple-star-rating";
const Stats = () => {
  const skills: [string, ReactElement | string, number][] = [
    ["Full Stack", <IoGlobeOutline />, 4],
    ["JavaScript", <IoLogoJavascript />, 4],
    ["Discord Bots", <FaDiscord />, 4],
    ["Data Science", <SiAnaconda />, 3],
    ["Linux ( ARCH OFC )", <GrArchlinux />, 3],
    ["Markup and Markdown Languages", <FaMarkdown />, 5],
    ["Minecraft Modding",<TbBrandMinecraft />, 2],
    ["Problem Solving", <TbBrandCpp />, 2],
    ["Game Dev", <SiGodotengine />, 1],
  ];
  return (
    <div className="flex flex-col overflow-y-auto scrollable items-center p-8 w-full h-full overflow-x-clip">
      {/* Skills */}
      <div className="w-full text-3xl flex flex-col gap-4">
        {skills.map(([name, icon, rate]) => {
          return (
            <div key={name} className="w-full flex justify-between px-16">
              <span className="flex w-1/2 gap-8">
                <span>{icon}</span>
                <span>{name}</span>
              </span>
              <span className="w-1/2 flex justify-end">
                <Rating
                  readonly
                  initialValue={rate}
                  fillIcon={
                    <img
                
                      src="/heartRed.svg"
                      alt=""
                      style={{display:"inline-block", width: 64, height: 36}}
                    />
                  }
                  emptyIcon={
                    <img
                      src="/grayHeart.svg"
                      alt=""
                      style={{ width: 64, height: 36 ,display:"inline-block"}}
                    />
                  }
                  iconsCount={5}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
