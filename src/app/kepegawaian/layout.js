import { Fragment } from "react";
import { Fredoka } from "next/font/google";

const ecxo = Fredoka({weight:['400','600'], subsets:['latin'], display:'swap'})

export default function KepegawaianLayout({ children }) {
  return (
    <Fragment>
      <section className={ecxo.className}>{children}</section>
    </Fragment>
  );
}
