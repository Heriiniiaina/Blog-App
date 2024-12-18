


interface Button{
    
    type:"submit" | "reset" | "button" | undefined,
    children:any,
    className?:string | undefined
}
const ButtonCustom = ({children,type,className}:Button) => {
  return (
    <button className={className} type={type}>{children}</button>
  )
}

export default ButtonCustom