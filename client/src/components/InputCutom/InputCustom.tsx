interface Input{
    type:string | "text",
    placeHolder:string | "",
    onChange?: (e:React.InputHTMLAttributes<HTMLInputElement>)=>void
}

const InputCustom = ({type,placeHolder,onChange}:Input) => {
  return (
    <input  type={type} placeholder={placeHolder}  onChange={onChange}/>
  )
}

export default InputCustom