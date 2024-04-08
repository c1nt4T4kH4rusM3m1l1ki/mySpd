import { forwardRef } from "react";

const Select = forwardRef(function Select(props, ref) {
  const { name, active = false, onChange, mt, isi = [] } = props;
  const disableColor= {color:'#000000'}
  return (
    <label className="form-contro">
      <div className="label">
        <span>{name}</span>
      </div>
      <select
        className={`select select-bordered w-60 ${mt}`}
        disabled={active}
        onChange={onChange}
        ref={ref}
        style={disableColor}
      >
        <option value={''}></option>
        {isi.map((e, i) => {
          return <option key={i}>{e.nama}</option>;
        })}
      </select>
    </label>
  );
});

export default Select;
