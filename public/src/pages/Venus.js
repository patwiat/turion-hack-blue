import React from 'react';

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
              <p className="text-gray-600 mt-2">
                Your text goes here. You can add more content, paragraphs, or any other HTML elements as needed.
              </p>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Watch Video</h2>
          <video width="100%" controls>
            <source src="../../../videos/venus.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Chat</h2>
          <Chat room={'venus'} title='Venus'/>
        </div>
      </div>
    </main>
  );
}

export default Venus;

// import React from "react";

// const Venus = () => {
//   return <div>Venus</div>;
// };

// export default Venus;
export default Venus;
