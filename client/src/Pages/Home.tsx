import Acutality from "../components/Actuality/Acutality"
import Profile from "../components/ProfilePage/Profile"


const Home = () => {
  return (
   <div className="flex ">
      <Profile/>
      <Acutality/>
   </div>
  )
}

export default Home