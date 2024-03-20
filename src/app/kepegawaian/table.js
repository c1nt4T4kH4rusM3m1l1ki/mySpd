"use client";
import { Thasadith } from "next/font/google";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { tgllIndo } from "@/lib/fungsiLain";

const tasadit = Thasadith({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const Table = () => {
  const a = "overflow-x-auto px-20 my-5 h-[410px] ";
  const [datapeg, setDatapeg] = useState(null);
  const fecher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://script.google.com/macros/s/AKfycbzgsxA_2Qa2p68VQbYF4PzicDu_1aYka3tX8fNdpQb9R-P3LHIkUc5W5c_s5-SeLARN/exec",
    fecher
  );

  const callDataPeg = (item)=>{
    let newdata =[]
      for(let i=item.length+1; i > 0;i--){
        if(item[i]!==undefined){
          newdata.push(item[i])
        }
      }
      setDatapeg(newdata);
  }

  useEffect(() => {
    if (data) {
      callDataPeg(data)
    }
  }, []);

  useEffect(() => {
    if (data) {
      callDataPeg(data)
    }
  }, [data]);

  return (
    <div className={a + tasadit.className}>
      <table className="table table-sm">
        <thead className="bg-gray-50 border text-base font-bold sticky top-0 z-20">
          <tr>
            <th className="hidden w-20">Id</th>
            <th>Nama</th>
            <th>Nip</th>
            <th>Pangkat</th>
            <th className=" w-20">Gol</th>
            <th>Jabatan</th>
            <th>Tanggal Lahir</th>
            <th>Tingkat SPD</th>
            <th className="w-[10px]"></th>
          </tr>
        </thead>
        <Body data={datapeg} />
      </table>
    </div>
  );
};

const Body = (props) => {
  const { data } = props;

  return (
    <tbody>
      {data ? (
        data.map((item) => (
          <tr key={item.id}>
            <td className="hidden w-20">{item.id}</td>
            <td>{item.nama}</td>
            <td>{item.nip}</td>
            <td>{item.pangkat}</td>
            <td className=" w-20">{item.golongan}</td>
            <td>{item.jabatan}</td>
            <td className="text-end">{tgllIndo(item.tanggalLahir)}</td>
            <td className="text-center">{item.tingkatSpd}</td>
            <td className="text-xl">
              <DropDown />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={9} className="text-center">
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-secondary"></span>
          </td>
        </tr>
      )}
    </tbody>
  );
};

const DropDown = () => {
  return (
    <div className="dropdown dropdown-left">
      <div
        tabIndex={0}
        role="button"
        className="hover:scale-125 hover:text-red-700 m-1 text-emerald-500"
      >
        <span className="material-symbols-outlined">edit</span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-30 menu p-2 shadow bg-lime-50  rounded-box w-30"
      >
        <li>
          <span className="material-symbols-outlined text-emerald-500">
            quick_reference_all
          </span>

          <span className="material-symbols-outlined text-red-900">delete</span>
        </li>
      </ul>
    </div>
  );
};

export default Table;
