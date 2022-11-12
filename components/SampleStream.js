import React from "react";

const SampleStream = () => {
  return (
    <div id="sample" className="p-2 md:p-8">
      <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/Nfpyb_bz52Q"
          title="T1 vs DRX Worlds 2022 Final Minutes Reaction | Sykkuno, Doublelift, Timmy and Brodin"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default SampleStream;
