import React from "react";

const SampleStream = () => {
  return (
    <div id="sample" className="flex p-2 max-w-screen-xl  md:p-8 lg:p-12">
      <div className="relative overflow-hidden w-full  pt-[56.25%]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/Nfpyb_bz52Q"
          title="T1 vs DRX Worlds 2022 Final Minutes Reaction | Sykkuno, Doublelift, Timmy and Brodin"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute top-2 left-2 bg-red-600 uppercase px-4 py-2 rounded-lg">
          live
        </div>
        <div className="absolute bottom-2 left-2 px-4 py-2 bg-black/60">
          Viewers: 472K
        </div>
      </div>
    </div>
  );
};

export default SampleStream;
