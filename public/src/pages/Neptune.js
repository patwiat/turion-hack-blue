import React from "react";

const Neptune = () => {
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
              <h1 className="text-2xl font-semibold">Neptune</h1>
              <p className="text-gray-600 mt-2">
                {" "}
                Farthest Planet from the sun
              </p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source
              src="https://images-assets.nasa.gov/video/JPL-19890825-VOYAGEf-0001-AVC2002151 First Spacecraft at Neptune/JPL-19890825-VOYAGEf-0001-AVC2002151 First Spacecraft at Neptune~orig.mp4"
              type="video/mp4"
            />
          </video>
          <p>
            Neptune, the eighth planet in the Solar System and the most distant
            recognized by the International Astronomical Union, is known for its
            remote and enigmatic nature. It is the fourth-largest planet by
            diameter and the densest among the gas giants. With a mass 17 times
            that of Earth, Neptune orbits the Sun at a distance of 30.1
            astronomical units, making it the farthest known planet. Discovered
            through mathematical predictions, Neptune has a complex atmosphere,
            distinctive blue color, and active weather patterns, including the
            Great Dark Spot. It is renowned for its strong, sustained winds,
            making it the windiest planet in the Solar System, and its extremely
            cold outer atmosphere. Neptune hosts a faint and fragmented ring
            system, identified in 1984 and confirmed by Voyager 2.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Neptune;
// import React from "react";

// const Neptune = () => {
//   return <div>Neptune</div>;
// };

// export default Neptune;
