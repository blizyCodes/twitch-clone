import Image from "next/image";
import React from "react";

const LiveStreamCard = ({
  streamPic,
  profilePic,
  title,
  streamer,
  game,
  viewers,
}) => {
  return (
    <div className="p-2 hover:scale-105 ease-in duration-300 cursor-pointer">
      <div className="relative">
        <Image src={streamPic} width={440} height={248} alt={streamer} />
        <div className="absolute bottom-2 left-2 bg-black/60">
          <p className="px-2">
            {viewers > 1000 ? (viewers / 1000).toFixed(1) + "K" : viewers}{" "}
            viewers
          </p>
        </div>
        <div className="absolute top-2 left-2 bg-red-600 uppercase px-1 rounded-lg">
          <p>live</p>
        </div>
      </div>
      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            src={profilePic}
            alt="/"
            width="60"
            height="60"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm text-gray-500">{streamer}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamCard;
