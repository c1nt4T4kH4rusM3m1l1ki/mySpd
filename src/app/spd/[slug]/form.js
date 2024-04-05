"use client";
import DateInput from "@/components/elements/DateInput";
import Input from "@/components/elements/Input";
import Select from "@/components/elements/Select";
import TextareaLg from "@/components/elements/Textarea";
import { objEditSpd, Kendaraan } from "@/lib/data";
import moment from "moment";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function FormEdit(props) {
  const { dataSpd, pegawai, setLoad } = props;
  const [edit, setEdit] = useState(true);
  const [dataEdit, setDataEdit] = useState(objEditSpd);

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
  }, [dataSpd]);

  function settingEdit(e, item) {
    setDataEdit({ ...dataEdit, [item]: e.target.value });
  }

  return (
    <div>
      <ActionButton
        setEdit={setEdit}
        edit={edit}
        spd={dataSpd}
        refSpd={refSpd}
        dataEdit={dataEdit}
        setLoad={setLoad}
      />
      <div className="flex justify-between px-10 mx-10 mt-3">
        <TextareaLg
          name="Dasar SPT"
          ref={refSpd.dasar}
          active={edit}
          onChange={(e) => settingEdit(e, "dasar")}
        />
        <TextareaLg
          name="Maksud"
          ref={refSpd.maksud}
          active={edit}
          onChange={(e) => setDataEdit(e, "maksud")}
        />
      </div>

      <div className="flex justify-between mx-10 mt-1 px-10">
        <DateInput
          name="Tanggal Berangkat"
          ref={refSpd.tanggalBerangkat}
          active={edit}
          onChange={(e) => settingEdit(e, "tanggalBerangkat")}
        />
        <DateInput
          name="Tanggal Kembali"
          ref={refSpd.tanggalKembali}
          active={edit}
          onChange={(e) => settingEdit(e, "tanggalKembali")}
        />
        <Select
          name="Jenis Kendaraan"
          ref={refSpd.jenisKendaraan}
          isi={Kendaraan}
          active={edit}
          onChange={(e) => settingEdit(e, "jenisKendaraan")}
        />
        <Input
          name="Tujuan Berangkat"
          ref={refSpd.tujuanBerangkat}
          active={edit}
          onChange={(e) => settingEdit(e, "tujuanBerangkat")}
        />
      </div>

      <div className="flex justify-between mx-10 mt-1 px-10">
        <Select
          name="Yang Melaksanakan"
          ref={refSpd.person}
          isi={pegawai}
          active={edit}
          onChange={(e) => settingEdit(e, "person")}
        />
        <Select
          name="Pengikut:"
          ref={refSpd.pengikut1}
          isi={pegawai}
          active={edit}
          onChange={(e) => settingEdit(e, "pengikut1")}
        />
        <Select
          mt="mt-6"
          ref={refSpd.pengikut2}
          isi={pegawai}
          active={edit}
          onChange={(e) => settingEdit(e, "pengikut2")}
        />
        <Select
          mt="mt-6"
          ref={refSpd.pengikut3}
          isi={pegawai}
          active={edit}
          onChange={(e) => settingEdit(e, "pengikut3")}
        />
      </div>

      <div className="flex justify-between mx-10 mt-1 mb-10 px-10">
        <Select
          name="PPTK"
          ref={refSpd.pptk}
          isi={pegawai}
          active={edit}
          onChange={(e) => settingEdit(e, "pptk")}
        />
        <DateInput
          name="Tanggal SPT"
          ref={refSpd.tanggalSpt}
          active={edit}
          onChange={(e) => settingEdit(e, "tanggalSpt")}
        />
        <DateInput
          name="Tanggal SPD"
          ref={refSpd.tanggalSpd}
          active={edit}
          onChange={(e) => settingEdit(e, "tanggalSpd")}
        />
      </div>
    </div>
  );
}

function ActionButton(props) {
  const { setEdit, edit, spd, dataEdit, refSpd, setLoad} = props;
  const [newdata, setNewdata]=useState(dataEdit);
  const router = useRouter()

  useEffect(()=>{
    setNewdata({
      ...newdata,
      id: spd.id,
      dasar: refSpd.dasar.current.value,
      jenisKendaraan: refSpd.jenisKendaraan.current.value,
      maksud: refSpd.maksud.current.value,
      pengikut1: refSpd.pengikut1.current.value,
      pengikut2: refSpd.pengikut2.current.value,
      pengikut3: refSpd.pengikut3.current.value,
      person: refSpd.person.current.value,
      pptk: refSpd.pptk.current.value,
      tanggalBerangkat: refSpd.tanggalBerangkat.current.value,
      tanggalKembali: refSpd.tanggalKembali.current.value,
      tanggalSpd: refSpd.tanggalSpd.current.value,
      tanggalSpt: refSpd.tanggalSpt.current.value,
      tujuan1: "",
      tujuan2: "",
      tujuan3: "",
      tujuanBerangkat: refSpd.tujuanBerangkat.current.value,
    });
  },[dataEdit])

  function delHandler() {
    alert("apakah anda yakin ingin menghapus data SPD ini ?")
    setLoad(true)
    fetch(process.env.URL_SPD, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        action: "delete",
        id: spd.id,
      }),
    });

    location.href="/spd"
  }

  function editHandler() {
    setEdit(false);
    setNewdata({
      ...newdata,
      id: spd.id,
      dasar: refSpd.dasar.current.value,
      jenisKendaraan: refSpd.jenisKendaraan.current.value,
      maksud: refSpd.maksud.current.value,
      pengikut1: refSpd.pengikut1.current.value,
      pengikut2: refSpd.pengikut2.current.value,
      pengikut3: refSpd.pengikut3.current.value,
      person: refSpd.person.current.value,
      pptk: refSpd.pptk.current.value,
      tanggalBerangkat: refSpd.tanggalBerangkat.current.value,
      tanggalKembali: refSpd.tanggalKembali.current.value,
      tanggalSpd: refSpd.tanggalSpd.current.value,
      tanggalSpt: refSpd.tanggalSpt.current.value,
      tujuan1: "",
      tujuan2: "",
      tujuan3: "",
      tujuanBerangkat: refSpd.tujuanBerangkat.current.value,
    });
  }

  async function simpanHandler(e) {
    e.preventDefault()
    setEdit(true)
    setLoad(true)
    await fetch(process.env.URL_SPD,{
      method:"POST",
      mode:"no-cors",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newdata)
    })
   
    router.push("/spd");
  }

  return (
    <div className="flex justify-end mr-20 mt-1">
      <Link href={"/spd"} type="button" className="btn btn-warning btn-sm">
        Kembali Ke List SPD
      </Link>

      {edit ? (
        <button
          type="button"
          className="btn btn-neutral btn-sm mx-2"
          onClick={editHandler}
        >
          Edit Data Ini
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-accent btn-sm mx-2"
          onClick={e=>simpanHandler(e)}
        >
          Simpan Perubahan
        </button>
      )}

      <button
        type="button"
        className="btn btn-error btn-sm"
        onClick={delHandler}
      >
        Hapus Data Ini
      </button>
    </div>
  );
}
