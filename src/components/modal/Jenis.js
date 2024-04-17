"use client";
import { useRef } from "react";
import Select from "../elements/Select";
import { MakeSpt} from "@/lib/fungsiLain";

export default function JenisSpt(props) {
  const { thisId, item, setUrlLoad, urlLoad, mutate } = props;
  const tipe = useRef();
  const jenisSpt = [{ nama: "Kaban" }, { nama: "Sekda" }, { nama: "Walikota" }];
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={thisId}
        className="btn btn-xs btn-accent"
        disabled={urlLoad}
      >
        SPT
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={thisId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[300px]">
          <h3 className="font-bold text-lg">Pilih Jenis SPT!</h3>
          <Select isi={jenisSpt} ref={tipe} />
          <div className="modal-action">
            <label
              htmlFor={thisId}
              className="btn btn-md btn-error"
              onClick={async () => {
                setUrlLoad(true);
                await MakeSpt(item.id, tipe.current.value)
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
