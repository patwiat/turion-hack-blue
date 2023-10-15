import React from "react";
import Planet from "./Planet";
import { Link } from "react-router-dom";
import Background from "../../assets/background.svg";
import Sun from "../../assets/sun.svg";
import Mercury from "../../assets/mercury.svg";
import Venus from "../../assets/venus.svg";
import Earth from "../../assets/earth.svg";
import Mars from "../../assets/mars.svg";
import Jupiter from "../../assets/jupiter.svg";
import Saturn from "../../assets/saturn.svg";
import Uranus from "../../assets/uranus.svg";
import Neptune from "../../assets/neptune.svg";
// import Sun from "../../assets/thesun.gif";

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
        <p className="absolute top-20 text-white text-9xl">getItUpThere2023</p>
      </div>
      <img src={Background} alt="Space Background" className="w-full h-full" />
      <img src={Sun} alt="sun" className="absolute left-0" />
      <div className="flex justify-center items-center w-fit h-full absolute gap-x-16 left-[25rem] bottom-20">
        <Link to="/Planet">
          <div className="relative bottom-20 space-y-2">
            <p className="text-white relative">Mercury</p>
            <img src={Mercury} alt="Mercury" className="" />
          </div>
        </Link>

        <Link to="/Planet">
          <div className="relative bottom-10 space-y-2">
            <p className="text-white relative text-center">Venus</p>
            <img src={Venus} alt="Venus" className="" />
          </div>
        </Link>

        <Link to="/Planet">
          <div className="relative bottom-20 space-y-2">
            <p className="text-white relative text-center">Earth</p>
            <img src={Earth} alt="Earth" className="" />
          </div>
        </Link>
        <Link to="/Planet">
          <div className="relative bottom-20 space-y-2">
            <p className="text-white relative text-center">Mars</p>
            <img src={Mars} alt="Mars" className="" />
          </div>
        </Link>
        <Link to="/Planet">
          <div className="relative bottom-20 space-y-2">
            <p className="text-white relative text-center">Jupiter</p>
            <img src={Jupiter} alt="Jupiter" className="" />
          </div>
        </Link>

        <Link to="/Planet">
          <div className="relative bottom-20 space-y-2">
            <p className="text-white relative text-center top-10">Saturn</p>
            <img src={Saturn} alt="Saturn" className="" />
          </div>
        </Link>

        <Link to="/Planet">
          <div className="relative bottom-20 space-y-2">
            <p className="text-white relative text-center">Uranus</p>
            <img src={Uranus} alt="Uranus className=" />
          </div>
        </Link>
        <Link to="/Planet">
          <div className="relative bottom-5 space-y-2">
            <p className="text-white relative text-center">Neptune</p>
            <img src={Neptune} alt="Neptune" className="" />
          </div>
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
