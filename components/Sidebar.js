import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowBarLeft, BsDot } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { selectRecChannels, selectTopChannels } from "../utils/channelsModels";

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
    <div className="fixed w-16 xl:w-[15rem] h-screen p-2 bg-[#171718] overflow-auto">
      <div className="flex items-center justify-between">
        <p className="hidden xl:flex uppercase py-4 pl-2 font-bold text-sm ">
          For You
        </p>

        <RiMovieLine
          size={30}
          className="xl:hidden justify-self-center w-full"
        />

        <BsArrowBarLeft
          size={20}
          className="hidden xl:flex cursor-pointer justify-self-end"
        />
      </div>
      {recChannels.map((channel, index) => (
        <div
          key={index}
          className="inline-flex items-center py-1 w-full hover:scale-105 ease-in duration-300"
        >
          <div>
            <Image
              src={channel.avatar}
              width={50}
              height={50}
              alt={channel.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full cursor-pointer">
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
        <div
          key={index}
          className="inline-flex items-center py-1 w-full hover:scale-105 ease-in duration-300 "
        >
          <div>
            <Image
              src={channel.avatar}
              width={50}
              height={50}
              alt={channel.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full cursor-pointer">
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
