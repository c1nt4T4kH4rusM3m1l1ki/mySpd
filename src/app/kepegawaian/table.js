"use client";

import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { tgllIndo } from "@/lib/fungsiLain";
import EditKepegawaian from "./EditPegawai";



const Table = () => {

  const [datapeg, setDatapeg] = useState(null);
  const fecher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(process.env.URL_PEG, fecher);

  const callDataPeg = (item) => {
    let newdata = [];
    for (let i = item.length + 1; i > 0; i--) {
      if (item[i] !== undefined) {
        newdata.push(item[i]);
      }
    }
    setDatapeg(newdata);
  };

  useEffect(() => {
    if (data) {
      callDataPeg(data);
    }
  }, []);

  useEffect(() => {
    if (data) {
      callDataPeg(data);
    }
  }, [data]);

  return (
    <div className="overflow-x-auto px-20 mt-5 mb-16 h-[370px] ">
      <table className="table table-sm ">
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
            <td>
              <EditKepegawaian nama={item.nama} id={item.id} data={item} />
            </td>
            <td>
              <EditKepegawaian nama={item.nip} id={item.id} data={item} />
            </td>
            <td>
              <EditKepegawaian nama={item.pangkat} id={item.id} data={item} />
            </td>
            <td className=" w-20">
              <EditKepegawaian nama={item.golongan} id={item.id} data={item} />
            </td>
            <td>
              <EditKepegawaian nama={item.jabatan} id={item.id} data={item} />
            </td>
            <td className="text-end">
              <EditKepegawaian
                nama={tgllIndo(item.tanggalLahir)}
                id={item.id}
                data={item}
              />
            </td>
            <td className="text-center">
              <EditKepegawaian
                nama={item.tingkatSpd}
                id={item.id}
                data={item}
              />
            </td>
            <td>
              <Hapus nama={item.nama} idItem={item.id} />
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

function Hapus(props) {
  const { idItem, nama } = props;
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor={nama} className="text-xl btn glass btn-circle">
        <span className="material-symbols-outlined text-red-900 text-xs">
          delete
        </span>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={nama} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[400px] bg-cyan-200">
          <h3 className="text-lg font-bold text-red-700 text-center underline">PERHATIAN !</h3>
          <p className="py-4 text-center text-lg mt-4">Apakah Anda Yakin Menghapus Data</p>
          <p className="text-center text-xl text-red-800 m-0 font-bold"> An. {nama}</p>
          <div className="modal-action" >
            <label className="btn btn-error" htmlFor={nama}>
                Yakin
            </label>
            <label className="btn btn-warning" htmlFor={nama}>
                Tidak
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
