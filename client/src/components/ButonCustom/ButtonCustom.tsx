


interface Button{
    text:string | "",
    type:"submit" | "reset" | "button" | undefined
}
const ButtonCustom = ({text,type}:Button) => {
  return (
    <button type={type}>{text}</button>
  )
}

export default ButtonCustom