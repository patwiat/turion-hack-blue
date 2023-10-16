import React from "react";

const Jupiter = () => {
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
              <h1 className="text-2xl font-semibold">Jupiter</h1>
              <p className="text-gray-600 mt-2">The biggest planet</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source
              src="https://images-assets.nasa.gov/video/GSFC_20180313_Jupiter_m12878_GreatRedSpot/GSFC_20180313_Jupiter_m12878_GreatRedSpot~orig.mp4
"
              type="video/mp4"
            />
          </video>
          <p>
            Jupiter, the fifth planet from the Sun and the largest in the Solar
            System, is a massive gas giant with a mass exceeding that of all
            other planets combined and a slightly smaller mass than the Sun. It
            orbits the Sun at a distance of 5.20 astronomical units, with an
            orbital period of 11.86 years. Jupiter, named after the chief deity
            of ancient Roman religion, is the third brightest natural object in
            Earth's night sky, observed since ancient times. This giant planet
            played a pivotal role in the early Solar System, forming first and
            influencing the development of other planets. Comprising primarily
            hydrogen and helium, its interior generates more heat than it
            receives from the Sun. Jupiter's internal structure consists of an
            outer mantle of liquid metallic hydrogen and a denser inner core.
            Its rapid rotation results in an oblate spheroid shape with a
            noticeable equatorial bulge. The planet's atmosphere displays a
            distinctive pattern of latitudinal bands, hosting the famous Great
            Red Spot, a massive storm in existence since 1831. Jupiter has a
            faint ring system and a powerful magnetosphere, making it the
            second-largest structure in the Solar System after the heliosphere.
            With 95 known moons and possibly more, including the four large
            Galilean moons discovered by Galileo Galilei in 1610, Jupiter boasts
            a diverse moon system, with Ganymede surpassing Mercury in size. It
            has been visited by nine robotic probes since 1973, with more
            missions planned.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Jupiter;
// import React from "react";

// const Jupiter = () => {
//   return <div>Jupiter</div>;
// };

// export default Jupiter;
