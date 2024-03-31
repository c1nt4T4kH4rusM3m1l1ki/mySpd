"use client";
import { useState } from "react";
import TambahPegawai from "./forminput";
import Renewdata from "./renewdata";
import Table from "./table";

const Kepegawaian = () => {
  const [proses, setProses] = useState(false);
  return (
    <>
      {proses&&<Renewdata />}
      
      <TambahPegawai setProses={setProses} />
      <Table setProses={setProses} />
    </>
  );
};

export default Kepegawaian;
