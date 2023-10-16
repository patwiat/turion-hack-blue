import React from "react";

const Earth = () => {
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
              <h1 className="text-2xl font-semibold">Earth</h1>
              <p className="text-gray-600 mt-2">Our First Home</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Chat</h2>
          <Chat room={"earth"} title="Earth" />
          <source
            src="https://images-assets.nasa.gov/video/Earth Views from the International Space Station/Earth Views from the International Space Station~orig.mp4"
            type="video/mp4"
          />
          <p>
            Earth, the third planet from the Sun, is unique in the solar system
            as a water world, with 70.8% of its surface covered by a global
            ocean and the remaining 29.2% comprising landmasses. Its tectonic
            plates create geological features like mountains and volcanoes,
            while the planet's liquid outer core generates a protective
            magnetosphere. Earth's dynamic atmosphere, primarily composed of
            nitrogen and oxygen, maintains surface conditions and shields
            against meteoroids and UV radiation. It has a slightly flattened
            shape, is the densest planet among the rocky ones, and orbits the
            Sun, experiencing seasons due to its tilted axis. Earth's natural
            satellite, the Moon, causes tides and stabilizes its rotation. Over
            billions of years, Earth has fostered life, including humanity,
            which has now become a major influence on the planet, impacting the
            environment and climate in ways that pose significant threats to
            both human and other forms of life.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Earth;

// import React from "react";

// const Earth = () => {
//   return <div>Earth</div>;
// };

// export default Earth;
