"use client";
import { useState } from "react";

export default function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-16 p-12 ml-5">
        <h1 className="text-center font-bold underline text-red-600 text-2xl mt-16">
          PERHATIAN !!
        </h1>
        <p className="text-xl text-center mt-3 px-4">
          Sebagaimana Peraturan Standar Pada Setiap Aplikasi. Tentu saja Anda Harus Masukan
          Password Untuk Memulai Menggunakan Aplikasi ini !!!
        </p>
      </div>
      <div className="flex justify-center">
      <LoginForm />
      </div>
    </div>
  );
}

function LoginForm() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" my-[135px] rounded-2xl w-7/12 bg-cyan-300 shadow-lg shadow-cyan-500/50 p-10">
      <span className="font-bold">PASSWORD:</span>
      <label className="input input-bordered flex items-center gap-2 mt-3">
        <input
          type={visible ? "text" : "password"}
          className="grow text-emerald-700"
        />
        {visible ? (
          <Terlihat set={setVisible} />
        ) : (
          <TakTerlihat set={setVisible} />
        )}
      </label>
      <div className="mt-5 flex justify-end">
        <button className="btn btn-warning shadow-yellow-100/10 ">LOGIN</button>
      </div>
    </div>
  );
}

function TakTerlihat({ set }) {
  return (
    <span
      className="material-symbols-outlined btn btn-xs glass text-emerald-700"
      onClick={() => {
        set(true);
      }}
    >
      visibility_off
    </span>
  );
}

function Terlihat({ set }) {
  return (
    <span
      className="material-symbols-outlined btn btn-xs glass text-emerald-700"
      onClick={() => {
        set(false);
      }}
    >
      visibility
    </span>
  );
}
