import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Typewriter from "typewriter-effect";
const Act = () => {
  const contacts = [
    {
      name: "GITHUB",
      icon: <FaGithub className="inline mb-2" />,
      value: "https://github.com/hazorox",
    },
    {
      name: "MAIL",
      icon: <MdMailOutline className="inline mb-2" />,
      value: "hamzaawad8899@gmail.com",
    },
    {
      name: "LINKEDIN",
      icon: <FaLinkedin className="inline mb-2" />,
      value: "https://www.linkedin.com/in/hamza-awadx/",
    },
    {
      name:"WHATSAPP",
      icon:<FaWhatsapp className="inline mb-2" />,
      value:"https://api.whatsapp.com/send?phone=201020749208"
    }
  ];
  return (
    <div className="w-full text-center justify-between py-12 flex flex-col items-center h-full">
      {/* TOP */}
      <div className="h-1/2">
        <div className="text-7xl">Contact</div>
        <div className="text-2xl opacity-80">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                // Didn't know which delay was best, so did 67
                .changeDelay(50)
                .typeString("Feeling a strange urge to reach out?")
                .start();
            }}
          />
        </div>
      </div>
      <div className="h-[50%] flex flex-wrap justify-center items-center w-[80%] gap-x-8 gap-y-4 text-4xl">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              borderRadius: 0,
              borderColor: "white",
              borderWidth: 2,
              color: "white",
              fontSize: 18,
              backgroundColor: "black",
            },
          }}
        />
        {/* Cards */}
        {contacts.map(({ name, icon, value }) => (
          <div
            className="cursor-pointer whitespace-nowrap md:basis-[40%] lg:basis-[28%]  hover:text-orange h-fit text-white"
            onClick={() => {
              if (name === "MAIL") {
                navigator.clipboard.writeText("hamzaawad8899@gmail.com");
                toast("Copied to Clipboard");
                return;
              }
              window.open(value, "_blank");
            }}
          >
          
             {"["}
            <span className="mx-2">{icon}</span>•
            <span className="mx-2">{name}</span>
            {"]"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Act;
