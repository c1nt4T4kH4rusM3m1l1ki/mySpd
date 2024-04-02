"use client";
import DateInput from "@/components/elements/DateInput";
import Input from "@/components/elements/Input";
import Select from "@/components/elements/Select";
import TextareaLg from "@/components/elements/Textarea";
import { objSpd, Kendaraan } from "@/lib/data";
import moment from "moment";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function FormEdit(props) {
  const { dataSpd, pegawai } = props;
  const [edit, setEdit] = useState(true);

  // refs
  const refSpd = {
    id: useRef(),
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
    tujuan1: useRef(),
    tujuan2: useRef(),
    tujuan3: useRef(),
    tujuanBerangkat: useRef(),
  };

  useEffect(() => {
    refSpd.dasar.current.value = dataSpd.dasar;
    refSpd.maksud.current.value = dataSpd.maksud;
    refSpd.tanggalBerangkat.current.value = moment(
      dataSpd.tanggalBerangkat
    ).format("YYYY-MM-DD");
    refSpd.tanggalKembali.current.value = moment(dataSpd.tanggalKembali).format(
      "YYYY-MM-DD"
    );
    refSpd.jenisKendaraan.current.value = dataSpd.jenisKendaraan;
    refSpd.tujuanBerangkat.current.value = dataSpd.tujuanBerangkat;
    refSpd.person.current.value = dataSpd.person;
    refSpd.pengikut1.current.value = dataSpd.pengikut1;
    refSpd.pengikut2.current.value = dataSpd.pengikut2;
    refSpd.pengikut3.current.value = dataSpd.pengikut3;
    refSpd.pptk.current.value = dataSpd.pptk;
    refSpd.tanggalSpt.current.value = moment(dataSpd.tanggalSpt).format(
      "YYYY-MM-DD"
    );
    refSpd.tanggalSpd.current.value = moment(dataSpd.tanggalSpd).format(
      "YYYY-MM-DD"
    );
  }, []);

  useEffect(() => {
    refSpd.dasar.current.value = dataSpd.dasar;
    refSpd.maksud.current.value = dataSpd.maksud;
    refSpd.tanggalBerangkat.current.value = moment(
      dataSpd.tanggalBerangkat
    ).format("YYYY-MM-DD");
    refSpd.tanggalKembali.current.value = moment(dataSpd.tanggalKembali).format(
      "YYYY-MM-DD"
    );
    refSpd.jenisKendaraan.current.value = dataSpd.jenisKendaraan;
    refSpd.tujuanBerangkat.current.value = dataSpd.tujuanBerangkat;
    refSpd.person.current.value = dataSpd.person;
    refSpd.pengikut1.current.value = dataSpd.pengikut1;
    refSpd.pengikut2.current.value = dataSpd.pengikut2;
    refSpd.pengikut3.current.value = dataSpd.pengikut3;
    refSpd.pptk.current.value = dataSpd.pptk;
    refSpd.tanggalSpt.current.value = moment(dataSpd.tanggalSpt).format(
      "YYYY-MM-DD"
    );
    refSpd.tanggalSpd.current.value = moment(dataSpd.tanggalSpd).format(
      "YYYY-MM-DD"
    );
    alert('data berhasil di ubah')
  }, [dataSpd]);


  return (
    <div>
      <ActionButton setEdit={setEdit} edit={edit} />
      <div className="flex justify-between px-10 mx-10 mt-3">
        <TextareaLg name="Dasar SPT" ref={refSpd.dasar} active={edit} />
        <TextareaLg name="Maksud" ref={refSpd.maksud} active={edit} />
      </div>

      <div className="flex justify-between mx-10 mt-1 px-10">
        <DateInput
          name="Tanggal Berangkat"
          ref={refSpd.tanggalBerangkat}
          active={edit}
        />
        <DateInput
          name="Tanggal Kembali"
          ref={refSpd.tanggalKembali}
          active={edit}
        />
        <Select
          name="Jenis Kendaraan"
          ref={refSpd.jenisKendaraan}
          isi={Kendaraan}
          active={edit}
        />
        <Input
          name="Tujuan Berangkat"
          ref={refSpd.tujuanBerangkat}
          active={edit}
        />
      </div>

      <div className="flex justify-between mx-10 mt-1 px-10">
        <Select
          name="Yang Melaksanakan"
          ref={refSpd.person}
          isi={pegawai}
          active={edit}
        />
        <Select
          name="Pengikut:"
          ref={refSpd.pengikut1}
          isi={pegawai}
          active={edit}
        />
        <Select mt="mt-6" ref={refSpd.pengikut2} isi={pegawai} active={edit} />
        <Select mt="mt-6" ref={refSpd.pengikut3} isi={pegawai} active={edit} />
      </div>

      <div className="flex justify-between mx-10 mt-1 mb-10 px-10">
        <Select name="PPTK" ref={refSpd.pptk} isi={pegawai} active={edit} />
        <DateInput name="Tanggal SPT" ref={refSpd.tanggalSpt} active={edit} />
        <DateInput name="Tanggal SPD" ref={refSpd.tanggalSpd} active={edit} />
      </div>
    </div>
  );
}

function ActionButton(props) {
  const { setEdit, edit } = props;


  function editHandler(){
    setEdit(false)
  }

  function simpanHandler(){
    setEdit(true)
  }



  return (
    <div className="flex justify-end mr-20 mt-1">
      <Link href={"/spd"} type="button" className="btn btn-warning btn-sm">
        Kembali Ke List SPD
      </Link>

      {edit ? (
        <button type="button" className="btn btn-neutral btn-sm mx-2" onClick={editHandler}>
          Edit Data Ini
        </button>
      ) : (
        <button type="button" className="btn btn-accent btn-sm mx-2" onClick={simpanHandler}>
          Simpan Perubahan
        </button>
      )}

      <button type="button" className="btn btn-error btn-sm">
        Hapus Data Ini
      </button>
    </div>
  );
}
