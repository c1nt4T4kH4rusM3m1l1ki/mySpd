'use client'
import { Fragment } from "react";
import { Fredoka } from "next/font/google";
import { useLogin } from "@/lib/hook";

const ecxo = Fredoka({weight:['400','600'], subsets:['latin'], display:'swap'})

export default function KepegawaianLayout({ children }) {
  useLogin()
  return (
    <Fragment>
      <section className={ecxo.className}>{children}</section>
    </Fragment>
  );
}
