import Acutality from "../components/Actuality/Acutality"
import NavBar from "../components/NavBar/NavBar"
import Profile from "../components/ProfilePage/Profile"


const Home = () => {
  return (
    <div className="bg-[#f8f9fa] h-screen w-[100%]">
      <div>
        <NavBar/>
      </div>
      <div className="flex w-[100%]">
        <div className="w-1/4 hidden md:block">
          <Profile/>
        </div>
        <div className="w-3/4 ">
          <Acutality />
        </div>
   </div>
    </div>
   
  )
}

export default Home