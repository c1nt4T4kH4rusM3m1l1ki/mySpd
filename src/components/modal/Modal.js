export function ModalEdit(props) {
    const {modalId, nama ,children, lebar='w-8/12'} = props
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor={modalId} className="hover:text-emerald-400 hover:font-bold hover:underline cursor-pointer text-md ">
        {nama}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className={`modal-box ${lebar} max-w-5xl`}>
          {children}
        </div>
      </div>
    </>
  );
}

export function ModalCreate(props) {
  const {modalId, nama ,children, lebar='w-8/12'} = props
return (
  <>
    {/* The button to open modal */}
    <label htmlFor={modalId} className="btn btn-sm btn-outline">
      {nama}
    </label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id={modalId} className="modal-toggle" />
    <div className="modal" role="dialog">
      <div className={`modal-box ${lebar} max-w-screen-xl`}>
        {children}
      </div>
    </div>
  </>
);
}
