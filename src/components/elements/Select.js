import { forwardRef } from "react";

const Select = forwardRef(function Select(props, ref){
  const { name, active = false, onChange, mt } = props;
  return (
    <label className="form-control">
      <div className="label">
        <span>{name}</span>
      </div>
      <select className={`select select-bordered w-60 ${mt}`} disabled={active} onChange={onChange} ref={ref}>
        <option disabled selected>
          Pilih
        </option>
        <option>Star Wars</option>
      </select>
    </label>
  );
});

export default Select;
