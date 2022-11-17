import { selectRecChannels, selectTopChannels } from "../utils/channelsModels";
import { RiMovieLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const Sidebar = () => {
  const [recChannels, setRecChannels] = useState([]);
  const [topChannels, setTopChannels] = useState([]);
  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const [rec, top] = await Promise.all([
        selectRecChannels(),
        selectTopChannels(),
      ]);
      setRecChannels(rec);
      setTopChannels(top);
    };

    fetchData();
  }, [session]);

  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#171718]">
      <div className="">
        <p className="hidden xl:flex uppercase py-4 pl-2 font-bold text-sm ">
          Recommended Channels
        </p>
        <p className="">
          <RiMovieLine size={30} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {recChannels.map((channel, index) => (
        <div key={index} className="inline-flex items-center py-1 w-full">
          <div>
            <Image
              src={channel.avatar}
              width={50}
              height={50}
              alt={channel.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p className="font-bold">{channel.username}</p>
              <p className="text-gray-400">{channel.game_name}</p>
            </div>
            <p className="flex items-center w-1/3">
              <BsDot size={30} color="red" /> {channel.ranking}K
            </p>
          </div>
        </div>
      ))}
      <div className="">
        <p className="hidden xl:flex uppercase py-4 pl-2 font-bold text-sm ">
          Top Channels
        </p>
        <p className="">
          <RiMovieLine size={30} className="xl:hidden justify-center w-full" />
        </p>
      </div>
      {topChannels.map((channel, index) => (
        <div key={index} className="inline-flex items-center py-1 w-full">
          <div>
            <Image
              src={channel.avatar}
              width={50}
              height={50}
              alt={channel.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p className="font-bold">{channel.username}</p>
              <p className="text-gray-400">{channel.game_name}</p>
            </div>
            <p className="flex items-center w-1/3">
              <BsDot size={30} color="red" /> {channel.ranking}K
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
