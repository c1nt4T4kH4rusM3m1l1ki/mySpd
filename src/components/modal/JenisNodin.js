"use client";
import { useRef } from "react";
import Select from "../elements/Select";
import { MakeNodin} from "@/lib/fungsiLain";

export default function JenisNodin(props) {
  const { thisId, item, setUrlLoad, urlLoad, mutate } = props;
  const jenis = useRef();
  const jenisNodin = [
    { nama: "Walikota" }, 
    { nama: "Sekda" }, 
    { nama: "Sekretaris" },
    {nama:"Kabid Pit" },
    {nama:"Kabid Sosekpem"}
];
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={thisId}
        className="btn btn-xs btn-accent mt-1"
        disabled={urlLoad}
      >
        Nodin
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={thisId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[300px]">
          <h3 className="font-bold text-lg">Pilih Jenis Nota Dinas!</h3>
          <Select isi={jenisNodin} ref={jenis} />
          <div className="modal-action">
            <label
              htmlFor={thisId}
              className="btn btn-md btn-error"
              onClick={async () => {
                setUrlLoad(true);
                await MakeNodin(item.id, jenis.current.value)
                  .then(() => {
                    mutate(process.env.URL_SPD);
                  })
                  .then(() => {
                    setTimeout(() => {
                      setUrlLoad(false);
                    }, 10000);
                  });
              }}
            >
              Ok Lanjut
            </label>
            <label htmlFor={thisId} className="btn btn-md btn-warning">
              Ngak Jadi
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
