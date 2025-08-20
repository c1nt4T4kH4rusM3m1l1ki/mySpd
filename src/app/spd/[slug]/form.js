"use client";
import DateInput from "@/components/elements/DateInput";
import Input from "@/components/elements/Input";
import Select from "@/components/elements/Select";
import TextareaLg from "@/components/elements/Textarea";
import { objEditSpd, Kendaraan } from "@/lib/data";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { act, useEffect, useRef, useState } from "react";

export function FormEdit({ dataSpd, pegawai, onError }) {
  const [edit, setEdit] = useState(true);
  const [dataEdit, setDataEdit] = useState(objEditSpd);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    if (!dataSpd) return;
    
    try {
      // Set nilai awal form
      Object.keys(refSpd).forEach(key => {
        if (refSpd[key].current && dataSpd[key]) {
          if (key.includes('tanggal')) {
            refSpd[key].current.value = moment(dataSpd[key]).format("YYYY-MM-DD");
          } else {
            refSpd[key].current.value = dataSpd[key];
          }
        }
      });
    } catch (error) {
      console.error("Error setting initial form values:", error);
      onError?.();
    }
  }, [dataSpd]);

  const settingEdit = (e, item) => {
    setDataEdit(prev => ({ ...prev, [item]: e.target.value }));
  };


  const handleDelete = async () => {
    if (!window.confirm("Apakah anda yakin ingin menghapus data SPD ini?")) {
      return;
    }
  
    setIsLoading(true);
    try {
      const response = await fetch(process.env.URL_SPD, {
        method: "POST",
        mode:"no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: dataSpd.id,
          action: "delete"
        })
      });
  
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      router.push("/spd");
    } catch (error) {
      console.error("Error saat delete:", error);
      alert("Gagal menghapus data: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      action: "edit",
      id: dataSpd.id,
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
    };

    try {
      const response = await fetch(process.env.URL_SPD, {
        method: "POST",
        mode:"no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Gagal menyimpan data');
      }
        
    } catch (error) {
      console.error("Error saving data:", error);
      onError?.();
    } finally {
      setIsLoading(false);
      setEdit(true);
      router.push("/spd");
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-end gap-2 mt-1">
        <Link href="/spd" className="btn btn-warning btn-sm">
          Kembali Ke List SPD
        </Link>

        {edit ? (
          <button
            type="button"
            className="btn btn-neutral btn-sm"
            onClick={() => setEdit(false)}
            disabled={isLoading}
          >
            Edit Data Ini
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-accent btn-sm"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        )}

        <button
          type="button"
          className="btn btn-error btn-sm"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? 'Menghapus...' : 'Hapus Data Ini'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-3">
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
          onChange={(e) => settingEdit(e, "maksud")}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-1">
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

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-1">
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

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-1 mb-10">
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