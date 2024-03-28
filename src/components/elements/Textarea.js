import { forwardRef } from "react";

const TextareaLg=forwardRef(function TextareaLg(props,ref){
    const {name, active=false, onChange} = props
    return (
        <label className="form-control">
        <div className="label">
          <span>{name}</span>
        </div>
        <textarea ref={ref} disabled={active} onChange={onChange}
          className="textarea textarea-bordered w-[35rem] h-[9rem]"
        ></textarea>
      </label>
    )
})


export default TextareaLg