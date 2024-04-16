"use client";
import ModalLogOut from "@/components/modal/logOut";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

import React from "react";

const Navbar = () => {
  const param = usePathname();
  let setelah = useParams();

  return (
    <div className="navbar bg-base-100">
      <StartNavbar />
      {
        (param==="/login" ? (
          <div></div>
        ) : (
          <MiddleBar param={param} setelah={setelah} />
        ))
      }
      <LogOut />
    </div>
  );
};

const MiddleBar = ({ param, setelah }) => {
  return (
    <div className="navbar-center lg:flex">
      <ul className="menu menu-horizontal font-bold text-lg px-1">
        <li>
          <Link
            href={"/"}
            className={`hover:scale-110 hover:text-pink-600 hover:rotate-[-6deg] ${
              param === "/" ? "text-pink-600 text-2xl rotate-[-6deg]" : ""
            }`}
          >
            <span className="material-symbols-outlined text-salmon">
              location_home
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/spd"}
            className={`hover:scale-110 hover:text-pink-600 hover:rotate-[-6deg] ${
              param === `/spd/${setelah.slug}` || param === "/spd"
                ? "text-pink-600 text-2xl rotate-[-6deg]"
                : ""
            }`}
          >
            <span className="material-symbols-outlined text-emerald-500">
              flight
            </span>
            Buat Spt
          </Link>
        </li>
        <li>
          <Link
            href={"/kepegawaian"}
            className={`hover:scale-110 hover:text-pink-600 hover:rotate-[-6deg] ${
              param === "/kepegawaian"
                ? "text-pink-600 text-2xl rotate-[-6deg]"
                : ""
            }`}
          >
            <span className="material-symbols-outlined text-cyan-600">
              badge
            </span>
            Kepegawaian
          </Link>
        </li>
      </ul>
    </div>
  );
};

const StartNavbar = () => {
  return (
    <div className="navbar-start">
      <Link href={"/"} className="transition hover:rotate-[-25deg] duration-500 hover:font-extralight font-bold text-cyan-600 ml-2 hover:scale-110 hover:text-stone-600 hover:underline text-3xl">
        MySPD
      </Link>
    </div>
  );
};

const LogOut = () => {
  const { status } = useSession();
  const { push } = useRouter();
  return (
    <div className="navbar-end font-bold ">
      {status === "authenticated" ? (
        <ModalLogOut />
      ) : (
        <a
          className="btn btn-circle btn-outline"
          onClick={() => push("/login")}
        >
          <span className="material-symbols-outlined hover:scale-150 hover:text-cyan-600 hover:rotate-[6deg]">
            enhanced_encryption
          </span>
        </a>
      )}
    </div>
  );
};

export default Navbar;
