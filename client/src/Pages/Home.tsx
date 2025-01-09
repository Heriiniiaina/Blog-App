import { useSelector } from "react-redux"
import Acutality from "../components/Actuality/Acutality"
import DisplayAllFriends from "../components/DisplayAllFriends.tsx/DisplayAllFriends"
import NavBar from "../components/NavBar/NavBar"
import PostForm from "../components/PostForm/PostForm"

import { RootState } from "../store/store"
import Loading from "../components/Loading/Loading"



const Home = () => {
  const loading = useSelector((store:RootState)=>store.loading.loading)

  return (
    <>
    <div className="bg-[#f8f9fa] w-full">

      <div className="sticky top-0 z-10">
        <NavBar />
      </div>


      <div className="flex h-full">
        <div className="w-1/4 h-full hidden md:block bg-white  shadow-md shadow-gray-400 fixed">
        
        </div>


        <div className="md:ml-[25%] w-[100%]  md:w-2/4 h-full ">
          <PostForm />
          <Acutality />
        </div>
        <div className="hidden md:block md:w-1/4">
          <DisplayAllFriends />
        </div>
      </div>
    </div>
    <div className={loading ? "fixed bg-slate-600 inset-0 bg-opacity-90 flex justify-center items-center z-50" : "hidden"}>
          <Loading size="large"/>
      </div>
    </>

  )
}

export default Home