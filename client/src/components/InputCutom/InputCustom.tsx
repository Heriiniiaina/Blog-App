import React, { ChangeEventHandler } from "react"

interface Input{
    type:string | "text",
    placeHolder:string | "",
    onChange?: ChangeEventHandler<HTMLInputElement | undefined>,
    style?:React.HTMLAttributes<HTMLInputElement> | React.CSSProperties | undefined
    className?:string | undefined
}

const InputCustom = ({type,className,placeHolder,onChange,style}:Input) => {
  return (
    <input className={className}  style={style} type={type} placeholder={placeHolder}  onChange={onChange}/>
  )
}

export default InputCustom