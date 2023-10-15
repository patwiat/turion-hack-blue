import React from "react";
import Planet from "./Planet";
import { Link } from "react-router-dom";
import Background from "../../assets/background.svg";
// import Sun from "../../assets/sun.svg";
import Sun from "../../assets/thesun.gif";
// import Mercury from "../../assets/mercury.svg";
import Mercury from "../../assets/mercury.gif";
// import Venus from "../../assets/venus.svg";
import Venus from "../../assets/venus.gif";
// import Earth from "../../assets/earth.svg";
import Earth from "../../assets/earth.gif";
// import Mars from "../../assets/mars.svg";
import Mars from "../../assets/mars.gif";
// import Jupiter from "../../assets/jupiter.svg";
import Jupiter from "../../assets/jupiter.gif";
// import Saturn from "../../assets/saturn.svg";
import Saturn from "../../assets/saturn.gif";
// import Uranus from "../../assets/uranus.svg";
import Uranus from "../../assets/uranus.gif";
// import Neptune from "../../assets/neptune.svg";
import Neptune from "../../assets/neptune.gif";
// import Sun from "../../assets/thesun.gif";
import { motion } from "framer-motion";

const SolarSystem = ({ socket }) => {
  const data = [
    { name: "Earth" },
    { name: "Earth" },
    { name: "Earth" },
    { name: "Earth" },
    { name: "Earth" },
  ];

  console.log(data);
  return (
    <div className="relative max-h-full flex">
      <div className=" relative mx-auto">
        <p className="absolute top-20 left-8 text-white text-9xl">
          getItUpThere2023
        </p>
      </div>
      <img src={Background} alt="Space Background" className="w-full h-full" />
      <Link to="/sun">
        <img
          src={Sun}
          alt="sun"
          className="absolute -left-[27rem] w-[1000px] hover:drop-shadow-glow hover:scale-105 duration-300"
        />
      </Link>
      <div className="flex justify-center items-center w-fit h-full absolute gap-x-12 left-[22rem] bottom-20">
        <Link to="/mercury">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-20 space-y-2 flex flex-col items-center hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative">Mercury</p>
              <img src={Mercury} alt="Mercury" className="w-10" />
            </div>
          </motion.div>
        </Link>

        <Link to="/venus">
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-10 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center">Venus</p>
              <img src={Venus} alt="Venus" className="w-28" />
            </div>
          </motion.div>
        </Link>

        <Link to="/earth">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-20 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center">Earth</p>
              <img src={Earth} alt="Earth" className="w-32" />
            </div>
          </motion.div>
        </Link>
        <Link to="/mars">
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-20 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center">Mars</p>
              <img src={Mars} alt="Mars" className="w-14" />
            </div>
          </motion.div>
        </Link>
        <Link to="/jupiter">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-20 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center">Jupiter</p>
              <img src={Jupiter} alt="Jupiter" className="w-56" />
            </div>
          </motion.div>
        </Link>

        <Link to="/saturn">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-20 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center top-24">Saturn</p>
              <img src={Saturn} alt="Saturn" className="w-[400px]" />
            </div>
          </motion.div>
        </Link>

        <Link to="/uranus">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-20 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center">Uranus</p>
              <img src={Uranus} alt="Uranus" className="w-20" />
            </div>
          </motion.div>
        </Link>
        <Link to="/neptune">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <div className="relative bottom-5 space-y-2 hover:scale-110 duration-300 hover:drop-shadow-glow">
              <p className="text-white relative text-center">Neptune</p>
              <img src={Neptune} alt="Neptune" className="w-28" />
            </div>
          </motion.div>
        </Link>
        {/* <img src={Venus} alt="Space Background" className="" /> */}
        {/* <img src={Earth} alt="Space Background" className="" /> */}
        {/* <img src={Jupiter} alt="Space Background" className="" /> */}
        {/* <img src={Saturn} alt="Space Background" className="" /> */}
        {/* <img src={Uranus} alt="Space Background" className="" /> */}
        {/* <img src={Neptune} alt="Space Background" className="" /> */}
      </div>
      {/* <img src={Sun} alt="Space Background" className="absolute -left-[30%]" />
      <img src={Sun} alt="Space Background" className="absolute -left-[30%]" /> */}
      {/* <p className="absolute bg-red-400 z-[100]">Hello</p> */}
    </div>
  );
};

export default SolarSystem;
