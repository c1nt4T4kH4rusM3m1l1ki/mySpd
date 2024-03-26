"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Navbar = () => {
  const param = usePathname();

  return (
    <div className="navbar bg-base-100">
      <StartNavbar />
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal font-bold text-lg px-1">
          <li>
            <Link
              href={"/"}
              className={`hover:scale-110 hover:text-pink-600 hover:rotate-[-6deg] ${
                param == "/" ? "text-pink-600 text-2xl rotate-[-6deg]" : ""
              }`}
            >
              <Iconhome /> Home
            </Link>
          </li>
          <li>
            <Link
              href={"/kepegawaian"}
              className={`hover:scale-110 hover:text-pink-600 hover:rotate-[-6deg] ${
                param == "/kepegawaian"
                  ? "text-pink-600 text-2xl rotate-[-6deg]"
                  : ""
              }`}
            >
              <IconEmployee /> Kepegawaian
            </Link>
          </li>
        </ul>
      </div>
      <LogOut />
    </div>
  );
};

const StartNavbar = () => {
  return (
    <div className="navbar-start">
      <a className="transition hover:rotate-[-25deg] duration-500 hover:font-extralight font-bold text-cyan-600 ml-2 hover:scale-110 hover:text-stone-600 hover:underline text-3xl">
        MySPD
      </a>
    </div>
  );
};

const LogOut = () => {
  return (
    <div className="navbar-end font-bold text-4xl">
      <a>
        <IconsPadlockOpen className="hover:scale-125 hover:rotate-[20deg] transition duration-300 case-out hover:bg-inherit cursor-pointer" />
      </a>
    </div>
  );
};

const Iconhome = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"></path>
      <path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"></path>
      <path
        fill="#b71c1c"
        d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"
      ></path>
      <path fill="#d84315" d="M18 28h12v16H18z"></path>
      <path fill="#01579b" d="M21 17h6v6h-6z"></path>
      <path
        fill="#ff8a65"
        d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"
      ></path>
    </svg>
  );
};

function IconEmployee(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#e46701"
        d="M28.523 23.813c-.518-.51-6.795-2.938-7.934-3.396c-1.133-.45-1.585-1.697-1.585-1.697s-.51.282-.51-.51c0-.793.51.51 1.02-2.548c0 0 1.415-.397 1.134-3.68h-.34s.85-3.51 0-4.698c-.853-1.188-1.187-1.98-3.06-2.548c-1.87-.567-1.19-.454-2.548-.396c-1.36.057-2.492.793-2.492 1.188c0 0-.85.057-1.188.397c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.624l-.337.11c-.283 3.284 1.132 3.682 1.132 3.682c.51 3.058 1.02 1.755 1.02 2.548c0 .792-.51.51-.51.51s-.453 1.246-1.585 1.697c-1.132.453-7.416 2.887-7.927 3.396c-.51.52-.453 2.896-.453 2.896h26.954s.063-2.378-.453-2.897zm-6.335 2.25h-4.562v-1.25h4.562z"
      ></path>
    </svg>
  );
}

function IconsPadlockOpen(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M402.6 164.6c0-78.92-65.7-146.47-146.6-146.47c-81.1 0-146.6 65.49-146.6 146.47v72.3H159v-69.1c0-53.7 43.4-97.26 97-97.26c53.5 0 97 41.66 97 94.06zm-315.7 91C72.2 278.4 64 304.7 64 332.4c0 88.3 85 161.5 192 161.5s192-73.2 192-161.5c0-27.7-8.3-54-22.9-76.8zm168.8 23.9c22.3 0 40.9 18 40.9 40.3c0 16.8-10.6 31.2-25.1 37.3l32.7 98.2h-96.4l32.1-98.2c-14.5-6.1-24.5-20.6-24.5-37.3c0-22.3 18-40.3 40.3-40.3"
      ></path>
    </svg>
  );
}

export default Navbar;
