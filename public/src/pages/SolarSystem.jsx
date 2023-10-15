import React from "react";
import Planet from "./Planet";
import { Link } from "react-router-dom";

const SolarSystem = () => {
  const data = [
    { name: "Earth" },
    { name: "Earth" },
    { name: "Earth" },
    { name: "Earth" },
    { name: "Earth" },
  ];

  console.log(data);
  return (
    <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="flex gap-x-20">
        <Link to="/Planet">Earth</Link>
        <Link to="/Planet">Mars</Link>
      </div>
    </div>
  );
};

export default SolarSystem;
