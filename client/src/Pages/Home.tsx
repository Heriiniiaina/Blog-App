import Acutality from "../components/Actuality/Acutality"
import DisplayAllFriends from "../components/DisplayAllFriends.tsx/DisplayAllFriends"
import NavBar from "../components/NavBar/NavBar"
import PostForm from "../components/PostForm/PostForm"
import Profile from "../components/ProfilePage/Profile"


const Home = () => {
  return (
    <div className="bg-[#f8f9fa] w-full">

      <div className="sticky top-0 z-10">
        <NavBar />
      </div>


      <div className="flex h-full">
        <div className="w-1/4 h-full hidden md:block bg-white  shadow-md shadow-gray-400 fixed">
          <Profile />
        </div>


        <div className="m-auto md:ml-[25%] w-[100%]  md:w-3/4 h-full ">
          <PostForm />
          <Acutality />
        </div>
        <div>
          <DisplayAllFriends />
        </div>
      </div>
    </div>

  )
}

export default Home