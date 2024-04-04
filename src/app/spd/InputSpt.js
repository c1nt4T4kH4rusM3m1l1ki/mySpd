"use client";
import { ModalCreate } from "@/components/modal/Modal";
import Input from "@/components/elements/Input";
import Select from "@/components/elements/Select";
import TextareaLg from "@/components/elements/Textarea";
import DateInput from "@/components/elements/DateInput";
import useSWR from "swr";
import { Kendaraan, objSpd } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { BuatIdSpt } from "@/lib/fungsiLain";

export default function InputSpt(props) {
  const { setLoad, mutate } = props;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(process.env.URL_PEG, fetcher);
  const [spt, setSpt] = useState(objSpd);

  const refSpd = {
    dasar: useRef(),
    jenisKendaraan: useRef(),
    maksud: useRef(),
    pengikut1: useRef(),
    pengikut2: useRef(),
    pengikut3: useRef(),
    person: useRef(),
    pptk: useRef(),
    tanggalBerangkat: useRef(),
    tanggalKembali: useRef(),
    tanggalSpd: useRef(),
    tanggalSpt: useRef(),
    tujuanBerangkat: useRef(),
  };

  useEffect(() => {
    refSpd.dasar.current.value =
      "Nota Dinas dari               Balitbang Kota Sungai Nomor Penuh 500.6.18/     /I/2024/BALITBANG Tanggal      2024 tentang '     '";
  }, []);

  useEffect(() => {}, [spt]);

  return (
    <ModalCreate
      nama={
        <>
          <span className="material-symbols-outlined text-emerald-700">
            add_box
          </span>
          <span>BUAT SPT</span>
        </>
      }
      modalId="spt"
      lebar="w-12/12 bg-cyan-200"
    >
      <div className="text-sm font-bold">
        <div className="flex justify-around px-2 mt-2">
          <TextareaLg
            name="Dasar SPT"
            ref={refSpd.dasar}
            onChange={(e) => {
              setSpt({ ...spt, id: BuatIdSpt(5), dasar: e.target.value });
            }}
          />
          <TextareaLg
            name="Maksud"
            onChange={(e) => {
              setSpt({ ...spt, maksud: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-around mt-1 px-2">
          <DateInput
            name="Tanggal Berangkat"
            onChange={(e) => {
              setSpt({ ...spt, tanggalBerangkat: e.target.value });
            }}
          />
          <DateInput
            name="Tanggal Kembali"
            onChange={(e) => {
              setSpt({ ...spt, tanggalKembali: e.target.value });
            }}
          />
          <Input
            name="Tujuan Berangkat"
            onChange={(e) => {
              setSpt({ ...spt, tujuanBerangkat: e.target.value });
            }}
          />
          <Select
            name="Jenis Kendaraan"
            isi={Kendaraan}
            onChange={(e) => {
              setSpt({ ...spt, jenisKendaraan: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-around mt-1 px-2">
          <Select
            name="Yang Melaksanakan"
            isi={data}
            onChange={(e) => {
              setSpt({ ...spt, person: e.target.value });
            }}
          />
          <Select
            name="Pengikut"
            isi={data}
            onChange={(e) => {
              setSpt({ ...spt, pengikut1: e.target.value });
            }}
          />
          <Select
            mt="mt-5"
            isi={data}
            onChange={(e) => {
              setSpt({ ...spt, pengikut2: e.target.value });
            }}
          />
          <Select
            mt="mt-5"
            isi={data}
            onChange={(e) => {
              setSpt({ ...spt, pengikut3: e.target.value });
            }}
          />
        </div>

        <div className="flex justify-around mt-3">
          <Select
            name="PPTK"
            isi={data}
            onChange={(e) => {
              setSpt({ ...spt, pptk: e.target.value });
            }}
          />
          <DateInput
            name="Tanggal SPT"
            onChange={(e) => {
              setSpt({ ...spt, tanggalSpt: e.target.value });
            }}
          />
          <DateInput
            name="Tanggal SPD"
            onChange={(e) => {
              setSpt({ ...spt, tanggalSpd: e.target.value });
            }}
          />
          <ActionSpt spt={spt} setLoad={setLoad} mutate={mutate} />
        </div>
      </div>
    </ModalCreate>
  );
}

function ActionSpt(props) {
  const { spt, setLoad, mutate } = props;

  const simpanHandler = async () => {
    setLoad(true);
    try {
      await fetch(process.env.URL_SPD, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(spt),
      });
      // Setelah permintaan berhasil, panggil mutate() untuk memperbarui data
      mutate();
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      // Tangani kesalahan sesuai kebutuhan Anda
    }
  };

  return (
    <div className="modal-action mt-10">
      <label htmlFor="spt" className="btn btn-accent" onClick={simpanHandler}>
        simpan
      </label>
      <label htmlFor="spt" className="btn-warning btn">
        Batal
      </label>
    </div>
  );
}
