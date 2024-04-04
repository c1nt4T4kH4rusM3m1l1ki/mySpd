import Select from "../elements/Select";

export default function JenisSpt(props) {
  const {thisId, item}=props
  const jenisSpt = [{ nama: "Kaban" }, { nama: "Sekda" }, { nama: "Wako" }];
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor={thisId} className="btn btn-xs btn-accent">
        SPT
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={thisId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-[300px]">
          <h3 className="font-bold text-lg">Pilih Jenis SPT!</h3>
          <Select isi={jenisSpt}/>
          <div className="modal-action">
            <label htmlFor={thisId} className="btn btn-md btn-error">
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
