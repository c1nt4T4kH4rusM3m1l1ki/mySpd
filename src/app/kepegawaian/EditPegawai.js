import { ModalEdit } from "@/components/modal/Modal";
import moment from "moment";
import { useRef, useState, useEffect } from "react";
import { PangkatGol } from "@/lib/data";

const EditKepegawaian = (props) => {
  const { nama, id, data } = props;
  const [edit, setEdit] = useState(true);

  const refs = {
    nama: useRef(),
    nip: useRef(),
    jabatan: useRef(),
    pangkat: useRef(),
    golongan: useRef(),
    tanggalLahir: useRef(),
    tingkatSpd: useRef(),
  };

  useEffect(() => {
    refs.nama.current.value = data.nama;
    refs.nip.current.value = data.nip;
    refs.jabatan.current.value = data.jabatan;
    refs.pangkat.current.value = data.pangkat;
    refs.golongan.current.value = data.golongan;
    refs.tanggalLahir.current.value = moment(data.tanggalLahir).format(
      "YYYY-MM-DD"
    );
    refs.tingkatSpd.current.value = data.tingkatSpd;
  }, []);

  useEffect(() => {
    refs.nama.current.value = data.nama;
    refs.nip.current.value = data.nip;
    refs.jabatan.current.value = data.jabatan;
    refs.pangkat.current.value = data.pangkat;
    refs.golongan.current.value = data.golongan;
    refs.tanggalLahir.current.value = moment(data.tanggalLahir).format(
      "YYYY-MM-DD"
    );
    refs.tingkatSpd.current.value = data.tingkatSpd;
  }, [edit]);

  function editHendler() {
    setEdit(false);
    setTimeout(() => refs.nama.current.focus(), 0);
  }

  const simpanHendler = () => {
    setEdit(true);
  };

  return (
    <ModalEdit modalId={id} nama={nama}>
      <div className="p-1">
        <h1 className="text-center font-bold text-lg mb-2">
          Edit Data Pegawai
        </h1>

        <div className="grid grid-cols-2 gap-2">
          <label className="input  flex items-center gap-2">
            Nama :
            <input
              ref={refs.nama}
              type="text"
              className="grow"
              disabled={edit}
            />
          </label>
          <label className="input flex items-center gap-2">
            Nip :
            <input
              ref={refs.nip}
              type="text"
              className="grow"
              disabled={edit}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <label className="input flex items-center gap-2 mt-3">
            Pangkat :
            <select
              ref={refs.pangkat}
              className="grow"
            >
              {PangkatGol.map((pangkat, i) => {
                return <option key={i}>{pangkat.nama}</option>;
              })}
            </select>
          </label>
          <label className="input flex items-center gap-2 mt-3">
            Golongan :
            <input
              ref={refs.golongan}
              type="text"
              className="grow"
              disabled={edit}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <label className="input flex items-center gap-2 mt-3">
            Jabatan :
            <input
              ref={refs.jabatan}
              type="text"
              className="grow"
              disabled={edit}
            />
          </label>
          <label className="input flex items-center gap-2 mt-3">
            Tgl Lahir :
            <input
              ref={refs.tanggalLahir}
              type="date"
              className="grow"
              disabled={edit}
            />
          </label>
        </div>

        <div className="flex justify-center">
          <label className="input  flex items-center gap-2 mt-3">
            Tingkat SPD :
            <input
              ref={refs.tingkatSpd}
              type="text"
              className="grow"
              disabled={edit}
            />
          </label>
        </div>
      </div>

      <div className="modal-action">
        {edit ? (
          <label
            htmlFor={id}
            className="btn btn-neutral btn-sm"
            onClick={editHendler}
          >
            Edit
          </label>
        ) : (
          <label className="btn btn-error btn-sm" onClick={simpanHendler}>
            simpan
          </label>
        )}

        <label
          htmlFor={id}
          className="btn btn-warning btn-sm"
          onClick={() => {
            setEdit(true);
          }}
        >
          Tutup
        </label>
      </div>
    </ModalEdit>
  );
};

export default EditKepegawaian;
