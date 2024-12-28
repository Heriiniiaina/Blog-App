import Acutality from "../components/Actuality/Acutality"
import NavBar from "../components/NavBar/NavBar"
import PostForm from "../components/PostForm/PostForm"
import Profile from "../components/ProfilePage/Profile"


const Home = () => {
  return (
    <div className="bg-[#f8f9fa] h-screen w-full">

      <div className="sticky top-0 z-10">
        <NavBar />
      </div>


      <div className="flex h-full">
        <div className="w-1/4 h-full bg-white  shadow-md shadow-gray-400 fixed">
          <Profile />
        </div>


        <div className="ml-[25%] w-3/4 h-full overflow-y-auto">
          <PostForm />
          <Acutality />
        </div>
      </div>
    </div>

  )
}

export default Home