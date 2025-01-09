import DisplayUserInfo from "../components/DisplayUserInfo/DisplayUserInfo"
import NavBar from "../components/NavBar/NavBar"


const Profile = () => {
  return (
    <div className="bg-[#f8f9fa] w-full">

      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div>
         <div>
            <DisplayUserInfo/>
         </div>
         <div>

         </div>
      </div>
    
    </div>
  )
}

export default Profile