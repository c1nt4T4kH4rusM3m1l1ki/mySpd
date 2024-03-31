import Image from "next/image";

const Renewdata = () => {
  return (
    <dialog open className="mt-16 bg-emerald-400 shadow-emerald-500/50 z-30 w-[400px] h-[400px] rounded-full p-10">
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
    <Image
      src="https://i.gifer.com/NvL.gif"
      width={500}
      height={400}
      alt="Picture of the author"
      className="rounded-3xl w-[400px] h-[250px]"
    />
  );
}
