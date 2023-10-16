import React from "react";

const Mars = () => {
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
              <h1 className="text-2xl font-semibold">Mars</h1>
              <p className="text-gray-600 mt-2">Our Next Home</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source
              src="https://images-assets.nasa.gov/video/JPL-20211115-MARSf-0001-Hows the Weather on Mars/JPL-20211115-MARSf-0001-Hows the Weather on Mars~orig.mp44"
              type="video/mp4"
            />
          </video>
          <p>
            Mars, known as the \"Red Planet,\" is the fourth terrestrial planet
            in the Solar System, characterized by its reddish surface due to
            iron oxide dust. It has a radius of 3,389.5 km and exhibits a
            surface dichotomy, with the northern hemisphere being flatter and
            lower than the southern hemisphere. Mars has a thin atmosphere
            primarily composed of carbon dioxide and two small, irregularly
            shaped moons, Phobos and Deimos. The planet is geologically active,
            experiencing dust devils and marsquakes, with prominent features
            like Olympus Mons, a massive shield volcano, and Valles Marineris,
            one of the largest canyons in the Solar System. Its elliptical orbit
            and axial tilt lead to pronounced seasonal changes, with surface
            temperatures ranging from -110°C to 35°C. A Martian day lasts 24.5
            hours, and its year is 1.88 Earth years long. Mars, formed about 4.5
            billion years ago, has undergone different geological periods, and
            while there are hints of past water presence, the question of
            whether life ever existed there remains unanswered. Mars has been a
            subject of observation for centuries due to its brightness, and
            space exploration has been ongoing since the late 20th century, with
            the prospect of human missions to the planet on the horizon.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Mars;

// import React from "react";

// const Mars = () => {
//   return <div>Mars</div>;
// };

// export default Mars;
