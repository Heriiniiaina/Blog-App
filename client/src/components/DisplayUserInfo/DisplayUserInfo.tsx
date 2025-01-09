import { User } from "../../Constants/UserInterface"
import { InputFile } from "../InputFileComponent/InputFile"

interface USERINFO{
    user:User
}
const DisplayUserInfo = ({user}:USERINFO) => {
  return (
    <div>
        <div>
            {
                user.cover ? <img src={user.cover} alt="" /> : <InputFile/>
            }
        </div>
    </div>
  )
}

export default DisplayUserInfo