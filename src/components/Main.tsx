import { useEffect, useState } from "react";
import { IoTriangle } from "react-icons/io5";
import Typewriter from "typewriter-effect";
const Main = () => {
  const [currentText, setCurrentText] = useState<number | undefined>(0);
  const keyPress = new Audio("/select.mp3");
  useEffect(() => {
    const listenForKey = (e: KeyboardEvent) => {
      if (e.key == "c") {
        keyPress.play();
        setCurrentText((prev) => {
          if (prev == undefined || prev == 4) return;
          return prev + 1;
        });
      }
    };
    document.addEventListener("keypress", listenForKey);
    return () => document.removeEventListener("keypress", listenForKey);
  });
  const info = [
    "A STEM OCT High School Student '28",
    "Hobbies : Coding - Gaming - Anime",
    "Coding : Full-Stack - Data Science - Random Works",
    "Languages : Arabic ( Native ) - English - Learning Japanese :D",
    "That's all about me.<br/> You can check the other tabs by mouse or keyboard arrows :D<br/>さよなら！",
  ];
  return (
    <div className="w-full h-full flex flex-col items-center text-center gap-4 text-4xl p-8">
      <img
        className="w-32 h-32"
        src="https://avatars.githubusercontent.com/u/126866424?s=48&v=4"
      />
      <div className="text-5xl md:text-7xl">Hamza Awad</div>
      <span className="opacity-75 -mt-2 mb-4 md:mb-16">aka Hazoro</span>
      {info.map((text, index) => (
        <>
          {currentText == index && (
            <Typewriter
              key={index}
              onInit={(typewriter) => {
                typewriter.changeDelay(50).typeString(text).start();
              }}
            />
          )}
        </>
      ))}
      {currentText == undefined && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(50).typeString(info[4]).start();
          }}
        />
      )}
      <span
        onClick={() => {
          keyPress.play();
          setCurrentText((prev) => {
            if (prev == undefined || prev == 4) return;
            return prev + 1;
          });
        }}
        className="absolute select-none cursor-pointer bottom-2 right-2 flex items-center"
      >
        {" "}
        <span className="hidden md:flex gap-2 justify-center items-center mx-2 -mt-1"><img className="w-8 h-8" src="/cKey.png" /> | press to advance</span>{" "}
        <IoTriangle className="rotate-90" />
      </span>
      <span className="w-full text-start"></span>
      <span className="w-full text-start"></span>
      <span className="w-full text-start"></span>
    </div>
  );
};

export default Main;
