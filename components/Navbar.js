import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useContext, useEffect } from "react";
import logoPic from "../public/assets/bubble-logo.png";
import { Menu, Transition } from "@headlessui/react";
import {
  BsThreeDotsVertical,
  BsSearch,
  BsPerson,
  BsChatSquare,
  BsGlobe,
  BsExclamationCircle,
} from "react-icons/bs";
import { BiCabinet } from "react-icons/bi";
import { TbCrown, TbDiamonds } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "../contexts/UserContext";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data, error, status } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", session.user.id)
          .single();

        if (error && status != 406) throw error;

        if (data) {
          setLoggedInUser(data.username);
        }
      } catch (error) {
        alert("Error loading user's account data");
        console.log("error", error);
      }
    };

    if (session) getProfile();
  }, [session]);

  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#171718] mb-[2px] z-10">
      {/* Left side */}
      <div className="flex grow justify-start items-center">
        <Link href={"/"} className="flex">
          <Image
            src={logoPic}
            alt="logo picture"
            width={40}
            height={40}
            className="z-20"
          />
        </Link>
        {session && (
          <p className="p-4 text-xl cursor-pointer hover:text-purple-500 ">
            Following
          </p>
        )}
        <p className="p-4 text-xl cursor-pointer text-purple-500 border-b-2 border-purple-500">
          Browse
        </p>
        <div className="p-4 ">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={25} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#171718] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={
                          active
                            ? "bg-purple-500 text-white-100 block px-4 py-2 text-sm"
                            : "text-white-200 block px-4 py-2 text-sm"
                        }
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={
                          active
                            ? "bg-purple-500 text-white-100 block px-4 py-2 text-sm"
                            : "text-white-200 block px-4 py-2 text-sm"
                        }
                      >
                        Support
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={
                          active
                            ? "bg-purple-500 text-white-100 block px-4 py-2 text-sm"
                            : "text-white-200 block px-4 py-2 text-sm"
                        }
                      >
                        License
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/*Middle stuff*/}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-gray-600 flex justify-between items-center max-w-sm w-full m-auto p-2 rounded-xl">
          <div>
            <input
              type="text"
              className="bg-transparent border-none focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className="px-3">
            <BsSearch size={20} />
          </div>
        </div>
      </div>
      {/*Right side*/}
      <div className="hidden md:flex grow items-center">
        {session ? (
          <div className="ml-20 flex grow items-center justify-end gap-2">
            <TbCrown size={25} className="cursor-pointer" />
            <BiCabinet size={25} className="cursor-pointer" />
            <BsChatSquare size={20} className="cursor-pointer" />
            <Link href={"/"}>
              <button className="flex items-center px-2 py-1 mx-1 rounded-md font-semibold bg-gray-700">
                <TbDiamonds className="mx-1" />
                Get Bits
              </button>
            </Link>
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <Image
                    className="rounded-full"
                    src={session.user.user_metadata.avatar_url}
                    alt="user avatar"
                    width={30}
                    height={30}
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/account">
                          <p
                            className={
                              active
                                ? "bg-purple-500 text-white-100 block px-4 py-2 text-sm cursor-pointer"
                                : "text-white-200 block px-4 py-2 text-sm"
                            }
                          >
                            Account
                          </p>
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => supabase.auth.signOut()}
                          className={
                            active
                              ? "bg-purple-500 text-white-100 block px-4 py-2 text-sm cursor-pointer"
                              : "text-white-200 block px-4 py-2 text-sm"
                          }
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="ml-20 flex grow items-center justify-end gap-2">
            <TbCrown size={25} className="cursor-pointer" />
            <Link href={"/account"}>
              <button className="px-2 py-1 mx-1 rounded-lg font-semibold bg-gray-700">
                Log In
              </button>
            </Link>
            <Link href={"/account"}>
              <button className="px-2 py-1 mx-1 rounded-lg font-semibold bg-purple-500">
                Sign Up
              </button>
            </Link>
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <BsPerson size={30} className="cursor-pointer" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/account">
                          <div
                            className={
                              active
                                ? "bg-purple-500 text-white-100 flex items-center gap-2 px-4 py-2 text-sm cursor-pointer"
                                : "text-white-200 flex items-center gap-2 px-4 py-2 text-sm"
                            }
                          >
                            <BsGlobe />
                            Language
                            <AiOutlineRight className="justify-self-end" />
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={"/"}
                          className={
                            active
                              ? "bg-purple-500 text-white-100 flex items-center gap-2 px-4 py-2 text-sm cursor-pointer"
                              : "text-white-200 flex items-center gap-2 px-4 py-2 text-sm"
                          }
                        >
                          <BsExclamationCircle />
                          Cookie Preferences
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={"/account"}
                          className={
                            active
                              ? "bg-purple-500 text-white-100 block px-4 py-2 text-sm cursor-pointer"
                              : "text-white-200 block px-4 py-2 text-sm border-t border-gray-700"
                          }
                        >
                          Log In
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
