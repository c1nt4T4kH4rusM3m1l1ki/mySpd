import { Yuji_Syuku } from "next/font/google";

const yuji = Yuji_Syuku({
  subsets: ["latin"],
  weight: "400",
});

const TambahPegawai = () => {
  return (
    <div className="drawer mt-6">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn bg-cyan-500 btn-sm rounded-full ml-20 drawer-button text-lg text-white "
        >
          <span className="material-symbols-outlined">person_add</span>
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-[500px] min-h-full bg-base-100 text-base-content">
          <h1
            className={`text-center font-bold mt-6 text-xl ${yuji.className}`}
          >
            TAMBAH PEGAWAI
          </h1>
          {/* tempatkan isian */}
          <div className="p-3">
            <FormInput />
          </div>
        </div>
      </div>
    </div>
  );
};

const FormInput = () => {
  return (
    <form className={`mt-3 ${yuji.className} `}>
      <label className="input input-bordered flex items-center gap-2 font-bold text-md w-[450px]">
        NAMA :
        <input type="text" className="grow" />
      </label>
      <label className="input input-bordered flex items-center mt-5 gap-2 text-md w-[450px] font-bold">
        NIP :
        <input type="text" className="grow" />
      </label>
      <label className="input input-bordered flex items-center mt-5 gap-2 text-md w-[450px] font-bold">
        PANGKAT :
        <input type="text" className="grow" />
      </label>
      <label className="input input-bordered flex items-center mt-5 gap-2 text-md w-[450px] font-bold">
        GOL :
        <input type="text" className="grow" />
      </label>
      <label className="input input-bordered flex items-center mt-5 gap-2 text-md w-[450px] font-bold">
        JABATAN :
        <input type="text" className="grow" />
      </label>
      <label className="input input-bordered flex items-center mt-5 gap-2 text-md w-[450px] font-bold">
        TGL LAHIR :
        <input type="date" className="grow" />
      </label>
      <label className="input input-bordered flex items-center mt-5 gap-2 text-md w-[450px] font-bold">
        TINGKAT SPD:
        <input type="text" className="grow" />
      </label>
      <div className="flex justify-end">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="btn btn-neutral btn-sm mt-3 text-white"
        >
          TAMBAH
        </label>
      </div>
    </form>
  );
};

export default TambahPegawai;
