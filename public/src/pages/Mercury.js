import React from "react";

const Mercury = () => {
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          {/* Image on the left (3/4 width on medium screens and above) */}
          <div className="w-full md:w-3/4">
            <img src="../../assets/mercury.svg" alt="mercury" />
          </div>

          {/* Text on the right (1/4 width on medium screens and above) */}
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <div className="bg-white p-4 shadow-md">
              <h1 className="text-2xl font-semibold">Mercury</h1>
              <p className="text-gray-600 mt-2">Closest planet to sun</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source
              src="https://images-assets.nasa.gov/video/GSFC_20160509_Mercury_m12235_Transit2016/GSFC_20160509_Mercury_m12235_Transit2016~orig.mp4"
              type="video/mp4"
            />
          </video>
          <p>
            Mercury, the closest and smallest planet in the Solar System, is a
            terrestrial world marked by a heavily cratered surface and an
            extremely thin exosphere, lacking geological activity. Despite its
            small size, it possesses a density that gives it a similar surface
            gravity to Mars. Mercury boasts a dynamic magnetic field, albeit
            much weaker than Earth's, and has no natural moons. It is believed
            to have a solid silicate crust and mantle, overlying solid and
            liquid cores. With a scant atmosphere, Mercury's surface experiences
            extreme temperature variations, from -173°C at night to 427°C during
            the day at the equator. Water ice reservoirs exist in permanently
            shadowed polar regions. Its slow rotation results in a unique
            spin-orbit resonance, where one Mercurian day lasts 176 Earth days,
            and its orbital eccentricity is the highest among the planets.
            Positioned close to the Sun, Mercury is visible from Earth as either
            a morning or evening star and is named after the Roman god
            Mercurius. Due to its proximity to the Sun, reaching Mercury with a
            spacecraft is challenging, with only three missions having visited
            it as of 2023: Mariner 10, MESSENGER, and BepiColombo.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Mercury;

// import React from "react";

// const Mercury = () => {
//   return <div>Mercury</div>;
// };

// export default Mercury;
