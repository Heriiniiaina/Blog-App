import { useEffect, useState } from "react";
import { IFriend, User } from "../../Constants/UserInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { jwtDecode } from "jwt-decode";

import { UserApi } from "../../api/user.api";
import DisplayFriend from "../DisplayFriends/DisplayFriend";




const DisplayAllFriends = () => {
    const [friends, setFriends] = useState<IFriend[]>([]);
    
    const token = useSelector((store:RootState)=>store.auth.token)  || "" 
    const user = jwtDecode(token) as User
    useEffect(() => {
       const fetchFriends = async () => {
            try {
                const res = await UserApi.getFriends(user.userId)
                setFriends(res.friends)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFriends()
    }, [])
   
  return (
    <div className="p-5 m-5 bg-[#fff] flex flex-col gap-5">
        <div>
            <h1 className="text-2xl">Friends</h1>
        </div>
        <div>
            {
              friends.map((friend,index)=>
                <DisplayFriend friends={friend} key={index}/>
              )
            }
        </div>
    </div>
  )
}

export default DisplayAllFriends

