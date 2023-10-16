import React from "react";

const Venus = () => {
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
              <h1 className="text-2xl font-semibold">Venus</h1>
              <p className="text-gray-600 mt-2">Earth's Sister Planet</p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source
              src="https://images-assets.nasa.gov/video/NASA's Return to Venus/NASA's Return to Venus~orig.mp4"
              type="video/mp4"
            />
          </video>
          <p>
            Venus, the second planet from the Sun, is an intriguing world with a
            dense atmosphere and a surface temperature hot enough to melt lead.
            It's often seen as the \"evening star\" or \"morning star\" due to
            its brightness in Earth's sky. While Venus shares similarities with
            Earth in size and mass, its harsh conditions make it inhospitable.
            The planet has a thick carbon dioxide atmosphere and extreme
            greenhouse effect, leading to scorching temperatures and crushing
            pressure at the surface. Although there's evidence of possible
            life-friendly conditions in Venus's cloud layers, it's not
            conclusive. Venus's slow, retrograde rotation and unique orbit make
            its days and years longer than any other planet. It's one of the
            hottest spots in the solar system and has been the focus of early
            interplanetary missions, revealing its harsh environment. Future
            missions aim to learn more about Earth-like planets and their
            potential habitability.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Venus;

// import React from "react";

// const Venus = () => {
//   return <div>Venus</div>;
// };

// export default Venus;
