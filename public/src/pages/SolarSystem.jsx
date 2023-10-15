import React from "react";
import Planet from "../components/Planet";
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
        <Planet />
        <Planet />
        <Planet />
        <Planet />
      </div>
    </div>
  );
};

export default SolarSystem;
