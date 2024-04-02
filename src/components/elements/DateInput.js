import { forwardRef } from "react";

const DateInput = forwardRef(function DateInput(props, ref){
    const {name, active=false, onChange} = props
    const disableColor= {color:'#000000'}
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
            style={disableColor}
          />
        </label>
    )
})

export default DateInput