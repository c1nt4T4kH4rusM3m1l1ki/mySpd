import DateInput from "@/components/elements/DateInput";
import Input from "@/components/elements/Input";
import Select from "@/components/elements/Select";
import TextareaLg from "@/components/elements/Textarea";
import Link from "next/link";

export default function DetailSpd({ params }) {
  return (
    <div>
        <div className="flex justify-end mr-20 mt-8">
            <Link href={"/spd"} type="button" className="btn btn-warning btn-sm">Kembali</Link>
            <button type="button" className="btn btn-accent btn-sm mx-2">Simpan</button>
            <button type="button" className="btn btn-error btn-sm">Hapus SPT Ini</button>
        </div>
      <div className="flex justify-between px-10 mx-10 mt-3">
        <TextareaLg name="Dasar SPT" />
        <TextareaLg name="Maksud" />
      </div>

      <div className="flex justify-between mx-10 mt-1 px-10">
        <DateInput name="Tanggal Berangkat"/>
        <DateInput name="Tanggal Kembali"/>
        <Input name="Jenis Kendaraan"/>
        <Input name="Tujuan Berangkat"/>
      </div>

      <div className="flex justify-between mx-10 mt-1 px-10">
        <Select name="Yang Melaksanakan"/>
        <Select name="Pengikut:"/>
        <Select mt="mt-6"/>
        <Select mt="mt-6"/>
      </div>

      <div className="flex justify-between mx-10 mt-1 mb-10 px-10">
            <Select name="PPTK"/>
            <DateInput name="Tanggal SPT"/>
            <DateInput name="Tanggal SPD"/>
      </div>
    </div>
  );
}
