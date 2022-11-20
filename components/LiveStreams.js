import React from "react";
import LiveStreamCard from "./LiveStreamCard";

const LiveStreams = ({ streams }) => {
  return (
    <div id="livestreams" className="p-2 md:p-8">
      <h2 className="font-bold px-2 py-2 md:text-xl border-t border-gray-700">
        <span className="text-purple-500">Live Channels</span> we thinkzzzå
        you&apos;ll like
      </h2>
      <div className="pl-4 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2">
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
