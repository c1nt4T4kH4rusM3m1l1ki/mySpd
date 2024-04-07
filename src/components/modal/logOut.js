const { signOut } = require("next-auth/react");

const ModalLogOut = () => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn-circle btn-outline btn">
        <span className="material-symbols-outlined hover:scale-150 hover:text-cyan-600 hover:rotate-[6deg]">
          lock_open
        </span>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-emerald-300 shadow-lg shadow-emerald-300/30">
          <h3 className="font-bold text-3xl text-red-600 underline text-center">
            PERHATIAN !
          </h3>
          <p className="py-4 text-center text-2xl">Apakah Anda Yakin akan Keluar ? </p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-error text-lg"
              onClick={() => signOut()}
            >
              YAKIN
            </label>
            <label htmlFor="my_modal_6" className="btn btn-warning text-lg">
              TIDAK YAKIN
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogOut;
