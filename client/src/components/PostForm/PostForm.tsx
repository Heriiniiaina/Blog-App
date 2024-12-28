import { useSelector } from "react-redux"
import InputCustom from "../InputCutom/InputCustom"
import { RootState } from "../../store/store"
import { User } from "../../Constants/UserInterface"
import { jwtDecode } from "jwt-decode"




const PostForm = () => {
    const token = useSelector((store: RootState) => store.auth.token) || ""
    const user = jwtDecode(token) as User
    return (
        <div className="flex flex-col gap-4 md:w-[600px] p-5 m-6 bg-white shadow-md shadow-gray-400">
            <div>
                <h4>Create post</h4>
            </div>
            <hr />
            <div>

                <form action="" className="flex flex-col gap-4" encType="multipart/form-data" >
                    <div className="flex items-center gap-3">
                        <img src={user.image} alt="" className="w-[40px] h-[40px] rounded-full" />
                        <InputCustom name="content" placeHolder="Ecrire quelque chose" type="text" className="outline-none" />
                    </div>
                    <hr />
                    <div>
                        <InputCustom name="image" placeHolder="URL de l'image" type="file" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-50 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-slate-50 dark:file:text-neutral-400"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostForm