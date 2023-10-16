import React from "react";

const Uranus = () => {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          {/* Image on the left (3/4 width on medium screens and above) */}
          <div className="w-full md:w-3/4">
            <img src="" alt="" />
          </div>

          {/* Text on the right (1/4 width on medium screens and above) */}
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <div className="bg-white p-4 shadow-md">
              <h1 className="text-2xl font-semibold">Uranus</h1>
              <p className="text-gray-600 mt-2">Ice Giant</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source
              src="https://images-assets.nasa.gov/video/JPL-19860124-VOYAGEf-0001-AVC2002151 First Spacecraft at Uranus/JPL-19860124-VOYAGEf-0001-AVC2002151 First Spacecraft at Uranus~orig.mp4"
              type="video/mp4"
            />
            <p>
              Uranus, the seventh planet from the Sun, is a unique icy gas giant
              with a complex layered atmosphere featuring frigid temperatures
              and extreme weather patterns. It has a remarkable axial tilt of
              97.8 degrees and rotates in reverse. Uranus boasts the
              third-largest diameter and fourth-largest mass in the Solar
              System, with a rocky core surrounded by a hydrogen and helium-rich
              atmosphere. This enigmatic planet has a dim ring system, 13 inner
              moons, and five major ones. Its magnetic field is uneven,
              contributing to the darkening of its rings and moons. Uranus was
              first observed in 1781 and is named after the Greek god Uranus.
              Visited by Voyager 2 in 1986, there is growing interest in further
              exploration, with the proposed Uranus Orbiter and Probe mission a
              top priority in planetary science.
            </p>
          </video>
        </div>
      </div>
    </main>
  );
};

export default Uranus;
// import React from "react";

// const Uranus = () => {
//   return <div>Uranus</div>;
// };

// export default Uranus;
