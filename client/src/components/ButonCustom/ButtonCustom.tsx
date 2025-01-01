


interface Button{
    
    type:"submit" | "reset" | "button" | undefined,
    children:any,
    className?:string | undefined,
    isDisabled?:boolean | undefined
}
const ButtonCustom = ({children,type,className,isDisabled}:Button) => {
  return (
    <button disabled={isDisabled} className={className} type={type}>{children}</button>
  )
}

export default ButtonCustom