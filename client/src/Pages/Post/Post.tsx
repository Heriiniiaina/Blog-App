import {useParams} from "react-router-dom"
import { getPost } from "../../services/post.service"
import NavBar from "../../components/NavBar/NavBar"
import Loading from "../../components/Loading/Loading"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"
import { POST } from "../../Constants/PostInterface"
import { getDate } from "../../services/data.service"



const Post = () => {
  const {id} = useParams()
  const post  = getPost(id) as POST
  console.log(post)
  const loading = useSelector((store:RootState)=>store.loading.loading)
    return (
        <>
        <div className="bg-[#f8f9fa] w-full">
    
          <div className="sticky top-0 z-10">
            <NavBar />
          </div>
    
    
          <div className="flex flex-col gap-3 h-full">
              <div className="info-user">
                  <div className="flex items-center gap-2">
                      <img src={post.user.image} alt="" className="rounded-full w-[50px] h-[50px]"/>
                      <div >
                        <h1 className="text-xl">{post.user.nom} {post.user.prenom}</h1>
                        <p className="text-sm text-gray-600">{getDate(post.createdAt)}</p>
                      </div>
                  </div>
              </div>
              <div className="post-info">
                 <div>
                 <h1>{post.content}</h1>
                  {
                      post.image && <img src={post.image} alt="" className="w-[400px] h-[400px]"/>
                  }
                 </div>
              </div>
          </div>
        </div>
        <div className={loading ? "fixed bg-slate-600 inset-0 bg-opacity-90 flex justify-center items-center z-50" : "hidden"}>
              <Loading size="large"/>
          </div>
        </>
  )
}

export default Post