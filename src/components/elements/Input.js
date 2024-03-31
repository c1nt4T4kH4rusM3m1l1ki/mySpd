import { forwardRef } from "react";

const Input = forwardRef( function Input(props, ref){
    const {name, active=false, onChange, type="text"} = props
    return (
        <label className="form-control">
          <div className="label">
            <span>{name}</span>
          </div>
          <input
            ref={ref}
            disabled={active}
            onChange={onChange}
            type={type}
            className="input input-bordered w-[15rem]"
          />
        </label>
    )
})

export default Input