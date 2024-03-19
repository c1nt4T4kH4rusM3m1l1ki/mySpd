"use client";
import { Thasadith } from "next/font/google";
import { useEffect, useState } from "react";

const tasadit = Thasadith({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const Table = () => {
  const a = "overflow-x-auto px-20 mt-5 h-[400px] ";
  return (
    <div className={a + tasadit.className}>
      <table className="table table-sm">
        <thead className="bg-gray-50 border text-base font-bold sticky top-0 z-20">
          <tr>
            <th className=" w-20">Id</th>
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
        <Body />
      </table>
    </div>
  );
};

const Body = () => {
  const [datapeg, setDatapeg] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(process.env.API_PEG);
      let dt = await res.json();
      setDatapeg(dt.data);
    };
    dataFetch();
  }, []);

  return (
    <tbody>
      {datapeg.map((item) => {
        return (
          <tr key={item.id}>
            <td className=" w-20">{item.id}</td>
            <td>{item.nama}</td>
            <td>{item.nip}</td>
            <td>Penata Tingkat I</td>
            <td className=" w-20">III.d</td>
            <td>Perencana Ahli Muda</td>
            <td>30 Desember 1986</td>
            <td>C</td>
            <td className="text-xl">
              <DropDown />
            </td>
          </tr>
        );
      })}
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
