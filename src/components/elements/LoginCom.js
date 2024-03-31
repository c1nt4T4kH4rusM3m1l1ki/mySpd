"use client";
import { useState } from "react";

export default function LoginCom() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <dialog
        open
        className=" mt-28 z-30 rounded-2xl bg-emerald-500 shadow-lg shadow-emerald-500/50 p-10"
      >
       
        <label className="input input-bordered flex items-center gap-2 mt-3">
          <span>MASUKAN PASSWORD:</span>
          <input type={visible ? "text" : "password"} className="grow text-emerald-700" />
          {visible ? <Terlihat set={setVisible}/> : <TakTerlihat set={setVisible}/>}
        </label>
        <div className="mt-5 flex justify-end">
          <button className="btn btn-primary">LOGIN</button>
        </div>
      </dialog>
    </div>
  );
}

function TakTerlihat({set}) {
  return (
    <span className="material-symbols-outlined btn btn-xs glass" onClick={()=>{set(true)}}>
      visibility_off
    </span>
  );
}

function Terlihat({set}) {
  return (
    <span className="material-symbols-outlined btn btn-xs glass" onClick={()=>{set(false)}}>
      visibility
    </span>
  );
}
