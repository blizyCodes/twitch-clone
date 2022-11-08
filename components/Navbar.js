import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import logoPic from "../public/assets/bubble-logo.png";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical, BsSearch, BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed h-14 w-full flex  items-center p-4 bg-[#171718] mb-[2px] z-10">
      <div className="flex grow justify-start items-center">
        <Link href={"/"}>
          <Image src={logoPic} alt="logo picture" width={40} height={40} />
        </Link>
        <p className="p-4 text-xl">Browse</p>
        <div className="p-4"></div>
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
            <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#171718] ring-1 ring-white ring-opacity-5 focus:outline-none">
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
      <div className="hidden md:flex grow items-center justify-end">
        <div className="flex items-center">
          <Link href={"#"}>
            <button className="px-4 py-2 mx-1 rounded-lg font-bold bg-purple-500">
              Account
            </button>
          </Link>
          <BsPerson size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
