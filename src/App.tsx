import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Act from "./components/Act";
import { PiTreasureChest } from "react-icons/pi";

function App() {
  const [opened, setOpened] = useState<"stats" | "act" | "main">("main");
  const [preSelect, setPreSelect] = useState<"stats" | "act" | "main">("main");
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioOne = new Audio("./select.mp3");
  audioOne.volume = 0.5;
  const audioTwo = new Audio("./select2.mp3");
  audioTwo.volume = 0.1;

  const switchTo = (target: "stats" | "act" | "main") => {
    if (opened === target) return;
    audioTwo.play();
    setOpened(target);
    setTransitioning(true);
    videoRef.current?.play(); // restart from currentTime 0 below via onEnded reset
  };
  useEffect(() => {
    const listenForKey = (e: KeyboardEvent) => {
      if (e.key == "ArrowRight" || e.key == "d") {
        audioOne.play();

        switch (preSelect) {
          case "act":
            setPreSelect("main");
            break;
          case "main":
            setPreSelect("stats");
            break;
          case "stats":
            setPreSelect("act");
            break;
        }
      }
      // Copied and pasted the switch above hehe
      if (e.key == "ArrowLeft" || e.key == "a") {
        audioOne.play();
        switch (preSelect) {
          case "act":
            setPreSelect("stats");
            break;
          case "main":
            setPreSelect("act");
            break;
          case "stats":
            setPreSelect("main");
            break;
          default:
            break;
        }
      }
      if (e.key == "Enter" || e.key == " ") {
        if (preSelect === opened) return;
        switchTo(preSelect);
      }
    };

    window.addEventListener("keydown", listenForKey);
    return () => window.removeEventListener("keydown", listenForKey);
  }, [preSelect, opened, audioOne, audioTwo, switchTo]);
  console.log(opened, preSelect);
  return (
    <AnimatePresence>
      <div className="bg-black text-white w-full h-full flex p-8  flex-col items-center gap-16 ">
        <motion.div className="h-[85%] border-2 border-white/70 w-[90%] p-8 justify-center items-center flex-col gap-4 relative ">
          {transitioning && (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="absolute inset-0 z-50 w-full h-full object-cover"
              onEnded={() => {
                setTransitioning(false);
                if (videoRef.current) videoRef.current.currentTime = 0;
              }}
            >
              <source src="./pixels.mp4" type="video/mp4" />
            </video>
          )}
          {opened == "stats" ? (
            <Stats />
          ) : opened == "main" ? (
            <Main />
          ) : (
            <Act />
          )}
        </motion.div>
        <motion.div className="w-[90%] md:w-[50%] grid text-orange gap-6 md:gap-24  grid-cols-3 text-2xl">
          <button
            onClick={() => {
              if (opened === "main") return;
              switchTo("main");
              setPreSelect("main");
            }}
            className={`cursor-pointer px-4 outline-none   gap-2 border-2 flex justify-around items-center py-4  ${
              opened === "main"
                ? "border-green!"
                : preSelect === "main"
                  ? "border-white/90"
                  : "border-orange hover:border-white/85"
            }`}
          >
            <img src="./heart.svg" width={32} /> MAIN
          </button>
          <button
            onClick={() => {
              if (opened === "stats") return;
              switchTo("stats");

              setPreSelect("stats");
            }}
            className={`cursor-pointer outline-none  border-2 gap-1 px-1 py-1 flex justify-around items-center ${
              opened === "stats"
                ? "border-green!"
                : preSelect === "stats"
                  ? "border-white/90"
                  : "border-orange hover:border-white/85"
            }`}
          >
            <PiTreasureChest size={48} /> STATS
          </button>
          <button
            onClick={() => {
              if (opened === "act") return;
              switchTo("act");
              setPreSelect("act");
            }}
            className={`cursor-pointer outline-none border-2 py-1 flex px-2 justify-between md:justify-center md:gap-6 items-center ${
              opened === "act"
                ? "border-green!"
                : preSelect === "act"
                  ? "border-white/90"
                  : "border-orange hover:border-white/85"
            }`}
          >
            <img src="./waves.svg" width={56} height={56} /> ACT
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
