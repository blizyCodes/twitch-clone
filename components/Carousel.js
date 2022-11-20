import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          speed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className="p-2 max-w-screen md:p-8 lg:p-12">
      <h2 className="font-bold px-2 py-2 md:text-xl border-t border-gray-700">
        Get started with one of the{" "}
        <span className="text-purple-500">best</span>
      </h2>
      <Slider {...settings}>
        <div className="relative overflow-hidden w-full  pt-[56.25%] hover:scale-105 ease-in duration-300">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Nfpyb_bz52Q?autoplay=1&mute=1"
            title="T1 vs DRX Worlds 2022 Final Minutes Reaction | Sykkuno, Doublelift, Timmy and Brodin"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute top-2 left-2 bg-red-600 uppercase px-4 py-2 rounded-lg ">
            live
          </div>
          <div className="absolute bottom-2 left-2 px-4 py-2 bg-black/60">
            Viewers: 472K
          </div>
        </div>
        <div className="relative overflow-hidden w-full  pt-[56.25%] hover:scale-105 ease-in duration-300">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Nfpyb_bz52Q?autoplay=1&mute=1"
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
        <div className="relative overflow-hidden w-full  pt-[56.25%] hover:scale-105 ease-in duration-300">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Nfpyb_bz52Q?autoplay=1&mute=1"
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
        <div className="relative overflow-hidden w-full  pt-[56.25%] hover:scale-105 ease-in duration-300">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Nfpyb_bz52Q?autoplay=1&mute=1"
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
        <div className="relative overflow-hidden w-full  pt-[56.25%] hover:scale-105 ease-in duration-300">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Nfpyb_bz52Q?autoplay=1&mute=1"
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
      </Slider>
    </div>
  );
};

export default Carousel;
