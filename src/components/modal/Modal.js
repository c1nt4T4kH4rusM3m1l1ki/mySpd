export function ModalEdit(props) {
    const {modalId, nama ,children} = props
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor={modalId} className="hover:text-emerald-400 hover:font-bold hover:underline cursor-pointer text-md ">
        {nama}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-8/12 max-w-5xl ">
          {children}
        </div>
      </div>
    </>
  );
}
