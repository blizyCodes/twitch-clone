import React from "react";
import LiveStreamCard from "./LiveStreamCard";


const LiveStreams = ({ streams }) => {
  return (
    <div className="">
      <h2 className="font-bold px-2 md:text-xl ">
        <span className="text-purple-500">Live Channels</span> we think you'll
        vibe with.
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
        {streams.map((stream, index) => (
          <div key={index}>
            <LiveStreamCard
              streamPic={stream.stream_image}
              profilePic={stream.profile_image}
              title={stream.title}
              streamer={stream.streamer}
              game={stream.game}
              viewers={stream.viewers}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveStreams;
