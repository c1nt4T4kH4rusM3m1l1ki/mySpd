"use client";

import { useEffect, useState } from "react";
import { FormEdit } from "./form";
import useSWR from "swr";

export default function DetailSpd({ params }) {
  const fether = (url) => fetch(url).then((res) => res.json());
  const [pegawai, setPegawai]=useState(null)
  const { data, error } = useSWR(
    process.env.URL_SPD + "?id=" + params.slug,
    fether
  );

  useEffect(()=>{
    async function getPeg(){
      const res = await fetch(process.env.URL_PEG)
      const dt = await res.json()
      setPegawai(dt)
    }
    getPeg()
  },[])


  return (
    <>
      {data && pegawai ? (
        <FormEdit dataSpd={data} pegawai={pegawai}/>
      ) : (
        <div className="flex justify-center my-[200px]">
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-secondary"></span>
        </div>
      )}
    </>
  );
}
