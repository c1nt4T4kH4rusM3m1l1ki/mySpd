import Image from "next/image";

const Renewdata = () => {
  return (
    <dialog
      open
      className="mt-14 bg-emerald-400 shadow-emerald-500/50 z-30 w-[400px] h-[400px] rounded-full p-10"
    >
      <div className="flex justify-center">
        <Gambar />
      </div>
      <p className="text-center mt-4 text-red-800 font-bold">
        <span>UPDATE DATA</span>
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

function Gambar() {
  return (
    <>
      <iframe
        src="https://gifer.com/embed/J4o"
        width="500"
        height="230"
        frameBorder="0"
        allowFullScreen
        className="rounded-3xl mt-3"
      ></iframe>
    </>
  );
}
