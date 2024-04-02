import Image from "next/image";

const Renewdata = () => {
  return (
    <dialog
      open
      className="mt-40 bg-base-400 shadow-slate-500/50 z-30 w-[300px] h-[80px] rounded-2xl "
    >
      
      <p className="text-center mt-4 text-red-800 font-bold">
        <span>PROSES UPDATE DATA</span>
      </p>
      <div className="text-center text-red-800">
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-sm"></span>
      </div>
    </dialog>
  );
};

export default Renewdata;
