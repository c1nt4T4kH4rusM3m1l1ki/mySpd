import { forwardRef } from "react";

const DateInput = forwardRef(function DateInput(props, ref){
    const {name, active=false, onChange} = props
    return (
        <label className="form-control">
          <div className="label">
            <span>{name}</span>
          </div>
          <input
            ref={ref}
            disabled={active}
            onChange={onChange}
            type="date"
            placeholder="Type here"
            className="input input-bordered w-[15rem]"
          />
        </label>
    )
})

export default DateInput