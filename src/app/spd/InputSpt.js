import { ModalCreate } from "@/components/modal/Modal";
import Input from "@/components/elements/Input";
import Select from "@/components/elements/Select";
import TextareaLg from "@/components/elements/Textarea";
import DateInput from "@/components/elements/DateInput";

export default function InputSpt() {
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
          <TextareaLg name="Dasar SPT" />
          <TextareaLg name="Maksud" />
        </div>
        <div className="flex justify-around mt-1 px-2">
          <DateInput name="Tanggal Berangkat" />
          <DateInput name="Tanggal Kembali" />
          <Input name="Tujuan Berangkat" />
          <Input name="Jenis Kendaraan" />
        </div>
        <div className="flex justify-around mt-1 px-2">
          <Select name="Yang Melaksanakan" />
          <Select name="Pengikut" />
          <Select mt="mt-5" />
          <Select mt="mt-5" />
        </div>

        <div className="flex justify-around mt-3">
          <Select name="PPTK" />
          <DateInput name="Tanggal SPT" />
          <DateInput name="Tanggal SPD" />
          <div className="modal-action mt-10">
            <label htmlFor="spt" className="btn btn-accent">
              simpan
            </label>
            <label htmlFor="spt" className="btn-warning btn">
              Batal
            </label>
          </div>
        </div>
      </div>
    </ModalCreate>
  );
}
