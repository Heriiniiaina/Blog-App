import { IFriend } from "../../Constants/UserInterface"


interface DisplayFrined{
  friends:IFriend
}

const DisplayFriend = ({friends}:DisplayFrined) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <img src={friends.image} alt="" className="w-[40px] h-[40px] rounded-full"/>
        <p className="text-xl">{friends.nom} {friends.prenom}</p>
    </div>
  )
}

export default DisplayFriend