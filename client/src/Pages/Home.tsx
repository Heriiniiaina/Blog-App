import Acutality from "../components/Actuality/Acutality"
import NavBar from "../components/NavBar/NavBar"
import Profile from "../components/ProfilePage/Profile"


const Home = () => {
  return (
    <div className="bg-[#f8f9fa] h-screen">
      <div>
        <NavBar/>
      </div>
      <div className="flex w-[100%]">
      <Profile/>
      <Acutality/>
   </div>
    </div>
   
  )
}

export default Home