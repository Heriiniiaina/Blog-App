import { useSelector } from "react-redux"
import InputCustom from "../InputCutom/InputCustom"
import { RootState } from "../../store/store"
import { User } from "../../Constants/UserInterface"
import { jwtDecode } from "jwt-decode"




const PostForm = () => {
    const token = useSelector((store:RootState)=>store.auth.token)  || ""
    const user = jwtDecode(token) as User
  return (
    <div className="flex flex-col gap-4 md:w-[600px] p-5 m-6 bg-white">
        <div>
            <h4>Create post</h4>
        </div>
        <hr />
        <div>
            <form action="" className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <img src={user.image} alt="" className="w-[40px] h-[40px] rounded-full"/>
                    <InputCustom name="content" placeHolder="Ecrire quelque chose" type="text" className="outline-none"/>
                </div>
                <hr />
                <div>
                    <InputCustom name="image" placeHolder="URL de l'image" type="file" className="outline-none"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostForm