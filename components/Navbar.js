import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useContext, useEffect } from "react";
import logoPic from "../public/assets/bubble-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical, BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  useSession,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const session = useSession();
  const user = useUser();
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

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="h-14 w-full flex flex-nowrap items-center p-4 bg-[#171718] mb-[2px] z-10">
      {/* Left side */}
      <div className="flex grow justify-start items-center">
        <Link href={"/"} className="flex">
          <Image
            src={logoPic}
            alt="logo picture"
            width={40}
            height={40}
            className="z-10"
          />
        </Link>
        <p className="p-4 text-xl">Browse</p>
        <div className="p-4 z-10">
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
        <div className="bg-gray-600 flex justify-between items-center max-w-sm w-full m-auto p-2 rounded-3xl">
          <div>
            <input
              type="text"
              className="bg-transparent border-none focus:outline-none"
              placeholder="Search.."
            />
          </div>
          <div className="px-3">
            <BsSearch size={20} />
          </div>
        </div>
      </div>
      {/*Right side*/}
      <div className="hidden md:flex grow items-center justify-end">
        <div className="flex items-center">
          <Link href={"/account"}>
            <button className="px-4 py-2 mx-1 rounded-lg font-bold bg-purple-500">
              {session ? loggedInUser : "Account"}
            </button>
          </Link>

          {session ? (
            <div className="p-4">
              <Menu as="div" className="relative text-left">
                <div className="flex">
                  <Menu.Button>
                    <Image
                      className="rounded-full"
                      src={session.user.user_metadata.avatar_url}
                      alt="user avatar"
                      width={40}
                      height={40}
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
            <BsPerson size={30} />
          )}
        </div>
      </div>
      {/* Menu ham*/}
      <div onClick={toggleNav} className="md:hidden cursor-pointer z-10">
        {showNav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          showNav
            ? "fixed top-0 left-0 w-full h-screen bg-[#181718] flex justify-center items-center ease-in duration-300 md:hidden"
            : "fixed top-[-100%] left-0 w-full h-screen bg-[#171718] flex justify-center items-center ease-in duration-300 md:hidden"
        }
      >
        <ul className="text-center">
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/"}>Live Streams</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/"}>Top Categories</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-3xl font-bold">
            <Link href={"/account"}>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
